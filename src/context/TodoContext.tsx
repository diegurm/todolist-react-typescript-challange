import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { db } from '../services/firebase'; // Importa o Firestore
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, getDocs, query, where, updateDoc, deleteDoc, doc } from 'firebase/firestore';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  userId: string;
}

interface TodoContextType {
  todos: Todo[];
  loading: boolean;
  addTodo: (text: string) => void;
  toggleComplete: (id: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void; 
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser }: any = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    if (!currentUser) return;

    const fetchTodos = async () => {
      setLoading(true);

      const q = query(collection(db, 'todos'), where('userId', '==', currentUser.uid));
      const querySnapshot = await getDocs(q);
      const todosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Todo[];

      setTodos(todosData);
      setLoading(false);
    };

    fetchTodos();
  }, [currentUser]);

  const addTodo = async (text: string) => {
    if (!currentUser) return;

    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      userId: currentUser.uid,
    };

    try {
      const docRef = await addDoc(collection(db, 'todos'), newTodo);
      setTodos(prevTodos => [...prevTodos, { ...newTodo, id: docRef.id }]);
    } catch (error) {
      console.error('Error adding todo: ', error);
    }
  };

  const toggleComplete = async (id: string) => {
    const todo = todos.find(todo => todo.id === id);
    if (!todo) return;

    try {
      const todoRef = doc(db, 'todos', id);
      await updateDoc(todoRef, {
        completed: !todo.completed,
      });
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      console.error('Error updating todo: ', error);
    }
  };

  const removeTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo: ', error);
    }
  };

  const editTodo = async (id: string, newText: string) => {
    if (!currentUser) return;

    try {
      await updateDoc(doc(db, 'todos', id), { text: newText });
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    } catch (error) {
      console.error('Error updating todo: ', error);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, loading, addTodo, toggleComplete, removeTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};
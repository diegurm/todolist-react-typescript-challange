import React, { useState } from 'react';

import * as S from './styles';
import TodoItem from './components/TodoItem/TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (text: string) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo: Todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
    }
  };

  return (
    <S.Container>
      <S.FormWrapper>
        <h2 className="text-2xl font-bold text-center text-gray-900">To-Do List</h2>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
          />
          <S.AddButton type="submit">Add</S.AddButton>
        </S.Form>
        <div className="space-y-2" >
          {todos.map((todo: any) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          ))}
        </div>

      </S.FormWrapper>
    </S.Container>
  );
};

export default Todolist;
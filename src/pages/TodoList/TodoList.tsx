import React, { useState } from 'react';

import * as S from './styles';
import TodoItem from './components/TodoItem/TodoItem';
import { useTodos } from '../../context/TodoContext';

const Todolist: React.FC = () => {
  const { todos, loading, addTodo, toggleComplete, removeTodo, editTodo } = useTodos();
  const [newTodo, setNewTodo] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
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
          {loading ? (
            <p>Loading to-dos...</p>
          ) : todos.length === 0 ? (
            <p>No to-dos available.</p>
          ) : (
            <>
              {todos.map((todo: any) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  toggleComplete={toggleComplete}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                />
              ))}
            </>
          )}
        </div>

      </S.FormWrapper>
    </S.Container>
  );
};

export default Todolist;
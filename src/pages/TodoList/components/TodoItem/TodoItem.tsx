import React from 'react';

import * as S from './styles';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleComplete, removeTodo }) => {
  return (
    <S.Container completed={completed}>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          className="mr-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <S.Text completed={completed}>{text}</S.Text>
      </div>
      <S.Button onClick={() => removeTodo(id)}>Remove</S.Button>
    </S.Container>
  );
};

export default TodoItem;
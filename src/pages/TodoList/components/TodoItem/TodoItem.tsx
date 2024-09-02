import React, { useState } from 'react';

import * as S from './styles';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  toggleComplete: (id: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleComplete, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(id, newText);
    }
    setIsEditing(!isEditing);
  };


  return (
    <S.Container completed={completed}>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          className="mr-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1"
          />
        ) : (
          <S.Text completed={completed}>{text}</S.Text>
        )}
      </div>
      <div className="flex">
        <S.Button onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </S.Button>
        {!isEditing && (
          <S.Button onClick={() => removeTodo(id)} className="ml-2">
            Remove
          </S.Button>
        )}

      </div>
    </S.Container>
  );
};

export default TodoItem;
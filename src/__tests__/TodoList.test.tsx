import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../pages/TodoList/TodoList';
import { TodoProvider } from '../context/TodoContext';

describe('TodoList Component', () => {
  it('renders the todo list', () => {
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    expect(screen.getByText(/your to-do list/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/add a new to-do/i)).toBeInTheDocument();
  });

  it('allows the user to add a new todo', () => {
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    const input = screen.getByPlaceholderText(/add a new to-do/i);
    const addButton = screen.getByText(/add to-do/i);

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  it('allows the user to remove a todo', () => {
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    const input = screen.getByPlaceholderText(/add a new to-do/i);
    const addButton = screen.getByText(/add to-do/i);

    fireEvent.change(input, { target: { value: 'Task to Remove' } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText(/remove/i);
    fireEvent.click(removeButton);

    expect(screen.queryByText('Task to Remove')).not.toBeInTheDocument();
  });

  it('allows the user to edit a todo', () => {
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    const input = screen.getByPlaceholderText(/add a new to-do/i);
    const addButton = screen.getByText(/add to-do/i);

    fireEvent.change(input, { target: { value: 'Task to Edit' } });
    fireEvent.click(addButton);

    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue('Task to Edit');
    fireEvent.change(editInput, { target: { value: 'Edited Task' } });
    fireEvent.click(screen.getByText(/save/i));

    expect(screen.getByText('Edited Task')).toBeInTheDocument();
  });
});
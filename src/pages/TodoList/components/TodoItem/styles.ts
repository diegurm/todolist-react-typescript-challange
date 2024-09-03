import styled from 'styled-components';
 
export const Container = styled.div.attrs<{ completed: boolean }>({
  className: 'flex items-center justify-between px-3 py-2 border border-gray-200 rounded-md shadow-sm',
})`
  background-color: ${({ completed }) => (completed ? '#d1fae5' : '#ffffff')}; /* bg-green-100 */
`;

export const Text = styled.span.attrs<{ completed: boolean }>({
  className: 'text-gray-900',
})`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#6b7280' : '#000000')}; /* text-gray-500 */
`;

export const Button = styled.button.attrs({
  className: 'text-red-600 hover:text-red-800 focus:outline-none',
})``;


export const Input = styled.input.attrs({
  type: 'text',
  className: 'flex-grow px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500',
})``;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
  className: "mr-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500",
})``;
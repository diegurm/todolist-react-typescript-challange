import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'flex items-center justify-center min-h-screen',
})``;

export const FormWrapper = styled.div.attrs({
  className: 'w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md',
})``;

export const Title = styled.h2.attrs({
  className: 'text-2xl font-bold text-center text-gray-900',
})``;

export const Form = styled.form.attrs({
  className: 'mt-8 space-y-6',
})``;

export const InputGroup = styled.div.attrs({
  className: '-space-y-px rounded-md shadow-sm',
})``;

export const Input = styled.input.attrs({
  className: 'relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
})``;

export const Options = styled.div.attrs({
  className: 'flex items-center justify-between',
})``;

export const Checkbox = styled.input.attrs({
  className: 'w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500',
})``;

export const Label= styled.label.attrs({
  className: 'block ml-2 text-sm text-gray-900',
})``;

export const Link = styled.a.attrs({
  className: 'font-medium text-indigo-600 hover:text-indigo-500',
})``;

export const Button = styled.button.attrs({
  className: 'relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
})``;

export const Divider = styled.div.attrs({
  className: 'flex items-center justify-between',
})`
  span {
    margin: 0 0.75rem;
    color: #6b7280; /* text-gray-600 */
    font-size: 0.875rem; /* text-sm */
  }
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #d1d5db; /* border-gray-300 */
  }
`;

export const GoogleButton = styled.button.attrs({
  className: 'relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
})``;

export const GoogleIcon = styled.img.attrs({
  className: 'w-5 h-5 mr-3',
})``;
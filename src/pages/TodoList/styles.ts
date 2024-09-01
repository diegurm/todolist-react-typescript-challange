import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'flex items-center justify-center min-h-screen',
})``;

export const FormWrapper = styled.div.attrs({
  className: 'w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md',
})``;

export const Form = styled.form.attrs({
  className: 'flex mb-4',
})``;

export const Input = styled.input.attrs({
  className: 'flex-grow px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500',
})``;

export const AddButton = styled.button.attrs({
  className: 'px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500',
})``;
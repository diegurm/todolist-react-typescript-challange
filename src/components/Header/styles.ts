import styled from 'styled-components';

export const HeaderContainer = styled.header.attrs({
  className: 'bg-indigo-600 p-4 flex justify-between items-center',
})``;

export const Title = styled.h1.attrs({
  className: 'text-lg font-bold text-white',
})``;

export const UserSection = styled.div.attrs({
  className: 'flex items-center space-x-4',
})``;

export const UserInfo = styled.span.attrs({
  className: 'text-white',
})``;

export const LogoutButton = styled.button.attrs({
  className: 'px-4 py-2 text-indigo-600 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500',
})``;
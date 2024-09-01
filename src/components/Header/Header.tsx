import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Title>To-Do List</S.Title>
      <S.UserSection>
        <S.UserInfo>Logged in as <strong>Diego</strong></S.UserInfo>
        <S.LogoutButton>Logout</S.LogoutButton>
      </S.UserSection>
    </S.HeaderContainer>
  );
}

export default Header;
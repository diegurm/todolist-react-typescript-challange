import React from 'react';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import { auth } from '../../services/firebase';
import { clearUser } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <S.HeaderContainer>
      <S.Title>To-Do List</S.Title>
      <S.UserSection>
        {user && (<>
          <S.UserInfo>Hi, <strong>{user?.displayName ?? user?.email}</strong></S.UserInfo>
          <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton> </>
        )}
      </S.UserSection>
    </S.HeaderContainer>
  );
}

export default Header;
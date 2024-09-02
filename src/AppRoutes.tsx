import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import TodoList from './pages/TodoList/TodoList';

import { useAuth } from './context/AuthContext';

const PrivateRoute: React.FC = () => {
  const { currentUser }: any = useAuth();

  // Se o usuário estiver autenticado, renderiza o componente filho
  // Caso contrário, redireciona para a página de login
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<TodoList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
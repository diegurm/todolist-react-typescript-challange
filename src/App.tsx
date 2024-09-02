import { Provider } from 'react-redux';

import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import AppRoutes from './AppRoutes';
import { store } from './redux/store';

const ContextWrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    <TodoProvider>
        {children}
    </TodoProvider>
  </AuthProvider>
);


function App() {
  return (
    <Provider store={store}>
      <ContextWrapper>
        <div className="bg-gray-100">
         <AppRoutes />
        </div>
      </ContextWrapper>
    </Provider>
  );
};
export default App;

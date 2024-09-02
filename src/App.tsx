import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';
import { store } from './redux/store';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="bg-gray-100">
         <AppRoutes />
        </div>
      </AuthProvider>
    </Provider>
  );
};
export default App;

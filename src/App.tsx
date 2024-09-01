import './App.css';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import TodoList from './pages/TodoList/TodoList';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <TodoList />
      {/* <Login /> */}
    </div>
  );
}

export default App;

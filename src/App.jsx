import './App.css';
import Input from './components/Input';
import TaskList from './components/TaskList';
import Search from './components/SearchBar';
function App() {
  return (
    <main className='container'>
      <h1>Lista de Tareas</h1>
      <Search />
      <Input />
      <TaskList />

    </main>
  );
}

export default App;





import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import TaskList from './components/TaskList';
import Search from './components/SearchBar';
function getTasksFromStorage() {
  const storedTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks : [];
}

function App() {
  const [tasks, setTasks] = useState(getTasksFromStorage());
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState("");

  //función para agregar una nueva tarea, recibe la descripción que viene
  //del evento que se dispara cuando le damos "Crear" en el componente Input
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
  };

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // función para borrar una tarea habiendo recibido el id
  const handleDelete = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks([...remainingTasks]);
  };

  //función que cambia el valor de isCompleted (una tarea puede pasar de 
  // pendiente a competada )

  const handleChangeStatus = (id) => {
    const modifiedTasks = tasks.map(t =>
      t.id === id ?
        { ...t, isCompleted: !t.isCompleted }
        :
        t
    );
    setTasks([...modifiedTasks]);
    setFilteredTasks([...modifiedTasks]);

  };

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
    const queryResult = tasks.filter(t => t.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setFilteredTasks(queryResult);
  };


  return (
    <main className='container'>
      <h1>Lista de Tareas</h1>
      <Search onSearch={query => handleSearchQuery(query)} />

      <Input onAddTask={(description) => handleAddTask(description)} />
      {tasks &&

        <TaskList
          onDeleteTask={(id) => handleDelete(id)} tasks={filteredTasks}
          onChangeStatus={(id) => handleChangeStatus(id)}
        />
      }
    </main>
  );
}

export default App;





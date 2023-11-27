import { useContext } from "react";
import { AppCtx } from "../context";

function Input() {
  const { tasks, setTasks, filteredTasks, setFilteredTasks } = useContext(AppCtx);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoForm = new FormData(e.target);
    const description = todoForm.get('description');
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
    e.target.reset();

  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Nueva tarea: </label>
      <input type="text" name="description" id="description" placeholder="Comprar pan..." required />
      <input type="submit" value="Crear" />
    </form>
  );
}

export default Input;
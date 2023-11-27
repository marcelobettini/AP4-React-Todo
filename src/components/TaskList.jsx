import { useEffect, useContext } from "react";
import Task from "./Task";
import { AppCtx } from '../context';
function TaskList() {
  const { tasks, filteredTasks } = useContext(AppCtx);
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>descripción</th>
          <th>borrar</th>
          <th>marcar</th>
        </tr>
      </thead>
      <tbody>
        {filteredTasks.map(t => <Task key={t.id} task={t} />)}
      </tbody>
    </table>

  );
}

export default TaskList;
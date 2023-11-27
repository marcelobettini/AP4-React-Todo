import { IoTrashBin } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { AppCtx } from "../context";
function Task({ task }) {
  const { tasks, setTasks, setFilteredTasks } = useContext(AppCtx);

  const onChangeStatus = (id) => {
    const modifiedTasks = tasks.map(t =>
      t.id === id ?
        { ...t, isCompleted: !t.isCompleted }
        :
        t
    );
    setTasks([...modifiedTasks]);
    setFilteredTasks([...modifiedTasks]);
  };

  const onDeleteTask = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks([...remainingTasks]);
  };

  return (
    <tr
      className={task.isCompleted ? "completed" : null}
    >
      <td>
        {task.id.slice(-5)}
      </td>
      <td>
        {task.description}
      </td>
      <td>
        <IoTrashBin size={20} color={'red'} className="icons" onClick={() => onDeleteTask(task.id)} />
      </td>
      <td>
        <IoIosCloseCircle className="icons" size={20} color="blue" onClick={() => onChangeStatus(task.id)} />
      </td>
    </tr>
  );
}

export default Task;
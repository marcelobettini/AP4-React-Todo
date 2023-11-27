import { IoTrashBin } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

function Task({ task, onDeleteTask, onChangeStatus }) {
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
        <IoTrashBin size={20} color={'red'} className="icons" onClick={() => onDeleteTask(t.id)} />
      </td>
      <td>
        <IoIosCloseCircle className="icons" size={20} color="blue" onClick={() => onChangeStatus(t.id)} />
      </td>
    </tr>
  );
}

export default Task;

import { IoTrashBin } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
function TaskList({ tasks, onDeleteTask, onChangeStatus }) {

  return (
    <table>
      <thead>
        <th>id</th>
        <th>descripción</th>
        <th>borrar</th>
        <th>marcar</th>
      </thead>
      <tbody>
        {tasks.map(t => <tr key={t.id}
          className={t.isCompleted ? "completed" : null}
        >
          <td>
            {t.id.slice(-5)}
          </td>
          <td>
            {t.description}
          </td>
          <td>
            <IoTrashBin size={20} color={'red'} className="icons" onClick={() => onDeleteTask(t.id)} />
          </td>
          <td>
            <IoIosCloseCircle className="icons" size={20} color="blue" onClick={() => onChangeStatus(t.id)} />
          </td>
        </tr>)}
      </tbody>
    </table>

  );
}

export default TaskList;
import Task from "./Task";
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
        {tasks.map(t => <Task key={t.id} task={t} />)}
      </tbody>
    </table>

  );
}

export default TaskList;
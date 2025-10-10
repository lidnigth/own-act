function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id} className="listinha">
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

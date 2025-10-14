function Tasks(props) {
  return (
    <ul className="ul">
      {props.tasks.map((task) => (
        <li key={task.id} className="listinha">
          {task.title}
          <button>Ver detalhes</button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

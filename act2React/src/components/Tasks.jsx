import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="ul">
      {props.tasks.map((task) => (
        <li key={task.id} className="li">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className="listinha"
          >
            {task.title}
            {task.isCompleted ? "COMPLETE" : "INCOMPLETE"}
          </button>
          <button className="button">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

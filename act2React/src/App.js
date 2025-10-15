import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para se tornar desenvolvedora full-stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar pra UECE",
      description: "Estudar pra fazer graduação em ciência da computação",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar pro ENEM",
      description: "Estudar pra fazer graduação em ciência da computação",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="fundo">
      <div className="content">
        <h1 className="title">Lista de tarefas</h1>
        <AddTasks />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;

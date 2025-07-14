import { useState, useEffect } from "react";
import Tasks from "./components/Tasks.jsx";
import AddTasks from "./components/AddTasks.jsx";

function App() {
  const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);

  function OnAddTaskClick(task) {
    console.log("Tarefa adicionada:", task);
    const newTask = {
      id: tasks.length + 1,
      title: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function OnRemove(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    function CallApi(){
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((response) => response.json())
        .then((data) => {
          const initialTasks = data.map((item) => ({
            id: item.id,
            title: item.title,
            completed: item.completed,
          }));
          setTasks(initialTasks);
        })
        .catch((error) => console.error("Erro ao buscar tarefas:", error));
    }
    CallApi();
  }, []);
  
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks={tasks} onRemove={OnRemove} />
        <AddTasks OnAddTaskClick={OnAddTaskClick} />
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';

function AddTasks({OnAddTaskClick}) {
  const [task, setTask] = useState();

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
      <input
        type="text"
        placeholder="Nome da tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="text"
        className="bg-slate-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-slate-600 transition-colors"
        onClick={() => {
            if(!task || !task.trim() ) {
              return alert('Por favor, insira uma tarefa válida.');
            }
          OnAddTaskClick(task)
        }}
      >
        Adicionar
      </button>
    </div>
  );
}


export default AddTasks;

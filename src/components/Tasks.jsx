function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="bg-slate-400 text-white p-2 rounded-md">
          {task.title}
          <button
            onClick={() => props.onRemove(task.id)}
            className="float-right bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

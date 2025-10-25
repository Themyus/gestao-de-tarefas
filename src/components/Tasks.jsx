import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 border-4 border-neutral-800 bg-neutral-900 rounded-2xl shadow-md">
      {tasks.length === 0 ? (
        <li className="text-neutral-400 text-center py-1">
          Nenhuma tarefa pendente
        </li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`border border-neutral-700 rounded-md bg-neutral-800 text-left w-full text-white pl-4 p-2 shadow ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button className="border border-neutral-600 bg-neutral-700 p-2 rounded-lg text-neutral-300 shadow">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="border border-neutral-600 bg-red-800 p-2 rounded-xl text-neutral-300 shadow"
            >
              <TrashIcon />
            </button>
          </li>
        ))
      )}
    </ul>
  );
}


export default Tasks;

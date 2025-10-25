import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 border-4 border-neutral-800 bg-neutral-900 rounded-2xl shadow-md flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="text-neutral-100 placeholder-neutral-500 bg-neutral-800 border border-neutral-700 outline-1 rounded-lg px-4 py-2 shadow-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="text-neutral-100 placeholder-neutral-500 bg-neutral-800 border border-neutral-700 outline-1 rounded-lg px-4 py-2 shadow-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verificar se título e descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-purple-950 border border-purple-800 text-white px-4 py-2 rounded-lg font-medium shadow-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
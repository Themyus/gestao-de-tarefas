import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="space-y-4 p-6 border-2 border-neutral-800 bg-neutral-900 rounded-2xl shadow-md flex flex-col">
      <Input
        type="text"
        placeholder="Enter the task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter the task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verificar se título e descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            setError("Fill in the task title and description");
            return; // Sai da função
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
          setError(""); // Limpa
        }}
        className="bg-blue-900 border border-blue-800 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:brightness-110 active:scale-95 transition-transform active:brightness-110"
      >
        Add
      </button>

      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
}

export default AddTask;

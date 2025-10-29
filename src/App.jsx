import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  ); // Se o JSON.parse tiver um valor válido, ele usa no localStorage como task. Se não, ele começa como um array vazio. Basicamente aqui ele tá pegando o primeiro valor verdadeiro que vir pra armazenar

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Executa a função (primeiro elemento antes da vírgula) sempre que algum valor que for colocado dentro da lista (segundo elemento depois da vírgula) for alterado

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   };
  //   # SE QUISER, VOCÊ PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
  //   # fetchTasks();
  // }, [] ); # Quando é passado como segundo parâmetro do useEffect uma lista vazia, significa que essa função só é executada uma vez. E essa vez é quando o usuário acaba de acessar a aplicação pela primeira vez

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-zinc-950 flex justify-center py-10">
      <div className="w-[500px] space-y-4">
        <Title>Task Manager</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

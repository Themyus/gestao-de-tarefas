import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-zinc-950 p-10 flex flex-col items-center">
      <div className="w-[800px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-neutral-400 hover:brightness-150 active:scale-95 transition-transform active:brightness-200"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-white font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="border-4 border-neutral-800 bg-neutral-900 p-4 px-6 rounded-xl shadow-md">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

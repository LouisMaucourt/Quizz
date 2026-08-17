// @ts-ignore
import "./index.css";
import { Link } from "react-router";
import { Button } from "./components/ui/Button";
import { useQuizzes } from "./hooks/useQuizzes";
import type { Quiz } from "./type";
import { Edit, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { DeleteQuiz } from "./components/DeleteQuiz";


export function App() {
  const [quizToDelete, setQuizToDelete] = useState<Quiz | null>(null);
  const { quizzes, loading, error, refetch } = useQuizzes();

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center md:p-8 p-5">
      <p className="text-xs text-muted uppercase tracking-widest mb-2">Choisir un quiz</p>

      <div className="flex flex-col justify-between text-center mb-10 ">
        <h1 className="text-2xl font-medium">
          Choisi ton quizz fourni selon les informations de l'INSEE
        </h1>
        <span className="text-xs">"Institut National Scientifique de l'Economie et de l’Emploi"</span>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
        {loading && <p className="text-white/50 text-sm">Chargement...</p>}
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {quizzes.map((q) => (
          <Button key={q.id} to={`/quizz/${q.id}`} className="flex-col items-start justify-end relative">
            <Link
              to={`/editquiz/${q.id}`}
              className="absolute top-3 right-12 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Edit className="w-4 h-4" />
            </Link>

            <button
              onClick={(e) => {
                e.preventDefault();
                setQuizToDelete(q as Quiz);
              }}
              className="z-10 absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-400 transition-colors cursor-pointer"
            >
              <Trash className="w-4 h-4" />
            </button>
            <span className="text-3xl mb-auto">{q.icon}</span>
            <div className="text-left mt-3">
              <p className="md:text-xl text-base font-bold text-white">{q.title}</p>
              <p className="text-xs text-white/50">{q.questions.length} questions</p>
            </div>
          </Button>
        ))}
        <Button icon={Plus} to={"/createquiz"} size="small" className="fixed md:bottom-20 md:right-20 bottom-7 right-5">Créer ton propre Quiz</Button>
      </div>

      {quizToDelete && (
        <DeleteQuiz
          quiz={quizToDelete}
          onClose={() => setQuizToDelete(null)}
          onDeleted={async () => {
            await refetch();
            setQuizToDelete(null);
          }}
        />
      )}
    </div>
  );
}
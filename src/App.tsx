import { quizzRegistry } from "./data/QuizzData";
import { Link } from "react-router";
import "./index.css";
import { Button } from "./components/ui/Button";

export function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <p className="text-xs text-muted uppercase tracking-widest mb-2">Choisir un quiz</p>
      <h1 className="text-2xl font-medium mb-10 text-center">
        De quel sujet veux-tu tester tes connaissances ?
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 w-full max-w-xl">
        {quizzRegistry.map((q) => (
          <Button key={q.id} to={`quizz/${q.id}`} className="flex-col items-start justify-end">
            <span className="text-3xl mb-auto">{q.icon}</span>
            <div className="text-left mt-3">
              <p className="text-sm font-medium text-white">{q.title}</p>
              <p className="text-xs text-white/50">{q.questions.length} questions</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
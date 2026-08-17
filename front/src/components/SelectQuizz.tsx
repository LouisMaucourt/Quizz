import { useParams } from "react-router";

import { Quiz, useQuizz } from "@/hooks/useQuizzes";
import { Quizz } from "./Quizz";
import { Question, Res } from "@/type";


export function QuizzPage() {
    const { id } = useParams();
    const { quiz, loading, error } = useQuizz(id);
    const currentQuiz = quiz as Quiz | null;
    const currentResults = (currentQuiz as (Quiz & { results?: Res[] }) | null)?.results ?? [];

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;
    if (!currentQuiz) return <p>Quiz introuvable.</p>;

    return (
        <Quizz
            title={currentQuiz.title}
            data={currentQuiz.questions as Question[]}
            res={currentResults}
        />
    );
}
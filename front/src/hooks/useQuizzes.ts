import { useEffect, useState } from "react";

export type Quiz = {
    id: string;
    icon: string;
    title: string;
    questions: unknown[];
};

export function useQuizzes() {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const fetchQuizzes = async () => {
        try {
            const res = await fetch(`/api/quizzes`);
            if (!res.ok) throw new Error(`Erreur ${res.status}`);
            const data = await res.json();
            setQuizzes(data);
        } catch (err) {
            console.error(err);
            setError("Impossible de charger les quiz.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchQuizzes();
    }, []);

    return { quizzes, loading, error, refetch: fetchQuizzes };
}
export function useQuizz(id: string | undefined) {
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchQuizz = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/quizzes/${id}`);
                if (!res.ok) throw new Error(`Erreur ${res.status}`);
                const data = await res.json();
                setQuiz(data);
            } catch (err) {
                console.error(err);
                setError("Impossible de charger le quiz.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuizz();
    }, [id]);

    return { quiz, loading, error };
}
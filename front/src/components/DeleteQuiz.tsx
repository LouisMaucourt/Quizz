import { Quiz } from "@/type";
import { TriangleAlert } from "lucide-react";
import { useState } from "react";


interface DeleteQuizProps {
    quiz: Quiz;
    onDeleted: () => void;
    onClose: () => void;
}

export function DeleteQuiz({ quiz, onDeleted, onClose }: DeleteQuizProps) {
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async () => {
        setDeleting(true);
        setError(null);
        try {
            const res = await fetch(`/api/quizzes/${quiz.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
            if (!res.ok) throw new Error("Échec de la suppression");
            onDeleted();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erreur inconnue");
            setDeleting(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 text-black"
            onClick={() => !deleting && onClose()}
        >
            <div
                className="bg-gray-100 border border-white/10 rounded-2xl p-6 w-full max-w-sm text-center shadow-xl animate-in fade-in zoom-in-95 duration-150"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10">
                    <TriangleAlert className="w-6 h-6 text-red-400" />
                </div>
                <p className="font-medium mb-1">Supprimer ce super quiz ?</p>
                <p className="text-sm mb-6">
                    <strong>{quiz.title}</strong> sera définitivement supprimé. Cette action est irréversible.
                </p>
                {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        disabled={deleting}
                        className="flex-1 py-2 rounded-lg bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors disabled:opacity-50"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="flex-1 py-2 rounded-lg bg-red-500 text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
                    >
                        {deleting ? "Suppression..." : "Supprimer"}
                    </button>
                </div>
            </div>
        </div>
    );
}
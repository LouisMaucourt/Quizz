import React from 'react'
import { Button } from './ui/Button';
import { Link } from 'react-router';
import { FaceGrinning, UndoDot } from 'lucide-react';

type FinishedQuizProps = {
    title: string;
    id: string;
    mode?: "create" | "edit";
};

export const FinishedQuiz = ({ title, id, mode = "create" }: FinishedQuizProps) => {
    const heading = mode === "edit"
        ? `Ton quiz ${title} a bien été modifié !!`
        : `Ton quiz ${title} a bien été créé !!`;

    return (
        <div className="flex flex-col items-center text-center gap-4 max-w-md mx-auto w-full h-full justify-center">
            <h2 className="text-xl">{heading}</h2>
            <img src="/img/explosion.gif" alt="Explosion" className="w-full mx-auto" />
            <div className="flex flex-col md:flex-row gap-3 w-full justify-center">
                <Button
                    size="small"
                    to={`/`}
                    className="text-2xs"
                    icon={UndoDot}
                >
                    Revenir au menu principal
                </Button>
                <Button
                    size="small"
                    to={`/quizz/${id}`}
                    className="text-2xs"
                    icon={FaceGrinning}

                >
                    Essayer mon super quiz
                </Button>
            </div>
        </div>
    )
}
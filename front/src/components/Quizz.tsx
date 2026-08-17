import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/Button";
import { Answer, QuizzProps, Res } from "@/type";
import { getBestMatch } from "src/utilis";
import { FaceGrinning, UndoDot } from "lucide-react";



export const Quizz = ({ title, data, res }: QuizzProps) => {
    const [score, setScore] = useState<Record<string, number>>({})
    const [currentIndex, setCurrentIndex] = useState(0)

    const currentQuestion = data?.[currentIndex]

    const handleRes = (answer: Answer) => {
        setScore((prev) => {
            const updated = { ...prev }
            for (const key in answer.points) {
                updated[key] = (updated[key] ?? 0) + answer.points[key]
            }
            return updated
        })
        setCurrentIndex((prev) => prev + 1)
    }


    const isFinished = currentIndex >= data.length
    const result = isFinished ? getBestMatch(score, res) : null
    const progress = Math.round((currentIndex / data.length) * 100)

    return (
        <div className="w-screen h-screen flex flex-col p-6 md:p-12">
            <h2 className="text-2xl mb-3.5 uppercase font-bold text-center">{title}</h2>
            <div className="w-full h-1 bg-white rounded mb-6">
                <div
                    className="h-1 bg-violet-400 rounded transition-all duration-300"
                    style={{ width: `${isFinished ? 100 : progress}%` }}
                />
            </div>

            {!isFinished && currentQuestion ? (
                <div className="flex flex-col justify-between h-full">
                    <p className="text-center text-sm opacity-50 mb-4">
                        Question {currentIndex + 1} / {data.length}
                    </p>
                    <div>

                        <div className="flex-1 flex items-center justify-center text-center px-4">
                            <h2 className="text-3xl md:text-4xl font-medium leading-snug">
                                {currentQuestion.question}
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full mx-auto">
                        {currentQuestion.answers.map((answer) => (
                            <Button
                                key={answer.label}
                                onClick={() => handleRes(answer)}
                            >
                                {answer.label}
                            </Button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 max-w-lg mx-auto w-full">
                    <p className="text-xs opacity-40 uppercase tracking-widest">Votre profil</p>
                    {result && (
                        <>
                                <h2 className="text-3xl md:text-4xl font-medium">{result.name}</h2>
                                {result.img && <img src={`../img/${result.img}`}></img>}
                            <p className="opacity-60 leading-relaxed mb-2">{result.message}</p>
                        </>
                    )}

                   

                        <div className="flex flex-col gap-3 mt-6 justify-center flex-wrap">
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
                                onClick={() => { setScore({}); setCurrentIndex(0); }}
                                className="text-2xs"
                                icon={FaceGrinning}
                            >
                                Recommencer
                            </Button>
                        </div>
                </div>
            )}
        </div>
    )
}
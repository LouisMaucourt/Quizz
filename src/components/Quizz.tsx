import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/Button";

export type Answer = {
    label: string;
    points: Record<string, number>;
}
export type Question = {
    id: number;
    question: string;
    answers: Answer[];
}
export type Res = {
    name: string,
    points: Record<string, number>,
    message: string,
    img:string
}
type QuizzProps = {
    title: string,
    data: Question[];
    res: Res[]
}


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

    const getTotalMax = (questions: Question[]) => {
        const total: Record<string, number> = {}
        for (const q of questions) {
            const maxPerKey: Record<string, number> = {}
            for (const a of q.answers) {
                for (const key in a.points) {
                    maxPerKey[key] = Math.max(maxPerKey[key] ?? 0, a.points[key])
                }
            }
            for (const key in maxPerKey) {
                total[key] = (total[key] ?? 0) + maxPerKey[key]
            }
        }
        return total
    }
    const getBestMatch = (score: Record<string, number>, res: Res[]) => {
        if (res.length === 0) return null
        let best = res[0]
        let bestDistance = Infinity
        for (const result of res) {
            let distance = 0
            for (const key in score)
                distance += Math.abs((score[key] ?? 0) - (result.points[key] ?? 0))
            if (distance < bestDistance) {
                bestDistance = distance
                best = result
            }
        }
        return best
    }

    const getPercent = (score: Record<string, number>, totalMax: Record<string, number>) => {
        const percent: Record<string, number> = {}
        for (const key in score) {
            percent[key] = ((score[key] ?? 0) / (totalMax[key] ?? 1)) * 100
        }
        return percent
    }

    const isFinished = currentIndex >= data.length
    const totalMax = getTotalMax(data)
    const result = isFinished ? getBestMatch(score, res) : null
    const progress = Math.round((currentIndex / data.length) * 100)

    return (
        <div className="w-screen h-screen flex flex-col p-6 md:p-12">
            <h2 className="text-2xl mb-3.5 uppercase font-bold text-center">{title}</h2>
            <div className="w-full h-1 bg-white rounded mb-6">
                <div
                    className="h-1 bg-black rounded transition-all duration-300"
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
                                <img src={`../img/${result.img}`}></img>
                            <p className="opacity-60 leading-relaxed mb-2">{result.message}</p>
                        </>
                    )}

                    <div className="w-full mt-4">
                        {Object.entries(getPercent(score, totalMax)).map(([key, value]) => (
                            <div key={key} className="mb-3 text-left">
                                <div className="flex justify-between text-xs opacity-50 mb-1">
                                    <span>{key}</span>
                                    <span>{Math.round(value)}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                                    <div
                                        className="h-1.5 bg-blue-300 rounded-full transition-all duration-500"
                                        style={{ width: `${value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                        <div className="flex gap-3 mt-6 justify-center flex-wrap">
                            <Link
                                to="/"
                                className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-xl bg-white/15 border border-white/25 text-white hover:bg-white/25 transition-all active:scale-95"
                            >
                                ← Menu
                            </Link>
                            <button
                                onClick={() => { setScore({}); setCurrentIndex(0); }}
                                className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all"
                            >
                                ↺ Recommencer
                            </button>

                        </div>
                </div>
            )}
        </div>
    )
}
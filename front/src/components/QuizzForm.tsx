import React, { useState } from 'react'
import { Step, StepIndicator } from './ui/StepIndicator';
import { Plus } from 'lucide-react';
import { FinishedQuiz } from './FinishedQuiz';

type Factors = { id: string, name: string }

type Answers = { label: string, points: Record<string, number> }

type Question = { question: string, answers: Answers[] }

export type Result = {
    name: string; message: string; img?: string; points: Record<string, number>;
};

export type QuizzFormData = {
    title: string;
    description: string;
    factors: Factors[];
    questions: Question[];
    results: Result[];
};

type QuizzFormProps = {
    initialData: QuizzFormData;
    onSubmit: (data: QuizzFormData) => Promise<string> | string;
    submitting: boolean;
    error: string | null;
    mode?: "create" | "edit";
};

const updateAt = <T,>(arr: T[], index: number, patch: Partial<T>): T[] =>
    arr.map((item, i) => (i === index ? { ...item, ...patch } : item));

const createEmptyQuestion = (): Question => ({
    question: "",
    answers: [
        { label: "", points: {} },
        { label: "", points: {} }
    ]
})

const createEmptyResult = (factors: Factors[]): Result => ({
    name: "",
    message: "",
    img: "",
    points: Object.fromEntries(factors.map(f => [f.id, 0]))
});

export const QuizzForm = ({ initialData, onSubmit, submitting, error, mode = "create" }: QuizzFormProps) => {

    const [step, setStep] = useState<Step>("Info")
    const [createdId, setCreatedId] = useState<string | null>(null)

    const emptyForm: QuizzFormData = {
        title: "",
        description: "",
        factors: [],
        questions: [],
        results: [],
    }

    const [title, setTitle] = useState(initialData?.title ?? emptyForm.title)
    const [description, setDescription] = useState(initialData?.description ?? emptyForm.description)
    const [factorInput, setFactorsInput] = useState("");
    const [factors, setFactors] = useState<Factors[]>(initialData?.factors ?? emptyForm.factors)

    const [questions, setQuestions] = useState<Question[]>(
        initialData?.questions?.length ? initialData.questions : [createEmptyQuestion()]
    )
    const [results, setResults] = useState<Result[]>(
        initialData?.results?.length ? initialData.results : [createEmptyResult(initialData?.factors ?? [])]
    );

    const addFactor = () => {
        if (!factorInput.trim()) return;
        setFactors(prev => [...prev, { id: crypto.randomUUID(), name: factorInput }])
        setFactorsInput("")
    }

    const addQuestion = () => {
        setQuestions(prev => [...prev, createEmptyQuestion()])
    }

    const addAnswer = (qIndex: number) => {
        setQuestions(prev =>
            updateAt(prev, qIndex, { answers: [...prev[qIndex].answers, { label: "", points: {} }] })
        );
    };

    const addResult = () => {
        setResults(prev => [...prev, createEmptyResult(factors)]);
    };

    const updateQuestion = (qIndex: number, patch: Partial<Question>) =>
        setQuestions(prev => updateAt(prev, qIndex, patch));

    const updateAnswer = (qIndex: number, aIndex: number, patch: Partial<Answers>) =>
        setQuestions(prev =>
            updateAt(prev, qIndex, { answers: updateAt(prev[qIndex].answers, aIndex, patch) })
        );

    const updateAnswerPoints = (qIndex: number, aIndex: number, criterionId: string, value: number) =>
        setQuestions(prev =>
            updateAt(prev, qIndex, {
                answers: updateAt(prev[qIndex].answers, aIndex, {
                    points: { ...prev[qIndex].answers[aIndex].points, [criterionId]: value }
                })
            })
        );

    const updateResult = (index: number, patch: Partial<Result>) =>
        setResults(prev => updateAt(prev, index, patch));

    const updateResultPoints = (index: number, criterionId: string, value: number) =>
        setResults(prev =>
            updateAt(prev, index, {
                points: { ...prev[index].points, [criterionId]: value }
            })
        );

    const handleFinalSubmit = async () => {
            const id = await onSubmit({ title, description, factors, questions, results });
            setCreatedId(id);
            setStep("Terminée")
    };
    return (
        <div className="relative h-full flex flex-col pb-24">
            <StepIndicator step={step} setStep={setStep} onSubmit={handleFinalSubmit} />

            <div className="flex-1 flex flex-col w-full">
                {step === "Info" && (
                    <div className="flex-1 flex items-center justify-center px-4">
                        <div className="flex flex-col gap-4 max-w-lg mx-auto w-full">
                            <input
                                className="bg-transparent border-b border-white/30 text-xl outline-none placeholder-white/40 pb-2"
                                placeholder="Titre du quiz"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                className="bg-transparent border-b border-white/30 outline-none placeholder-white/40 pb-2"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {step === "Critères" && (
                    <div className="flex-1 flex items-center justify-center px-4">
                        <div className="flex flex-col gap-5 max-w-lg mx-auto w-full">
                            <h2 className="text-xl text-center">
                                Sur quels critères se base ton quiz ?
                            </h2>

                            <div className="flex gap-2">
                                <input
                                    className="flex-1 bg-transparent border-b border-white/30 outline-none"
                                    placeholder="Ex : Courageux, Curieux..."
                                    value={factorInput}
                                    onChange={(e) => setFactorsInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            addFactor();
                                        }
                                    }}
                                />
                                <button type="button" onClick={addFactor} className="px-5 py-2 rounded-xl bg-white/15">
                                    <Plus />
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {factors.map(c => (
                                    <span key={c.id} className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                                        {c.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {step === "Questions" && (
                    <div className="flex flex-col gap-8 mx-auto w-full mb-12 px-4">
                        <div className="flex flex-col gap-8 mx-auto max-w-5xl w-full">
                            {questions.map((question, index) => (
                                <div key={index}>
                                    <div className="mb-4 text-sm opacity-50">
                                        Question {index + 1}
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full mx-auto">
                                        <textarea
                                            className="w-full bg-transparent border-b border-white/30 text-xl font-medium mb-4 pb-2 outline-none placeholder-white/40 resize-none"
                                            placeholder="Intitulé de la question"
                                            value={question.question}
                                            onChange={(e) => updateQuestion(index, { question: e.target.value })}
                                            rows={2}
                                        />

                                        <div className="flex flex-col gap-3">
                                            {question.answers.map((a, aIndex) => (
                                                <div key={aIndex} className="bg-white/5 rounded-xl p-3">
                                                    <input
                                                        className="w-full bg-transparent border-b border-white/20 mb-2 pb-1 outline-none placeholder-white/40"
                                                        placeholder={`Réponse ${aIndex + 1}`}
                                                        value={a.label}
                                                        onChange={(e) => updateAnswer(index, aIndex, { label: e.target.value })}
                                                    />
                                                    {factors.map((c) => (
                                                        <div key={c.id} className="flex flex-wrap items-center gap-2 text-sm opacity-70 mt-1">
                                                            <span className="w-full sm:w-24">{c.name}</span>
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="4"
                                                                step="1"
                                                                className="flex-1"
                                                                value={a.points[c.id] ?? 0}
                                                                onChange={(e) => updateAnswerPoints(index, aIndex, c.id, Number(e.target.value))}
                                                            />
                                                            <span className="w-4 text-right">{a.points[c.id] ?? 0}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => addAnswer(index)}
                                            className="mt-4 text-sm opacity-70 hover:opacity-100 transition-opacity"
                                        >
                                            + Ajouter une réponse
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={addQuestion}
                            className="mx-auto px-5 py-2 rounded-xl bg-white/15 border border-white/25"
                        >
                            + Ajouter une question
                        </button>
                    </div>
                )}

                {step === "Résultat" && (
                    <div className="flex flex-col gap-8 max-w-3xl mx-auto w-full mb-12 px-4">
                        <h2 className="text-xl text-center">
                            Résultats possibles
                        </h2>

                        {results.map((result, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-5">
                                <div className="text-sm opacity-50">
                                    Résultat {index + 1}
                                </div>

                                <input
                                    className="bg-transparent border-b border-white/30 pb-2"
                                    placeholder="Nom du résultat"
                                    value={result.name}
                                    onChange={(e) => updateResult(index, { name: e.target.value })}
                                />

                                <textarea
                                    className="bg-transparent border border-white/20 rounded-xl p-3"
                                    placeholder="Message affiché au joueur"
                                    value={result.message}
                                    onChange={(e) => updateResult(index, { message: e.target.value })}
                                />

                                <div className="flex flex-col gap-3">
                                    <p className="text-sm opacity-70">Attribue les points</p>

                                    {factors.map(c => (
                                        <div key={c.id} className="flex items-center gap-4">
                                            <span className="w-32">{c.name}</span>
                                            <input
                                                type="range"
                                                min="0"
                                                max="20"
                                                value={result.points[c.id] ?? 0}
                                                onChange={(e) => updateResultPoints(index, c.id, Number(e.target.value))}
                                                className="flex-1"
                                            />
                                            <span>{result.points[c.id] ?? 0}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addResult}
                            className="mx-auto px-5 py-2 rounded-xl bg-white/15 border"
                        >
                            + Ajouter un résultat
                        </button>
                    </div>
                )}

                {step === "Récap" && (
                    <div className="max-w-3xl mx-auto w-full flex flex-col gap-8 mb-12 px-4">
                        <div>
                            <h2 className="text-2xl">{title}</h2>
                            <p className="opacity-70 mt-2">{description}</p>
                        </div>

                        <section>
                            <h3 className="mb-3">Critères</h3>
                            <div className="flex gap-2 flex-wrap">
                                {factors.map(c => (
                                    <span key={c.id} className="px-3 py-1 rounded-full bg-white/10">
                                        {c.name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3>{questions.length} questions</h3>
                            <div className="flex flex-col gap-3 mt-3">
                                {questions.map((q, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/5 flex gap-2">
                                        <strong className="shrink-0">{i + 1}.</strong>
                                        <div>
                                            <strong>{q.question || "Question vide"}</strong>
                                            <ul className="mt-2 opacity-70">
                                                {q.answers.map((a, j) => (
                                                    <li key={j}>• {a.label || "Réponse vide"}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3>Résultats</h3>
                            <div className="grid gap-3 mt-3">
                                {results.map((r, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/5">
                                        <strong>{r.name || "Résultat sans nom"}</strong>
                                        <p className="opacity-70 mt-2">{r.message}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {error && <p className="text-red-400 text-center">{error}</p>}
                        {submitting && <p className="text-center opacity-70">Enregistrement en cours...</p>}
                    </div>
                )}
                {step === "Terminée" && createdId && (
                    <FinishedQuiz title={title} id={createdId} mode={mode} />
                )}
            </div>
        </div>
    )
}
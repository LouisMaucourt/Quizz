import React, { useEffect, useState } from 'react'
import { QuizzForm, QuizzFormData } from './QuizzForm';
import { useParams } from 'react-router';

export const EditQuiz: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const [data, setData] = useState<QuizzFormData | null>(null)
    const [loading, setLoading] = useState(true)
    const [loadError, setLoadError] = useState<string | null>(null)

    const [error, setError] = useState<string | null>(null)
    const [submitting, setSubmitting] = useState(false)

    const getQuizz = async (quizId: string) => {
        setLoading(true)
        setLoadError(null)
        try {
            const res = await fetch(`/api/quizzes/${quizId}`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json' },
            })
            if (!res.ok) throw new Error('Erreur lors du chargement du quiz')
            const quiz: QuizzFormData = await res.json()
            setData(quiz)
        } catch (e) {
            setLoadError(e instanceof Error ? e.message : 'Une erreur est survenue')
        } finally {
            setLoading(false)
        }
    }
    const editQuizz = async (updated: QuizzFormData): Promise<string> => {
        if (!id) throw new Error('Quiz introuvable')
        setSubmitting(true)
        setError(null)
        try {
            const res = await fetch(`/api/quizzes/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated),
            })
            if (!res.ok) throw new Error('Erreur lors de la modification du quiz')
            return id
        } catch (e) {
            const message = e instanceof Error ? e.message : 'Une erreur est survenue'
            setError(message)
            throw e
        } finally {
            setSubmitting(false)
        }
    }


    useEffect(() => {
        if (id) getQuizz(id)
    }, [id])

    if (loading) {
        return <p className="text-center opacity-70">Chargement du quiz...</p>
    }

    if (loadError || !data) {
        return <p className="text-center text-red-400">{loadError ?? "Quiz introuvable"}</p>
    }

    return (
        <div className="max-w-7xl m-auto py-11 px-4 h-full">
            <QuizzForm initialData={data} onSubmit={editQuizz} submitting={submitting} error={error} mode="edit" />
        </div>
    )
}
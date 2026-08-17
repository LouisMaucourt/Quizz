import React, { useState } from 'react'
import { QuizzForm, QuizzFormData } from './QuizzForm';

export const CreateQuiz: React.FC = () => {
    const [error, setError] = useState<string | null>(null)
    const [submitting, setSubmitting] = useState(false)

    const createQuizz = async (data: QuizzFormData): Promise<string> => {
        setSubmitting(true)
        setError(null)
        try {
            const res = await fetch('/api/quizzes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (!res.ok) throw new Error('Erreur lors de la création du quiz')

            const created = await res.json()
            return created.id 
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Une erreur est survenue')
            throw e
        } finally {
            setSubmitting(false)
        }
    }

    const emptyData: QuizzFormData = {
        title: "",
        description: "",
        factors: [],
        questions: [],
        results: [],
    }

    return (
        <div className="max-w-7xl m-auto py-11 px-4 h-full min-w-fit">
            <QuizzForm initialData={emptyData} onSubmit={createQuizz} submitting={submitting} error={error} mode="create" />
        </div>
    )
}
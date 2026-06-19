import { quizzRegistry } from '@/data/QuizzData';
import { Quizz } from './Quizz';
import { useParams, Navigate } from 'react-router';

export const SelectQuizz = () => {
    const { id } = useParams();
    const selectedQuizz = quizzRegistry.find((q) => q.id === id);

    if (!selectedQuizz) return <Navigate to="/" replace />;

    return (
        <div>
            <Quizz
                data={selectedQuizz.questions}
                res={selectedQuizz.results}
                title={selectedQuizz.title}
            />
        </div>
    );
};
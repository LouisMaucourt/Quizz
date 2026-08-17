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
    img: string
}
export type QuizzProps = {
    title: string,
    data: Question[];
    res: Res[]
}
export type Quiz = {
    id: string;
    title: string;
    icon: string;
    questions: Question[];
    results: Res[];
}
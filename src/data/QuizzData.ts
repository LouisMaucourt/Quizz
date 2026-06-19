import { Question } from "@/components/Quizz";

type Result = {
    name: string;
    points: Record<string, number>;
    message: string;
};

export type QuizzEntry = {
    id: string;
    title: string;
    description: string;
    questions: Question[];
    results: Result[];
};

export const resPaillason: Result[] = [
    {
        name: "Propre Paillasson",
        points: {
            propre: 6,
            sale: 1,
            dramatique: 0,
            maudit: 1,
        },
        message:
            "Tu es un paillasson propre 🧼. Toujours impeccable, toujours aligné, tu prends ton rôle très au sérieux. Les gens hésitent à t’utiliser tellement tu sembles neuf. La poussière te respecte, la boue te craint, et tu rêves secrètement d’un hall d’entrée parfaitement rangé.",
    },
    {
        name: "Sale Paillasson",
        points: {
            propre: 0,
            sale: 6,
            dramatique: 1,
            maudit: 1,
        },
        message:
            "Tu es un paillasson sale 🌧️. Tu accumules la boue comme d’autres collectionnent les timbres. Chaque trace raconte une histoire, souvent humide, parfois inquiétante. Tu sens un peu la terre mouillée et le destin bancal, mais c’est ce qui fait ton charme brut.",
    },
    {
        name: "Dramatique Paillasson",
        points: {
            propre: 1,
            sale: 0,
            dramatique: 6,
            maudit: 1,
        },
        message:
            "Tu es un paillasson dramatique 🎭. Chaque pas sur toi est un événement. Tu ne te fais pas marcher dessus, tu performes. Ton existence entière est une scène où la poussière, les talons et les semelles jouent leur rôle dans une tragédie domestique permanente.",
    },
    {
        name: "mMuditPaillasson",
        points: {
            propre: 0,
            sale: 1,
            dramatique: 1,
            maudit: 6,
        },
        message:
            "Tu es un paillasson maudit 🌑. Personne ne sait depuis combien de temps tu es là. Tu observes les allées et venues avec une patience inquiétante. La nuit, tu sembles absorber plus que la saleté. Certains disent que tes fibres murmurent quand il pleut.",
    },
];
export const quizPaillason: Question[] = [
    {
        id: 1,
        question: "Par quel genre de chaussure voudrais-tu te faire marcher dessus ?",
        answers: [
            {
                label: "Talon pointu",
                points: { dramatique: 3, maudit: 1 },
            },
            {
                label: "Chaussure de chantier",
                points: { sale: 3 },
            },
            {
                label: "Pieds nus",
                points: { sale: 2, propre: 1 },
            },
            {
                label: "Bottes en cuir anciennes",
                points: { maudit: 2, dramatique: 2 },
            },
        ],
    },
    {
        id: 2,
        question: "Quel type d’ambiance imagines-tu pendant le piétinement ?",
        answers: [
            {
                label: "Silence total dans une maison bien rangée",
                points: { propre: 3 },
            },
            {
                label: "Une entrée pleine de boue après l’orage",
                points: { sale: 3 },
            },
            {
                label: "Un tapis rouge avec des projecteurs",
                points: { dramatique: 3 },
            },
            {
                label: "Un couloir sombre éclairé à la bougie",
                points: { maudit: 3 },
            },
        ],
    },
    {
        id: 3,
        question: "Quelle matière te représente le mieux ?",
        answers: [
            {
                label: "Fibres parfaitement brossées",
                points: { propre: 3 },
            },
            {
                label: "Boue séchée et gravier",
                points: { sale: 3 },
            },
            {
                label: "Velours rouge fatigué",
                points: { dramatique: 3 },
            },
            {
                label: "Tissu ancien un peu humide",
                points: { maudit: 3 },
            },
        ],
    },
    {
        id: 4,
        question: "Quel message voudrais-tu afficher sur toi ?",
        answers: [
            {
                label: "Essuie-toi correctement",
                points: { propre: 3 },
            },
            {
                label: "Entre comme tu es, même sale",
                points: { sale: 3 },
            },
            {
                label: "Chaque pas est une performance",
                points: { dramatique: 3 },
            },
            {
                label: "Tu aurais dû rester dehors",
                points: { maudit: 3 },
            },
        ],
    },
    {
        id: 5,
        question: "Quelle énergie veux-tu dégager ?",
        answers: [
            {
                label: "Ordre absolu",
                points: { propre: 3 },
            },
            {
                label: "Terre humide et chaos naturel",
                points: { sale: 3 },
            },
            {
                label: "Intensité théâtrale permanente",
                points: { dramatique: 3 },
            },
            {
                label: "Présence ancienne et étrange",
                points: { maudit: 3 },
            },
        ],
    },
    {
        id: 6,
        question: "Qui peut te piétiner ?",
        answers: [
            {
                label: "Seulement les gens soigneux",
                points: { propre: 3 },
            },
            {
                label: "Tout le monde, venez sales",
                points: { sale: 3 },
            },
            {
                label: "Le public de ma grande entrée",
                points: { dramatique: 3 },
            },
            {
                label: "Ceux qui osent",
                points: { maudit: 3 },
            },
        ],
    },
    {
        id: 7,
        question: "Quelle texture te définit ?",
        answers: [
            {
                label: "Lisse et ordonnée",
                points: { propre: 3 },
            },
            {
                label: "Rugueuse et pleine de vécu",
                points: { sale: 3 },
            },
            {
                label: "Douce mais intense",
                points: { dramatique: 3 },
            },
            {
                label: "Vieille, froide, inexplicable",
                points: { maudit: 3 },
            },
        ],
    },
    {
        id: 8,
        question: "Comment veux-tu finir ta journée idéale ?",
        answers: [
            {
                label: "Nettoyé et aligné parfaitement",
                points: { propre: 3 },
            },
            {
                label: "Recouvert de traces glorieuses",
                points: { sale: 3 },
            },
            {
                label: "Sous des applaudissements invisibles",
                points: { dramatique: 3 },
            },
            {
                label: "Seul dans le noir, à écouter la pluie",
                points: { maudit: 3 },
            },
        ],
    },
];


export const quizOrteil: Question[] = [
    {
        id: 1,
        question: "Dans une chaussure, quel rôle veux-tu jouer ?",
        answers: [
            {
                label: "Porter tout le poids sans broncher",
                points: { stable: 3 },
            },
            {
                label: "Créer des incidents diplomatiques à chaque meuble",
                points: { impulsif: 3 },
            },
            {
                label: "Être au centre sans trop le montrer",
                points: { central: 3 },
            },
            {
                label: "Exister discrètement, presque en option",
                points: { oublié: 3 },
            },
            {
                label: "Partir sur le côté sans prévenir",
                points: { chaotique: 3 },
            },
        ],
    },
    {
        id: 2,
        question: "Comment réagis-tu face à un meuble dans le noir ?",
        answers: [
            {
                label: "J’absorbe le choc avec dignité",
                points: { stable: 3 },
            },
            {
                label: "Je fonce dedans comme un idiot inspiré",
                points: { impulsif: 3 },
            },
            {
                label: "Je calcule l’angle exact de la douleur",
                points: { central: 3 },
            },
            {
                label: "Personne ne remarque que j’ai souffert",
                points: { oublié: 3 },
            },
            {
                label: "Je déclenche une catastrophe générale",
                points: { chaotique: 3 },
            },
        ],
    },
    {
        id: 3,
        question: "Quelle sensation te définit ?",
        answers: [
            {
                label: "Pression constante et rassurante",
                points: { stable: 3 },
            },
            {
                label: "Impact soudain et regrettable",
                points: { impulsif: 3 },
            },
            {
                label: "Équilibre parfait mais silencieux",
                points: { central: 3 },
            },
            {
                label: "Léger abandon existentiel",
                points: { oublié: 3 },
            },
            {
                label: "Panique latérale permanente",
                points: { chaotique: 3 },
            },
        ],
    },
    {
        id: 4,
        question: "Quelle est ta place idéale ?",
        answers: [
            {
                label: "Devant, en leader naturel",
                points: { stable: 3 },
            },
            {
                label: "Juste derrière, prêt à agir trop vite",
                points: { impulsif: 3 },
            },
            {
                label: "Pile au milieu du dispositif",
                points: { central: 3 },
            },
            {
                label: "Là où personne regarde",
                points: { oublié: 3 },
            },
            {
                label: "Au bord du chaos",
                points: { chaotique: 3 },
            },
        ],
    },
    {
        id: 5,
        question: "Quelle est ta plus grande peur d’orteil ?",
        answers: [
            {
                label: "Que tout repose encore sur moi",
                points: { stable: 3 },
            },
            {
                label: "Un coin de table mal placé",
                points: { impulsif: 3 },
            },
            {
                label: "Perdre mon équilibre esthétique",
                points: { central: 3 },
            },
            {
                label: "Être oublié même par le pied",
                points: { oublié: 3 },
            },
            {
                label: "Être coincé dans une chaussette trouée",
                points: { chaotique: 3 },
            },
        ],
    },
    {
        id: 6,
        question: "Ton rapport à la marche ?",
        answers: [
            {
                label: "Je guide tout le monde",
                points: { stable: 3 },
            },
            {
                label: "Je provoque des accidents mineurs",
                points: { impulsif: 3 },
            },
            {
                label: "Je maintiens la structure",
                points: { central: 3 },
            },
            {
                label: "Je suis là, techniquement",
                points: { oublié: 3 },
            },
            {
                label: "Je glisse parfois sans raison",
                points: { chaotique: 3 },
            },
        ],
    },
    {
        id: 7,
        question: "Comment te voient les autres orteils ?",
        answers: [
            {
                label: "Comme un pilier",
                points: { stable: 3 },
            },
            {
                label: "Comme un problème récurrent",
                points: { impulsif: 3 },
            },
            {
                label: "Comme une présence centrale rassurante",
                points: { central: 3 },
            },
            {
                label: "Comme… attends, t’es qui déjà ?",
                points: { oublié: 3 },
            },
            {
                label: "Comme une anomalie latérale",
                points: { chaotique: 3 },
            },
        ],
    },
    {
        id: 8,
        question: "Comment veux-tu finir ta journée d’orteil ?",
        answers: [
            {
                label: "Reposé après avoir porté le monde",
                points: { stable: 3 },
            },
            {
                label: "Légèrement blessé mais fier",
                points: { impulsif: 3 },
            },
            {
                label: "Parfaitement aligné dans une chaussette propre",
                points: { central: 3 },
            },
            {
                label: "Toujours là, mais personne ne sait trop pourquoi",
                points: { oublié: 3 },
            },
            {
                label: "En dépassant bizarrement de la couette",
                points: { chaotique: 3 },
            },
        ],
    },
];
export const resOrteil: Result[] = [
    {
        name: "Gros Orteil",
        points: {
            stable: 6,
            impulsif: 1,
            central: 1,
            oublié: 0,
            chaotique: 0,
        },
        message:
            "Tu es le gros orteil 👣. Le socle. Le pilier. Le vieux sage du pied. Tout repose sur toi et tu l’acceptes avec une dignité presque administrative. Sans toi, c’est la chute. Littéralement.",
    },
    {
        name: "Deuxieme Orteil",
        points: {
            stable: 1,
            impulsif: 6,
            central: 1,
            oublié: 0,
            chaotique: 1,
        },
        message:
            "Tu es le deuxième orteil ⚡. Tu fonces avant de réfléchir. Tu es responsable d’au moins 73% des collisions contre les meubles. Tu vis vite, tu souffres fort, et tu apprends rarement.",
    },
    {
        name: "Milieu Orteil",
        points: {
            stable: 1,
            impulsif: 1,
            central: 6,
            oublié: 1,
            chaotique: 0,
        },
        message:
            "Tu es l’orteil du milieu 🎯. Tu maintiens l’ordre au centre du chaos podologique. Ni trop visible, ni trop effacé. Tu es l’équilibre incarné. Une colonne vertébrale, mais pour les pieds.",
    },
    {
        name: "Annulaire Orteil",
        points: {
            stable: 0,
            impulsif: 1,
            central: 1,
            oublié: 6,
            chaotique: 1,
        },
        message:
            "Tu es l’orteil annulaire 🌫️. Beaucoup oublient ton existence jusqu’à ce qu’ils comptent vraiment. Tu es discret, un peu mélancolique, mais tu tiens ta place comme une note de bas de page essentielle.",
    },
    {
        name: "petitOrteil",
        points: {
            stable: 0,
            impulsif: 2,
            central: 0,
            oublié: 1,
            chaotique: 6,
        },
        message:
            "Tu es le petit orteil 🌀. Petit, fragile, mais agent officiel du chaos. Tu te cognes partout avec une précision presque magique. Personne ne te respecte jusqu’au jour où tu heurtes un coin de table et fais plier tout le corps.",
    },
];


export const quizzRegistry: QuizzEntry[] = [
    {
        id: "paillason",
        title: "Quel paillasson es-tu ?",
        description: "Découvre ton profil paillasson en quelques questions.",
        questions: quizPaillason,
        results: resPaillason,
    },
    {
        id: "orteils",
        title: "Quel orteil es-tu ?",
        description: "Découvre quel orteil sommeille en toi à travers quelques questions.",
        questions: quizOrteil,
        results: resOrteil,
    },
];
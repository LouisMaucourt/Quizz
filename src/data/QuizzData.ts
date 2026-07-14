import { Question } from "@/components/Quizz";

type Result = {
    name: string;
    points: Record<string, number>;
    message: string;
    img?:string
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
        name: "Paillasson Propre",
        points: {
            propre: 6,
            sale: 1,
            dramatique: 0,
            maudit: 1,
        },
        img: "p-clean.jpg",
        message:
            "Tu es un paillasson propre. Quand on te marche dessus des mains paillasonneuse vienne netoyer la chaussure. Merci de ton travail <3",
    },
    {
        name: "Paillasson Sale",
        points: {
            propre: 0,
            sale: 6,
            dramatique: 1,
            maudit: 1,
        },
        img: "p-mud.jpg",
        message:
            "Tu es un paillasson dégeuuuuuuuuu ( qui vote pour les voleurs du FN). Tu accumules la boue comme d’autres collectionnent les timbres. Prend une douche par pitiéééé.",
    },
    {
        name: "Dramatique Paillasson",
        points: {
            propre: 1,
            sale: 0,
            dramatique: 6,
            maudit: 1,
        },
        img: "p-theatre.jpg",
        message:
            "Tu es un paillasson Queeen. Tu ne te fais pas marcher dessus, tu performes.",
    },
    {
        name: "Paillasson Maudit",
        points: {
            propre: 0,
            sale: 1,
            dramatique: 1,
            maudit: 6,
        },
        img: "p-cursed.jpg",
        message:
            "Tu es un paillasson maudit. Personne ne sait depuis combien de temps tu es là, et personne ne veut plus en savoir. Vana Anti fasciti",
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

export const quizFestival: Question[] = [
    {
        id: 1,
        question: "Comment tu viens au festival ?",
        answers: [
            { label: "En voiture", points: { propre: 2, chill: 1 } },
            { label: "en camion", points: { chill: 3 } },
            { label: "EN stop", points: { social: 2, sale: 1 } },
            { label: "à vélo", points: { chill: 2, propre: 1 } },
            { label: "Keh", points: { maudit: 3 } },
        ],
    },
    {
        id: 2,
        question: "Qu'es que tu as dans ton sac",
        answers: [
            { label: "un kit complet", points: { propre: 3 } },
            { label: "Canouche couteau", points: { sale: 3 } },
            { label: "des paillettes et de l'amour", points: { dramatique: 3 } },
            { label: "La compile parfaite pour faire des cocktails", points: { social: 2, chill: 1 } },
            { label: "Keh", points: { maudit: 3 } },
        ],
    },
    {
        id: 3,
        question: "Comment tu penses repartir",
        answers: [
            { label: "Hein quoi ? faut repartir ?", points: { chill: 3 } },
            { label: "En légende ma gueule", points: { sale: 3 } },
            { label: "Ambulance", points: { dramatique: 3 } },
            { label: "Après un bon sommeil réparateur, en voiture sereinement", points: { propre: 3 } },
            { label: "Keh", points: { maudit: 3 } },
        ],
    },
    {
        id: 4,
        question: "Samedi 16 heures tu fais quoi ?",
        answers: [
            { label: "Devant le son à me régaler", points: { chill: 3 } },
            { label: "en vrai je comate", points: { chill: 2, sale: 1 } },
            { label: "je lance des jeux avec les copains", points: { social: 3 } },
            { label: "Session discussion deep", points: { maudit: 2, chill: 1 } },
            { label: "Keh", points: { maudit: 3 } },
        ],
    },
    {
        id: 5,
        question: "Comment tu gères ton caca ?",
        answers: [
            { label: "Je pars en forêt à l'aise", points: { chill: 2, sale: 1 } },
            { label: "Tard dans la nuit, en pénombre", points: { sale: 3 } },
            { label: "Derrière la tente de mon pote pour le faire rire", points: { social: 2, dramatique: 1 } },
            { label: "Keh", points: { maudit: 3 } },
        ],
    },
    {
        id: 6,
        question: "Dans quel type de scène tu vas",
        answers: [
            { label: "Psytrance", points: { chill: 3 } },
            { label: "Dub", points: { sale: 3 } },
            { label: "DnB", points: { dramatique: 3 } },
            { label: "Toutes, les énergies du monde me guident", points: { maudit: 3 } },
        ],
    },
];

export const quizVille: Question[] = [
    {
        id: 1,
        question: "T'as combien de temps de retard à un rendez-vous, en moyenne ?",
        answers: [
            {
                label: "Genre 45 min tranquillooo",
                points: { marseille: 3 },
            },
            {
                label: "10-15 min, on va pas se stresser non plus",
                points: { toulouse: 3, nantes: 3 },
            },
        ],
    },
    {
        id: 3,
        question: "Pourquoi tu veux vraiment partir de là où t'es ?",
        answers: [
            {
                label: "J'étouffe un peu, trop de gens, faut que ça change",
                points: { nantes: 3, toulouse: 2 },
            },
            {
                label: "Je veux du soleil",
                points: { marseille: 3, toulouse :2 },
            },
            {
                label: "Je veux un vrai nouveau départ où presque personne me connaît (à part mes coloc d'amour, surtout celui qui a fait ce site scientifique)",
                points: { toulouse: 3 },
            },
        ],
    },
    {
        id: 8,
        question: "Tu préfères quel style d'architecture ?",
        answers: [
            {
                label: "Immeubles haussmanniens",
                points: { nantes: 3 },
            },
            {
                label: "Ruelles étroites, mignonnes, façades qui penchent un peu",
                points: { marseille: 3 },
            },
            {
                label: "Brique partout",
                points: { toulouse: 3 },
            },
        ],
    },
    {
        id: 5,
        question: "Il fait 35 degrés, tu fais quoi de ta journée ?",
        answers: [
            {
                label: "Je reste au frais, volets fermés, ventilo",
                points: { nantes: 3, toulouse: 2 },
            },
            {
                label: "Direction la mer, peu importe l'heure",
                points: { marseille: 4, nantes: 2 },
            },
            {
                label: "Direction gros cailloux haut",
                points: { toulouse: 3 },
            },
        ],
    },
    {
        id: 7,
        question: "T'as un weekend libre sans plan, tu fais quoi ?",
        answers: [
            {
                label: "Expo, brocante, un café sympa que je viens de découvrir",
                points: { nantes: 3 },
            },
            {
                label: "Improviser un truc avec les potes, direction la mer",
                points: { marseille: 3 },
            },
            {
                label: "Rando dans les gros cailloux",
                points: { toulouse: 3 },
            },
        ],
    },
    {
        id: 9,
        question: "Tu cherches surtout à te rapprocher de quoi, en vrai ?",
        answers: [
            {
                label: "D'une scène culturelle qui bouge sans être too much",
                points: { nantes: 3, toulouse: 3 },
            },
            {
                label: "De l'inconnu total, un endroit où personne ne me connaît (à part mes coloc d'amour, surtout celui qui a fait ce site scientifique)",
                points: { toulouse: 3 },
            },
            {
                label: "Du nouveau mais pas trop, un cercle qui existe déjà",
                points: { marseille: 3, nantes: 3 },
            },
        ],
    },
    {
        id: 10,
        question: "Quel biome tu préfères ?",
        answers: [
            {
                label: "Mer",
                points: { nantes: 3, marseille: 5 },
            },
            {
                label: "Montagne",
                points: { marseille: 3, toulouse: 5 },
            },
            {
                label: "Fleuve",
                points: { nantes: 3, toulouse:3 },
            },
            {
                label: "Forêt",
                points: { toulouse: 3, nantes: 3 },
            },
        ],
    },
    {
        id: 11,
        question: "Tu préfères quelle boisson ?",
        answers: [
            {
                label: "Ricard",
                points: { marseille: 3, toulouse: 2 },
            },
            {
                label: "Un petit vin de Fronton",
                points: { toulouse: 3 },
            },
            {
                label: "Muscadet",
                points: { nantes: 3 },
            },
        ],
    },
    {
        id: 12,
        question: "Et en vrai ton coeur il te dit quoi",
        answers: [
            {
                label: "Toulouse",
                points: { toulouse: 10 },
            },
            {
                label: "Marseille",
                points: { marseille: 10 },
            },
            {
                label: "Nantes",
                points: { nantes: 10 },
            },
            {
                label: "Peu importe en vrai :3",
                points: { nantes: 1, marseille: 1, toulouse: 1 },
            },
        ],
    },
];
export const resVille: Result[] = [
    {
        name: "Nantes",
        points: {
            nantes: 35,
        },
        img: "nantes.jpg",
        message: "Ton destin est scéllé",
    },
    {
        name: "Marseille",
        points: {
            marseille: 35,
        },
        img: "v-marseille.jpg",
        message: "Ton destin est scéllé",
    },
    {
        name: "Toulouse",
        points: {
            toulouse: 35,
        },
        img: "toulouse.jpg",
        message: "Ton destin est scéllé",
    },
];
export const resFestival: Result[] = [
    {
        name: "Festivalier Propre",
        points: {
            propre: 6,
            chill: 1,
            social: 0,
            intensif: 0,
            sale: 0,
            maudit: 0,
        },
        img: "f-clean.jpg",
        message:
            "Tu es le festivalier propre. Mais bon quand meme aspirer tout le champs à l'aspirateur c'est un peu trop...",
    },

    {
        name: "Festivalier Chill",
        points: {
            propre: 0,
            chill: 6,
            social: 1,
            intensif: 0,
            sale: 0,
            maudit: 0,
        },
        img: "f-chill.jpg",
        message: "Just a chill Guy. Passe moi le joint maannn",
    },

    {
        name: "Festivalier Social",
        points: {
            propre: 0,
            chill: 1,
            social: 6,
            intensif: 1,
            sale: 0,
            maudit: 0,
        },
        img: "f-social.jpg",
        message:
            "Tu es le festivalier avec plein de copains, ah ça fait plaisir de voir un peu de philantropie dans ce monde, coeur sur toi mon doudouuuu.",
    },

    {
        name: "Festivalier intensif",
        points: {
            propre: 0,
            chill: 0,
            social: 1,
            intensif: 6,
            sale: 1,
            maudit: 0,
        },
        img: "f-gandlf.jpg",
        message:
            "Tu es le festivalier intensif. Chaque drop est une révélation, chaque fatigue un destin tragique. Calmos sur la drogas quand même mon copaine ",
    },

    {
        name: "Festivalier Sale",
        points: {
            propre: 0,
            chill: 0,
            social: 0,
            intensif: 1,
            sale: 6,
            maudit: 1,
        },
        img: "f-dirty.jpg",
        message:
            "Tu es le festivalier sale. Si tes ex-voisin sont partis c'est de ta faute, par pitié prend une douche, bois un verre d'eau, un thé, nimporte quoi mais met toi doux, pour mettre douce les gens à coté de toi",
    },

    {
        name: "Junkie",
        points: {
            propre: 0,
            chill: 0,
            social: 0,
            intensif: 1,
            sale: 1,
            maudit: 6,
        },
        img: "f-randomperson.jpeg",
        message:
            "C'est le signe, tiens je te passe le contact numéro de Drogue Info Service : 08 00 23 13 13. Les gens s'inquiètent pour toi...",
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
        id: "festivalier",
        title: "Quel types de festivalier es-tu ?",
        description: "Découvre la vérité sur toi...",
        questions: quizFestival,
        results: resFestival,
    },
    {
        id: "city",
        title: "Dans quel ville iras-tu ?",
        description: "Écoute ton destin",
        questions: quizVille,
        results: resVille,
    },
];
const words = [
    { text : 'Envie 🔥'},
    { text : 'Motivation ⚡'},
    { text : 'Décision 🧠'},
    { text : 'Action 🚀'},
    { text : 'Envie 🔥'},
    { text : 'Motivation ⚡'},
    { text : 'Décision 🧠'},
    { text : 'Action 🚀'},
]

const projects = [
    {
        title: "TweetAcademie",
        description: "Reproduction du réseaux Twitter. Projet de groupe full-stack en structure MVC à faire un 4 semaines. Technologies utilisées : PHP, MySql, Tailwind, Javascript, HTML",
        image: "/images/projects/twitter.png"
    },
    {
        title: "Maquette Intro",
        description: "Création d'un site web à partir d'une image fournie. Le premier projet de la formation. Technologies utilisées : HTML, CSS",
        image: "/images/projects/Intro.png"
    },
    {
        title: "Maquette Responsive",
        description: "Création d'un site web responsive à partir d'une image fournie, premier site web responsive. Technologies utilisées : HTML, CSS",
        image: "/images/projects/Responsive.png"
    },
    {
        title: "Puissance 4", 
        description: 'Création du mini jeu "Puissance 4" en javascript. Projet solo à faire en 2 semaines en même temps que TweetAcademie. Le jeu devait être modulable avec possibilité de changer la couleur ou la taille de la grille. Technologies utilisées : HTML, CSS, Javascript', 
        image: "/images/projects/Puissance4.png"
    },
    {
        title: "MyCinema", 
        description: "Premier projet full-stack avec gestion de base de donnée fournie. Le projets devait être réalisé en 1 semaine et nous devions reproduire un site pour un cinéma. Dans lequel il serait possible de changer l'abonnement d'un utilisateur permettre de reserver des séances... Technologies utilisées : HTML, CSS, PHP, MySql", 
        image: "/images/projects/cinema.png"
    },
    {
        title: "Morpion", description: "Ce projet est ce qu'on appelle un colle. Pour la faire courte c'est un exercice compliqué à faire en 4 heures. En locurence ici c'est le jeu du 'Morpion' avec un système de points, de victoire, possibilité de rejouer... Technologies utilisées : HTML, CSS, Javascript", image: "/images/projects/morpion.png"
    }

]

const navLinks = [
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Parcours",
        link: "#parcours",
    },
    {
        name: "Skills",
        link: "#skills",
    },
]

const ExperienceCard = [
    {
        logo: "/images/epitech.png",
        image: "/images/epitech-white.png",
        title: "Formation & Alternance",
        date: "Depuis Novembre 2024",
        presentation: `Une formation intensive et inclusive pour apprendre le développement web et logiciel en 2 ans. Accessible sans diplôme, elle forme aux compétences essentielles du métier de développeur grâce à une pédagogie active, des projets concrets et un suivi de proximité.`,
        missions: [
        "Pédagogie par projets (délais, attentes, niveau de difficulté...)",
        "Expérimentation centrée sur la résolution de problèmes",
        "Réalisation de projets de groupe : sites web front & back-end (MVC, MVMM, POO)",
        ]
    },
    {
        logo: "/images/epitech.png",
        image: "/images/epitech.png",
        title: "Formation & Alternance",
        date: "Depuis 2024",
        presentation: ``,
        missions: [
            "Pédagogie par projets (délais, attentes, niveau de difficulté...",
            "Expérimentation centrée sur la résolution de problèmes",
            "Réalisation de projets de groupe : sites web front & back-end (MVC, MVMM, POO)",
        ]
    },
    {
        logo: "/images/epitech.png",
        image: "/images/epitech.png",
        title: "Formation & Alternance",
        date: "Depuis 2024",
        presentation: ``,
        missions: [
            "Pédagogie par projets (délais, attentes, niveau de difficulté...",
            "Expérimentation centrée sur la résolution de problèmes",
            "Réalisation de projets de groupe : sites web front & back-end (MVC, MVMM, POO)",
        ]
    },
]

const techStackIcons = [
    {
        name: "React",
        modelpath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "NodeJS",
        modelpath: "/models/node-transformed.glb",
        scale: 4,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Tailwind",
        modelpath: "/models/tailwind.svg",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Git",
        modelpath: "/models/react_logo-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Javascript",
        modelpath: "/models/react_logo-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "ThreeJS",
        modelpath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
];

export {
    words,
    projects,
    navLinks,
    ExperienceCard,
    techStackIcons,
}
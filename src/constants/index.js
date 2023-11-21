import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
        icon: css,
    },
    {
        id: "work",
        title: "Work",
        icon: css,
    },
    {
        id: "contact",
        title: "Contact",
        icon: css,
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "UI/UX Designer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Computer Science Student",
        company_name: "LAU",
        icon: starbucks,
        iconBg: "#FFFFFF",
        date: "August 2019 - August 2022",
        points: [
            "During my tenure as a computer science student, I engaged in a diverse array of projects and coursework",
            "Immersed myself in the fundamental principles of software development, algorithms, and data structures.",
            "Participated in coding competitions and hackathons, honing my problem - solving skills and gaining practical experience in applying theoretical concepts to real - world scenarios.",
            "Collaborated on group projects that involved building applications using languages like Python, Java, and C++, gaining hands - on experience in software development methodologies and version control systems.Beyond coursework"
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Born Interactive",
        icon: tesla,
        iconBg: "#FFFFFF",
        date: "August 2022 - August 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Auction Website (Coming Soon)",
        description:
            "online marketplace that facilitates the buying and selling of various items or services through an interactive bidding system. Users can list their products or offerings with detailed descriptions and starting prices. ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Scss",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    // {
    //     name: "Job IT",
    //     description:
    //         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "restapi",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: jobit,
    //     source_code_link: "https://github.com/",
    // },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export { services, technologies, experiences, testimonials, projects };
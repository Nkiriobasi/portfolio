import {
    SiAppwrite,
    SiEslint,
    SiExpress,
    SiFramer,
    SiNextdotjs,
    SiPayloadcms,
    SiPrettier,
    SiReact,
    SiReacthookform,
    SiSass,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "This is my portfolio, showcasing my capabilities.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiEslint],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Eslint"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/", "https://eslint.org/"],
        github: "https://github.com/Nkiriobasi/portfolio",
        demo: "https://nkiriobasi.vercel.app/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "Snapgram",
        description:
            "snapgram is a phenomenon social media platform designed for seamless content sharing and connection.",
        technologies: [SiReacthookform, SiTailwindcss, SiReact, SiTypescript, SiAppwrite, SiPrettier, SiEslint],
        techNames: ["React-Hook-Form", "Tailwind CSS", "React", "Typescript", "Appwrite", "Prettier", "Eslint"],
        techLinks: ["https://react-hook-form.com/", "https://tailwindcss.com/", "https://reactjs.org/", "https://www.typescriptlang.org/", "https://appwrite.io/", "https://prettier.io/", "https://eslint.org/"],
        github: "https://github.com/Nkiriobasi/snapgram",
        demo: "https://snapgram-nkiriobasi.vercel.app/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 2,
        name: "GadgetGleam",
        description:
            "Explore a curated collection of sleek and stylish gadgets, from innovative laptops to futuristic mobile phones.",
        technologies: [SiPayloadcms, SiTypescript, SiReact, SiReacthookform, SiSass, SiStripe, SiExpress, SiPrettier, SiEslint],
        techNames: ["Payloadcms", "TypeScript", "React", "React-Hook-Form", "Appwrite", "Stripe", "Express", "Prettier", "Eslint"],
        techLinks: ["https://payloadcms.com/", "https://www.typescriptlang.org/", "https://reactjs.org/", "https://react-hook-form.com/", "https://sass-lang.com/", "https://stripe.com/", "https://expressjs.com/", "https://prettier.io/", "https://eslint.org/"],
        github: "https://github.com/Nkiriobasi/e-commerce",
        demo: "https://snapgram-nkiriobasi.vercel.app/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 3,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiNextdotjs],
        techNames: ["Next.js"],
        techLinks: ["https://nextjs.org/"],
        github: "https://github.com/Nkiriobasi/",
        demo: "https://github.com/Nkiriobasi/",
        image: "/projects/construction.webp",
        available: false,
    },
];

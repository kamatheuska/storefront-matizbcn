import { type ImageProps } from "../types";

type NewsCards = {
    image: ImageProps;
    text: string;
    link: string;
    title?: string;
    date?: string;
};

export const getNewsMock = (): NewsCards[] => [
    {
        image: {
            src: "https://matizbcn.com/cdn/shop/files/Banner.jpg",
            alt: "Entry Window of MatizBCN Gallery",
        },
        text: `
            Welcome to our art world! We invite you to get to know our talented artists
            in a more personal way and discover their unique artistic styles, inspirations,
            and histories
        `,
        link: "/pages/showcase-matiz",
    },
    {
        image: {
            src: "https://matizbcn.com/cdn/shop/files/01-ARV_18102023_100x81__B_9ded090b-4420-4bef-bab4-55796d5c06fb.jpg",
            alt: "Abstract art blog, understanding abstract art today.",
        },
        text: `
            Hello! I'm Juan Ramirez, curator and gallerist at Matiz in Barcelona. I'm excited to
            share insights on contemporary abstract art through our art blog. Understanding the
            complexities of abstract art is akin to refining visual acuity, recognizing its 
            subtle nuances. Follow for more!
        `,
        link: "/blog",
        title: "Abstract art blog",
    },
    {
        image: {
            src: "https://matizbcn.com/cdn/shop/files/01-POST-SQUARE-ECCENTRIC-V3.jpg",
            alt: "Art flyer",
        },
        text: `
            The event continues until the end of May.
        `,
        link: "/blog",
        title: "| Eccentric abstraction | Alex Voinea",
        date: "March 14, 2023, 7:00 PM - The Vernissage",
    },
    {
        image: {
            src: "https://matizbcn.com/cdn/shop/files/01-INVITACION-COLOR-POST-1x1.jpg",
            alt: "Abstract art blog, understanding abstract art today.",
        },
        text: `
            Jordi Artigas’s paintings seems to be guided by the purpose of finding beauty in the
            balance of spontaneity, texture, color and the contrast created between them. 
        `,
        link: "/pages/jordi-artigas-contrastes",
        title: "Contrastes",
        date: "Opening Friday, January 12, 2024, at 7:00 PM through February 25, 2024.",
    },
    {
        image: {
            src: "https://matizbcn.com/cdn/shop/files/1_1-2.jpg",
            alt: "Abstract art blog, understanding abstract art today.",
        },
        text: `
            Nestled in the heart of Born, Matiz Gallery invites us to experience the warmth of
            the festive season through a Christmas ArtMarkt.  
        `,
        link: "/pages/jordi-artigas-contrastes",
        title: "Contrastes",
        date: `
            Join us at Gallery Matiz on December 17th from 2 to 8 pm for our Flower Pop-Up
            event, kicking off our Christmas Art Market running until January 14th
        `,
    },
];

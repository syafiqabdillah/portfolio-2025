import type { Experience, Project, Social } from "./types";

export const name = "Syafiq Abdillah Umarghanis";

export const experiences: Experience[] = [
  {
    name: "Senior Frontend Engineer",
    timeline: "July 2023 - now",
    description: "",
  },
  {
    name: "Frontend Engineer @ ALAMI / Hijra",
    timeline: "September 2022 - June 2023",
    description: "",
  },
  {
    name: "Lead Webdev Team @ Justika",
    timeline: "June 2022 - August 2022",
    description: "",
  },
  {
    name: "Software Engineer @ Justika",
    timeline: "April 2021 - August 2022",
    description: "",
  },
];

export const socials: Social[] = [
  {
    id: "github",
    url: "https://www.github.com/syafiqabdillah",
    text: "Follow me on Github",
  },
  {
    id: "twitter",
    url: "https://www.twitter.com/umarghanis",
    text: "Stalk me on Twitter",
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/syafiq.au",
    text: "See me on Instagram",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/syafiq-abdillah-1b634b78/",
    text: "Let's connect on Linkedin",
  },
];

export const projects: Project[] = [
  {
    name: "Not My Anime List",
    desc: "My spin-off of MyAnimeList using their AniList API. You can search anime, create/edit/delete collections, and save your choice of anime into your collections.",
    src: "~/assets/img/notmal.png",
    url: "https://notmal.netlify.app",
    tech: [
      "Typescript",
      "React.js",
      "React Testing Library",
      "Cypress",
      "GraphQL",
      "Emotion",
      "Progressive Web Apps",
    ],
  },
  {
    name: "Makanapaya",
    desc: "A website that helps you think of what to eat or drink. Used by up to hundreds users per day.",
    src: "~/assets/img/makanapaya.png",
    url: "https://www.makanapaya.my.id",
    tech: [
      "Next.js",
      "React.js",
      "Progressive Web Apps",
      "MongoDB",
      "Express.js",
      "Mixpanel",
      "Sentry",
    ],
  },
  {
    name: "Kenal Kampus",
    desc: "Collection of stories from students and alumni in universities all over Indonesia. It helps high school student to choose where to pursue their study.",
    src: "~/assets/img/kenalkampus.png",
    url: "https://kenalkampus.vercel.app/",
    tech: [
      "Nuxt.js",
      "Vue.js",
      "Progressive Web Apps",
      "MongoDB",
      "Express.js",
      "Mixpanel",
    ],
  },
  {
    name: "Jlantah Hero",
    desc: "A mobile-first web app that lets you convert your used vegetable oil into money or new oils. It was our submission in Indonesia Digital Tribe 2021-2022 event that led us to Top 7 position out of 2000+ teams.",
    src: "~/assets/img/jlantahhero.png",
    url: "https://jlantahhero.netlify.app/",
    tech: ["Next.js", "React.js", "MongoDB", "Express.js", "Mixpanel"],
  },
  {
    name: "Foodle",
    desc: "My spin-off of the viral word game in 2021-2022, Wordle, but the words are from Makanapaya.",
    src: "~/assets/img/foodle.png",
    url: "https://www.makanapaya.my.id/foodle",
    tech: ["Next.js", "React.js", "MongoDB", "Express.js"],
  },
  {
    name: "Makanapaya Android",
    desc: "Android version of Makanapaya.",
    src: "~/assets/img/makanapayaandroid.jpg",
    url: "https://play.google.com/store/apps/details?id=com.syafiqau.makanapaya",
    tech: ["Flutter", "Dart", "MongoDB", "Express.js", "Mixpanel"],
  },
  {
    name: "Expensez",
    desc: "A simple expense tracker application.",
    src: "~/assets/img/expensez.jpg",
    url: "https://play.google.com/store/apps/details?id=com.syafiqabdillah.expensez",
    tech: ["Flutter", "Dart"],
  },
];

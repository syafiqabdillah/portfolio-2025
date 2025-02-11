import type { Experience, Project, Social } from "./types";

export const profile = {
  name: "Syafiq Abdillah Umarghanis",
  title: "Software Engineer",
  email: "abdillah.syafiq@gmail.com",
};

export const experiences: Experience[] = [
  {
    name: "Senior Frontend Engineer @ Good Doctor Technology",
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
    id: "linkedin",
    url: "https://www.linkedin.com/in/syafiq-abdillah-umarghanis-1b634b78/",
    text: "LinkedIn",
  },
  {
    id: "github",
    url: "https://www.github.com/syafiqabdillah",
    text: "Github",
  },
];

export const projects: Project[] = [
  {
    name: "Jlantah Hero",
    desc: "A mobile-first web app that lets the user to  <u class='text-xs'>convert their used vegetable oil into money or new oils</u>. It was our submission to Indonesia Digital Tribe 2021-2022 event that brought my team to <u class='text-xs'>Top 7 position out of 2000+ teams</u>. Instagram: <a class='text-xs' target='_blank' href='https://www.instagram.com/jlantah.hero/'>@jlantahhero</a>",
    src: "/img/jlantahhero.png",
    url: "https://jlantahhero.netlify.app/",
    tech: ["Next.js", "React.js", "MongoDB", "Express.js", "Mixpanel"],
  },
  {
    name: "Not My Anime List",
    desc: "My spin-off of MyAnimeList using their AniList API. You can search anime and manage your anime collections.",
    src: "/img/notmal.png",
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
    desc: "A website that helps you choose what to eat with hundreds of daily active users on its peak (now inactive). You can roll, look at nearby locations and recipes, give comments, and ban certain foods based on your preferences. This one is the most exciting personal project I've ever done.",
    src: "/img/makanapaya.png",
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
    desc: "Collection of stories from students and alumni in universities all over Indonesia. It helps high school student to choose where to pursue their study. Entries are submitted by the students themselves and curated by me.",
    src: "/img/kenalkampus.png",
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
    name: "Foodle",
    desc: "My spin-off of the viral word game in 2021-2022, Wordle, but the words are from Makanapaya's database.",
    src: "/img/foodle.png",
    url: "https://www.makanapaya.my.id/foodle",
    tech: ["Next.js", "React.js", "MongoDB", "Express.js"],
  },
  {
    name: "Makanapaya Android",
    desc: "Android version of Makanapaya (inactive).",
    src: "/img/makanapayaandroid.jpg",
    url: "https://play.google.com/store/apps/details?id=com.syafiqau.makanapaya",
    tech: ["Flutter", "Dart", "MongoDB", "Express.js", "Mixpanel"],
  },
  {
    name: "Expensez",
    desc: "A simple expense tracker application. One active user (myself).",
    src: "/img/expensez.jpg",
    url: "https://play.google.com/store/apps/details?id=com.syafiqabdillah.expensez",
    tech: ["Flutter", "Dart"],
  },
];

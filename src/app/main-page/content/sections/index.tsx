import AboutMe from "./AboutMe";
import CV from "./CV";
import Experience from "./Experience";
import Contact from "./Contact";
import Skills from "./Skills";

export const TILES = [
  { id: "about",      title: "About Me",    image: "/icons/aboutme.png",      modalTitle: "About Me",          Body: AboutMe },
  { id: "cv",         title: "CV",          image: "/icons/cv.png",         modalTitle: "Curriculum Vitae",  Body: CV },
  { id: "experience", title: "Experience",  image: "/icons/experience.png", modalTitle: "Experience",         Body: Experience },
  { id: "contact",    title: "Contact Me",  image: "/icons/contact.png",    modalTitle: "Contact Me",         Body: Contact },
  { id: "skills",     title: "Skills",      image: "/icons/skills.png",     modalTitle: "Skills",             Body: Skills },
] as const;

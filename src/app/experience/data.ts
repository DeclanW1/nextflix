export type Experience = {
  id: string;
  title: string;
  company: string;
  start: string;
  end: string; 
  summary: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    title: "Junior Full-Stack Developer",
    company: "Big Thinking",
    start: "September 2024",
    end: "September 2025",
    summary:
      "Put description here",
  },
  {
    id: "exp-2",
    title: "Sales Executive",
    company: "David Hayton - Motor Trade",
    start: "January 2023",
    end: "July 2024",
    summary:
      "Put description here",
  },
  {
    id: "exp-3",
    title: "TBC",
    company: "TBC",
    start: "TBC",
    end: "TBC",
    summary:
      "Put description here",
  },
];

export const EXPERIENCES_SORTED = [...EXPERIENCES];
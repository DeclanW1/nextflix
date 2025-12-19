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
    title: "Software Developer",
    company: "Freelance/Contract",
    start: "October 2025",
    end: "Current",
    summary:
      "",
  },
  {
    id: "exp-2",
    title: "Junior Software Developer",
    company: "BigThinkingltd",
    start: "July 2024",
    end: "October 2025",
    summary:
      "",
  },
  {
    id: "exp-3",
    title: "Sales Executive",
    company: "David Hayton",
    start: "January 2023",
    end: "July 2024",
    summary:
      "",
  },
];

export const EXPERIENCES_SORTED = [...EXPERIENCES];
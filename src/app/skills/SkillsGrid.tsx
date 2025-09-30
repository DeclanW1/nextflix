"use client";
import type { Skill } from "./skills";

export default function SkillsGrid({ skills }: { skills: Skill[] }) {
  return (
    <ul
      className="
        grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
      {skills.map((skill) => (
        <li key={skill.name}>
          <div
            className="
              group flex flex-col items-center justify-center
              rounded-xl border border-white
              bg-black
              h-36 sm:h-40 md:h-44
              shadow-sm hover:shadow-lg
              transition
              transform-gpu hover:-translate-y-1 hover:scale-[1.02] hover:-rotate-[0.6deg]">
            <i className={`${skill.icon} text-5xl md:text-6xl`} />

            <div className="mt-3 text-sm md:text-base text-whitetext-center">
              {skill.name}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

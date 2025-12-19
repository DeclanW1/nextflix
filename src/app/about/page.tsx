import Header from "../main-page/components/Header";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />

      <Header />

      <section className="mx-auto max-w-3xl p-6 md:p-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold">About Me</h1>

        <p className="opacity-80 leading-relaxed">
          I’m a software developer who enjoys building things that are actually
          useful. I like working on problems end to end, understanding what’s
          needed, building a solution, and improving it until it feels solid
          and easy to use.
        </p>

        <p className="opacity-80 leading-relaxed">
          I didn’t get into software through a single defining moment. It came
          from curiosity and the satisfaction of figuring things out. The more
          I learned, the more I enjoyed it. Development gives you space to think,
          to create, and to solve real problems, and that’s what keeps me
          interested.
        </p>

        <p className="opacity-80 leading-relaxed">
          Most of my experience is in modern web development. I’ve spent a lot
          of time working with Next.js, TypeScript, and TailwindCSS, building
          full stack applications and real production features. I’m comfortable
          working from designs, building out user flows, and making sure things
          behave properly once they’re live.
        </p>

        <p className="opacity-80 leading-relaxed">
          One area I care about a lot is authentication and access control.
          These systems are easy to rush and hard to fix later. I enjoy taking
          the time to get them right, making sure users end up in the right
          place and that edge cases are handled cleanly without making the
          experience feel heavy.
        </p>

        <p className="opacity-80 leading-relaxed">
          I like working in a structured way and taking responsibility for what
          I build. I care about readable code, sensible decisions, and shipping
          work I’d be happy to maintain. I work well in teams, but I’m also
          comfortable owning parts of a project and seeing them through.
        </p>

        <p className="opacity-80 leading-relaxed">
          Right now, I’m looking to keep growing as a developer and work on
          products that matter. I want to build useful features, learn from
          people who care about their craft, and continue developing my skills
          across the stack.
        </p>

        <p className="opacity-80 leading-relaxed">
          If you’re interested in my work or think I’d be a good fit for your
          team, feel free to get in touch.
        </p>
      </section>
    </main>
  );
}
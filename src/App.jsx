import headshot from '../Assets/IMG_0018.JPG'
import resume from '../Assets/Joshua Johnson Resume.pdf'

/* ─────────────────────────────────────────────────
 *  App.jsx — Single-file portfolio for Joshua Stuart Johnson
 *
 *  Structure:
 *    1. Hero   — headshot, name, bio, interests
 *    2. Skills — wrapped badge list
 *    3. Projects — clickable card grid
 *    4. Footer
 *
 *  To update GitHub URLs, search for "TODO: replace"
 * ───────────────────────────────────────────────── */

/* ── Data ────────────────────────────────────────── */

const SKILLS = [
  'Swift',
  'SwiftUI',
  'Python',
  'C',
  'C++',
  'Neo4j',
  'Networking / Sockets',
  'Raspberry Pi / ESP32',
  'Streamlit',
  '3D Modeling (Blender)',
]

const PROJECTS = [
  {
    title: 'MuscleMap',
    description:
      'An iOS fitness-tracking app that visualizes muscle engagement in real time using interactive 3D body models.',
    tags: ['Swift', 'SwiftUI', 'Xcode'],
    // TODO: replace with your actual GitHub URL
    url: 'https://github.com/josh111112/MuscleMap',
  },
  {
    title: 'Wireless LED Wall',
    description:
      'A DIY IoT project that drives a large LED matrix over Wi-Fi using a Raspberry Pi 5 and ESP32 micro-controllers.',
    tags: ['Raspberry Pi 5', 'ESP32', 'Python'],
    // TODO: replace with your actual GitHub URL
    url: 'https://github.com/gvsucis/w26-Visible-LED-Innovation',
  },
  {
    title: 'Scientific Knowledge Graph',
    description:
      'A graph-database project for GVSU CIS 360 that models scientific relationships using Neo4j and Python.',
    tags: ['Neo4j', 'Python', 'CIS 360'],
    // TODO: replace with your actual GitHub URL
    url: 'https://github.com/josh111112/Knowledge-Graph',
  },
  {
    title: "Hell's Kitchen",
    description:
      'A multi-threaded C simulation of a high-pressure baking environment using POSIX threads and semaphores with deadlock avoidance.',
    tags: ['C', 'Pthreads', 'Concurrency'],
    // TODO: replace with your actual GitHub URL
    url: 'https://github.com/josh111112/BakeOff',
  },
  {
    title: 'FTP Client',
    description:
      'A fully featured FTP client built from scratch in C with multi-threaded file transfers and robust error handling.',
    tags: ['C', 'Networking', 'Sockets'],
    // TODO: replace with your actual GitHub URL
    url: 'https://github.com/josh111112/FTPClient',
  },
  {
    title: 'Cheap Flight Checker',
    description:
      'A Python automation tool that monitors flight prices via SerpAPI and sends email alerts when deals appear.',
    tags: ['Python', 'APIs', 'Automation'],
    // TODO: replace with your actual GitHub URL
    url: 'https://github.com/josh111112/CheapFlightChecker',
  },
  {
    title: 'DNS Resolver',
    description:
      'An iterative DNS resolver built from scratch in Python that walks the DNS hierarchy from root servers with caching.',
    tags: ['Python', 'DNS', 'Networking'],
    // TODO: replace with your actual GitHub URL
    url: 'https://github.com/josh111112/INR',
  },
]

const INTERESTS = [
  'Software Development',
  'DIY Electronics',
  'Photography',
  'Fitness',
]

const ABOUT_TEXT = `
  I'm a developer who loves building things. 
  I enjoy the process of turning ideas into reality. Currently completing my CS degree at GVSU, I focus on clean code, 
  performance, and user-centric design. 
  When I'm not coding, you can find me doing some of my favorite hobbies, such as painting, sewing, reading, or photography.
`

/* ── Components ──────────────────────────────────── */

/** Reusable section wrapper with consistent spacing */
function Section({ id, children }) {
  return (
    <section id={id} className="w-full border-t border-neutral-800 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">{children}</div>
    </section>
  )
}

/** Section heading in mono font */
function SectionHeading({ children }) {
  return (
    <h2 className="mb-8 font-mono text-xs font-medium uppercase tracking-widest text-neutral-500">
      {children}
    </h2>
  )
}

/** Pill badge for skills / tags */
function Badge({ label, small = false }) {
  return (
    <span
      className={`inline-block border border-neutral-700 font-mono text-neutral-300 ${small
        ? 'px-2 py-0.5 text-[10px]'
        : 'px-3 py-1 text-xs'
        }`}
    >
      {label}
    </span>
  )
}

/** Clickable project card */
function ProjectCard({ title, description, tags, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-neutral-800 p-6 transition-colors hover:border-neutral-600 hover:bg-charcoal-800"
    >
      {/* Title with arrow indicator */}
      <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-100">
        {title}
        <span className="inline-block text-neutral-600 transition-transform group-hover:translate-x-1 group-hover:text-neutral-400">
          ↗
        </span>
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag} label={tag} small />
        ))}
      </div>
    </a>
  )
}

/* ── Main App ────────────────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-150">
      {/* ─── Hero ─────────────────────────────────── */}
      <header className="mx-auto flex max-w-3xl flex-col items-start px-6 pb-8 pt-16 md:pt-28">
        {/* Headshot */}
        <div className="mb-8 h-28 w-28 overflow-hidden rounded-lg border border-neutral-700">
          <img
            src={headshot}
            alt="Joshua Stuart Johnson"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Joshua Stuart Johnson
        </h1>

        {/* Bio */}
        <p className="mb-4 max-w-lg text-base leading-relaxed text-neutral-400">
          Computer Science student at Grand Valley State University.
        </p>

        {/* Interests */}
        <p className="mb-6 font-mono text-xs text-neutral-500">
          {INTERESTS.join(' · ')}
        </p>

        {/* Resume download */}
        <a
          href={resume}
          download="Joshua_Johnson_Resume.pdf"
          className="inline-flex items-center gap-2 border border-neutral-700 px-4 py-2 font-mono text-xs text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
        >
          ↓ Download Resume
        </a>
      </header>

      {/* ─── About ────────────────────────────────── */}
      <Section id="about">
        <SectionHeading>About</SectionHeading>
        <p className="max-w-prose text-sm leading-relaxed text-neutral-400">
          {ABOUT_TEXT}
        </p>
      </Section>

      {/* ─── Skills ───────────────────────────────── */}
      <Section id="skills">
        <SectionHeading>Skills</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <Badge key={skill} label={skill} />
          ))}
        </div>
      </Section>

      {/* ─── Projects ─────────────────────────────── */}
      <Section id="projects">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      {/* ─── Footer ───────────────────────────────── */}
      <footer className="border-t border-neutral-800 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs text-neutral-600">
            © {new Date().getFullYear()} Joshua Stuart Johnson — built by hand.
          </p>
        </div>
      </footer>
    </div>
  )
}

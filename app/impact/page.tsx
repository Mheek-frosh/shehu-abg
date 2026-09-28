import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { impactProjects, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Impact · ${site.name}`,
  description:
    "Stories of empowerment, community support, and progress across Kaduna State.",
};

export default function ImpactPage() {
  return (
    <>
      {impactProjects.map((project) => (
        <article key={project.slug}>
          <header className="bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
            <p className="kicker text-mist">Impact · Community empowerment</p>
            <h1 className="display mt-5 max-w-[16ch] text-[12vw] md:text-[6vw]">
              {project.title}
            </h1>
            <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-paper/85 md:text-xl">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
              <span>{project.author}</span>
              <time dateTime={project.dateTime}>{project.date}</time>
            </div>
          </header>

          <section
            className="paper px-5 py-12 md:px-10 md:py-16"
            aria-label={`${project.title} photographs`}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {project.images.map((photo) => (
                <Photo
                  key={photo.src}
                  photo={photo}
                  fill
                  aspect="3/4"
                />
              ))}
            </div>
          </section>

          <section className="paper px-5 pb-20 md:px-10 md:pb-28">
            <div className="prose-po mx-auto">
              {project.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="hairline mt-10 pt-6 font-medium">
                {project.closing}
              </p>
            </div>
          </section>
        </article>
      ))}
    </>
  );
}
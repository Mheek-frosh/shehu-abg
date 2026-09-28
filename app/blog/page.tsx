import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Blog · ${site.name}`,
  description:
    "Campaign updates, stakeholder visits, and community notes from the Shehu ABG movement.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <header className="bg-ink px-5 py-16 text-paper md:px-10 md:py-28">
        <p className="kicker text-mist">Blog</p>
        <h1 className="display mt-4 text-[14vw] md:text-[7vw]">
          Latest news
          <br />
          and insights
        </h1>
        <p className="mt-8 max-w-[42ch] text-lg text-paper/85">
          The office in Kaduna, the visits, the condolences, and the people
          the work has already reached.
        </p>
      </header>

      {featured ? (
        <section className="paper px-5 py-16 md:px-10 md:py-24">
          <article className="grid items-end gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <div>
              <p className="kicker">
                {featured.category
                  ? `${featured.category} · ${featured.date}`
                  : featured.date}
              </p>
              <h2 className="display mt-4 text-[10vw] md:text-[4.2vw]">
                <Link className="link" href={`/blog/${featured.slug}`}>
                  {featured.title}
                </Link>
              </h2>
              <p className="prose-po mt-8">{featured.description}</p>
              <p className="mt-6 text-sm text-mist">
                {featured.author}
                {featured.authorRole ? ` · ${featured.authorRole}` : ""} ·{" "}
                {featured.readTime}
              </p>
            </div>
            {featured.image ? (
              <Link
                href={`/blog/${featured.slug}`}
                className="block"
                aria-label={featured.title}
              >
                <figure
                  className={`po-photo po-photo--fill w-full ${
                    featured.fit === "contain" ? "bg-paper" : ""
                  }`}
                  style={{ aspectRatio: featured.fit === "contain" ? "1/1" : "4/3" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image.src}
                    alt={featured.image.alt}
                    className={`h-full w-full ${
                      featured.fit === "contain" ? "object-contain" : "object-cover"
                    }`}
                  />
                </figure>
              </Link>
            ) : null}
          </article>

          <ol className="mt-16">
            {rest.map((post) => (
              <li key={post.slug} className="hairline">
                <Link
                  href={`/blog/${post.slug}`}
                  className="grid gap-6 py-8 md:grid-cols-[minmax(0,1fr)_11rem] md:items-center"
                >
                  <div>
                    <p className="kicker text-mist">
                      {post.category
                        ? `${post.category} · ${post.date}`
                        : post.date}
                    </p>
                    <h2 className="display mt-3 text-[1.7rem] md:text-[2rem]">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-[48ch] leading-snug">
                      {post.description}
                    </p>
                    <p className="mt-3 text-sm text-mist">
                      {post.author}
                      {post.authorRole ? ` · ${post.authorRole}` : ""} ·{" "}
                      {post.readTime}
                    </p>
                  </div>
                  {post.image ? (
                    <figure
                      className={`po-photo po-photo--fill aspect-[4/3] w-full ${
                        post.fit === "contain" ? "bg-paper" : ""
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image.src}
                        alt=""
                        className={`h-full w-full ${
                          post.fit === "contain" ? "object-contain" : "object-cover"
                        }`}
                      />
                    </figure>
                  ) : (
                    <span className="hidden md:block" />
                  )}
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </>
  );
}

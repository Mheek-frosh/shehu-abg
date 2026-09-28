import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { blogPosts, getBlogPost, relatedPosts } from "@/lib/blog";
import { site, type PhotoContent } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: `Blog · ${site.name}` };
  return {
    title: `${post.title} · ${site.name}`,
    description: post.description,
  };
}

function Still({
  photo,
  fit,
}: {
  photo: PhotoContent;
  fit: "cover" | "contain";
}) {
  if (fit === "contain") {
    return (
      <div className="mx-auto max-w-lg">
        <Photo photo={photo} />
      </div>
    );
  }
  return <Photo photo={photo} />;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post.slug);
  const showCover = Boolean(post.image) && !post.video;

  return (
    <article>
      <header className="bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
        <p className="kicker text-mist">
          <Link className="link" href="/blog">
            Blog
          </Link>
          {post.category ? ` · ${post.category}` : ""}
        </p>
        <h1 className="display mt-5 max-w-[18ch] text-[11vw] md:text-[5.2vw]">
          {post.title}
        </h1>
        <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-paper/85 md:text-xl">
          {post.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
          <span>
            {post.author}
            {post.authorRole ? ` · ${post.authorRole}` : ""}
          </span>
          <time dateTime={post.dateTime}>{post.date}</time>
          <span>{post.readTime}</span>
        </div>
      </header>

      {post.video ? (
        <section className="bg-ink px-5 pb-16 md:px-10 md:pb-24">
          <div className="po-photo relative aspect-video w-full overflow-hidden bg-ink-soft">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              poster={post.image?.src}
              src={post.video}
            >
              Your browser cannot play this film.
            </video>
          </div>
          <p className="mt-4 text-sm text-mist">
            Campaign office, Kaduna · {post.date}
          </p>
        </section>
      ) : null}

      {showCover && post.image ? (
        <section className="paper px-5 py-12 md:px-10 md:py-16">
          <Still photo={post.image} fit={post.fit} />
        </section>
      ) : null}

      {post.gallery.length > 0 ? (
        <section
          className="paper px-5 py-12 md:px-10 md:py-16"
          aria-label={`${post.title} photographs`}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {post.gallery.map((photo) => (
              <Photo key={photo.src} photo={photo} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="paper px-5 pb-16 md:px-10 md:pb-24">
        <div className="prose-po mx-auto">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
        {post.tags.length > 0 ? (
          <ul className="mx-auto mt-12 flex max-w-[38em] flex-wrap gap-x-5 gap-y-3">
            {post.tags.map((tag) => (
              <li key={tag} className="kicker text-mist">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      {related.length > 0 ? (
        <section className="bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
          <h2 className="display text-[12vw] md:text-[5vw]">More from the blog</h2>
          <ol className="mt-10 max-w-[46rem]">
            {related.map((item) => (
              <li key={item.slug} className="hairline py-8">
                <p className="kicker text-mist">
                  {item.category
                    ? `${item.category} · ${item.date}`
                    : item.date}
                </p>
                <h3 className="display mt-3 text-[1.7rem]">
                  <Link
                    className="transition-colors hover:text-accent"
                    href={`/blog/${item.slug}`}
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-[42ch] text-paper/85">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </article>
  );
}

import Link from "next/link";
import { Eras } from "@/components/Eras";
import { Photo } from "@/components/Photo";
import { lately, numbers, photos, site } from "@/lib/content";

const portrait = photos.find((p) => p.src.includes("portrait"))!;
const service = photos.find((p) => p.src.includes("service"))!;
const field = photos.filter((p) =>
  ["march", "rally", "flags", "community", "conversation"].some((k) =>
    p.src.includes(k),
  ),
);

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-60px)] overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <figure className="po-photo po-photo--fill h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/photos/ahead.jpeg"
              alt={site.fullName}
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 18%" }}
            />
          </figure>
        </div>
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
        <div className="scrim absolute inset-0" aria-hidden="true" />
        <div className="relative flex min-h-[calc(100svh-60px)] flex-col justify-end px-5 pb-10 md:px-10 md:pb-14">
          <p className="kicker text-mist">{site.fullName}</p>
          <h1 className="display mt-4 text-[18vw] md:text-[12vw]">
            Shehu
            <br />
            ABG
          </h1>
          <div className="mt-6 flex items-end justify-between gap-6">
            <p className="max-w-[28ch] text-lg leading-snug md:text-2xl">
              Businessman. Legislator. Candidate for Governor.
            </p>
            <span className="hidden h-16 w-px bg-accent md:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="paper px-5 py-16 md:px-10 md:py-28" aria-labelledby="man-h">
        <div className="grid items-end gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="kicker">The man</p>
            <h2 id="man-h" className="display mt-4 text-[13vw] md:text-[6vw]">
              Already
              <br />
              on the ground
            </h2>
            <div className="prose-po mt-8">
              <p>
                Born in Kaduna in 1973, he read Geography at Ahmadu Bello
                University, built firms in telecoms, consulting and agriculture,
                then resigned every directorship before public office.
              </p>
              <p>
                He sat for Kaduna North in the House of Representatives from
                2011 to 2015. The campaign that followed did not wait for 2027.
                Wards, markets and schools had already seen the work.
              </p>
              <p>
                <Link className="link" href="/story">
                  Read his story
                </Link>
                , or{" "}
                <Link className="link" href="/media">
                  watch him speak
                </Link>
                .
              </p>
            </div>
          </div>
          <Photo photo={portrait} position="50% 12%" />
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-paper md:px-10 md:py-24" aria-labelledby="eras-h">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 id="eras-h" className="display text-[12vw] md:text-[5.5vw]">
            Six chapters
          </h2>
          <Link className="kicker link hidden md:inline" href="/story">
            Read his story
          </Link>
        </div>
        <Eras />
      </section>

      <section className="paper px-5 py-16 md:px-10 md:py-28" aria-labelledby="numbers-h">
        <p className="kicker">By the numbers</p>
        <h2 id="numbers-h" className="sr-only">
          By the numbers
        </h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-2">
          {numbers.map((item) => (
            <li key={item.value} className="hairline pt-5">
              <Link href={item.href} className="block">
                <span className="numeral block text-[16vw] md:text-[7vw] xl:text-[5.5vw]">
                  {item.value}
                </span>
                <span className="mt-4 block max-w-[30ch] text-base leading-snug">
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink px-5 py-16 text-paper md:px-10 md:py-24" aria-labelledby="field-h">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">A moving man</p>
            <h2 id="field-h" className="display mt-4 text-[12vw] md:text-[5.5vw]">
              The movement
              <br />
              in motion
            </h2>
          </div>
          <Link className="kicker link" href="/media">
            All the photographs
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {field.slice(0, 2).map((photo) => (
            <Photo key={photo.src} photo={photo} fill aspect="4/3" />
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {field.slice(2, 5).map((photo) => (
            <Photo key={photo.src} photo={photo} fill aspect="1/1" />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <figure className="po-photo po-photo--fill min-h-[70vh] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.src}
            alt={service.alt}
            className="min-h-[70vh] w-full object-cover"
            style={{ objectPosition: "50% 18%" }}
          />
        </figure>
        <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
        <div className="scrim absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-12 md:px-10 md:pb-16">
          <p className="kicker">Kaduna · The P.E.O.P.L.E Agenda</p>
          <h2 className="display mt-4 text-[12vw] md:text-[6vw]">
            A government
            <br />
            of the people
          </h2>
          <p className="mt-6 max-w-[40ch] text-lg">
            Produced by the people, conducted with the people, delivered for the
            people. Education, security, open books, infrastructure, technology,
            growth — six letters, one state.
          </p>
          <p className="mt-8">
            <Link className="link" href="/story#people">
              The agenda, and the record so far
            </Link>
          </p>
        </div>
      </section>

      <section className="paper px-5 py-16 md:px-10 md:py-28" aria-labelledby="join-h">
        <p className="kicker">Join</p>
        <h2 id="join-h" className="display mt-4 text-[12vw] md:text-[5.5vw]">
          I need you.
          <br />
          Kaduna needs you.
        </h2>
        <p className="prose-po mt-8">
          He showed up without needing the vote. The 2027 window is the other
          way round. Ward coordinators, mobilisers and digital champions are
          wanted in all 23 LGAs.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/join" className="share-action share-action--primary">
            Volunteer
          </Link>
          <a
            className="share-action"
            href={`https://wa.me/?text=${encodeURIComponent("Shehu ABG for Kaduna 2027 — " + site.tagline)}`}
          >
            Send it on WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-paper md:px-10 md:py-24" aria-labelledby="lately-h">
        <h2 id="lately-h" className="display text-[12vw] md:text-[5.5vw]">
          Lately
        </h2>
        <ol className="mt-12 max-w-[46rem]">
          {lately.map((item) => (
            <li key={item.title} className="hairline py-8">
              <p className="kicker text-mist">{item.date}</p>
              <h3 className="display mt-3 text-[1.9rem]">{item.title}</h3>
              <p className="mt-3 max-w-[40ch] text-paper/85">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

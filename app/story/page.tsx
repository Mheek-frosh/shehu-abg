import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { photos, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Story · ${site.name}`,
  description: `The public record of ${site.fullName}: Kaduna, ABU Zaria, the House, the wards, and the 2027 ticket.`,
};

const portrait = photos.find((p) => p.src.includes("portrait"))!;
const ahead = photos.find((p) => p.src.includes("ahead"))!;
const conversation = photos.find((p) => p.src.includes("conversation"))!;

export default function StoryPage() {
  return (
    <article className="paper">
      <header className="px-5 py-16 md:px-10 md:py-28">
        <p className="kicker">Biography</p>
        <h1 className="display mt-4 text-[14vw] md:text-[7vw]">
          The man, the
          <br />
          offices, the work
        </h1>
        <p className="prose-po mt-8">
          Some résumés wait for election season. This one is already in the
          wards: schools, boreholes, JAMB fees, a House seat, and a family
          steeped in Kaduna trade.
        </p>
      </header>

      <div className="px-5 md:px-10">
        <Photo photo={ahead} position="50% 18%" />
      </div>

      <section id="roots" className="scroll-mt-[76px] px-5 py-16 md:px-10 md:py-24">
        <p className="kicker">17 April 1973</p>
        <h2 className="display mt-4 text-[12vw] md:text-[5vw]">Born in Kaduna</h2>
        <div className="prose-po mt-8">
          <p>
            Usman Shehu Bawa is born in Kaduna, the fifth of thirteen children of
            Alhaji Bawa Garba — a pioneer of satellite television in Northern
            Nigeria and founder of the Kaduna International Trade Fair.
          </p>
          <p>
            The city is not a talking point. It is the household. He still
            answers to Shehu ABG: Alhaji Bawa Garba, shortened, kept.
          </p>
        </div>
      </section>

      <section id="abu" className="scroll-mt-[76px] grid gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div>
          <p className="kicker">1999</p>
          <h2 className="display mt-4 text-[12vw] md:text-[4.2vw]">
            ABU Zaria
          </h2>
          <div className="prose-po mt-8">
            <p>
              A Bachelor of Science in Geography from Ahmadu Bello University.
              Then businesses in telecoms, consulting and agriculture — each
              directorship later resigned, in full, before he took public office.
            </p>
          </div>
        </div>
        <Photo photo={conversation} position="50% 18%" />
      </section>

      <section id="house" className="scroll-mt-[76px] bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
        <p className="kicker text-mist">2011–2015</p>
        <h2 className="display mt-4 text-[12vw] md:text-[5vw]">
          Kaduna North
          <br />
          in the House
        </h2>
        <div className="prose-po mt-8">
          <p>
            Member of the House of Representatives for Kaduna North. The work
            was oversight of the agencies that sit on daily life — not a
            manifesto drafted in a hotel.
          </p>
          <p>
            He likes to say no citizen should regret the vote. The standard he
            offers is the record without power, not the speech with it.
          </p>
        </div>
      </section>

      <section id="wards" className="scroll-mt-[76px] px-5 py-16 md:px-10 md:py-24">
        <p className="kicker">After the House</p>
        <h2 className="display mt-4 text-[12vw] md:text-[5vw]">
          Service without
          <br />a camera crew
        </h2>
        <div className="prose-po mt-8">
          <p>
            Boreholes in twelve wards, paid personally. Food and cash support
            for widows, orphans and vulnerable families. Relief delivered across
            faith and ethnic lines because Kaduna is stronger together.
          </p>
          <p>
            The reverse challenge still stands: name a promise he made with his
            own resources and then failed to keep.
          </p>
        </div>
      </section>

      <div className="px-5 md:px-10">
        <Photo photo={portrait} position="50% 10%" />
      </div>

      <section id="jamb" className="scroll-mt-[76px] px-5 py-16 md:px-10 md:py-24">
        <p className="kicker">2025</p>
        <h2 className="display mt-4 text-[12vw] md:text-[5vw]">
          Five thousand
          <br />
          JAMB candidates
        </h2>
        <div className="prose-po mt-8">
          <p>
            Fees funded for 5,000 candidates — before a governorship campaign
            needed the photograph. Solar-powered ICT centres at Kaduna State
            University and in secondary schools sit on the same ledger.
          </p>
        </div>
      </section>

      <section id="people" className="scroll-mt-[76px] bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
        <p className="kicker text-mist">2027 · Peoples Democratic Party</p>
        <h2 className="display mt-4 text-[12vw] md:text-[5vw]">
          The P.E.O.P.L.E
          <br />
          Agenda
        </h2>
        <div className="prose-po mt-8">
          <p>
            Six letters, each a line item: human capital, effective security,
            open governance, infrastructure, technology, economic growth. A
            live public budget dashboard from day one. A functioning primary
            health centre in every one of 255 wards. Digital hubs in all 23
            LGAs.
          </p>
          <p>
            124,170 votes at the party primary. The ticket is for Governor of
            Kaduna State.
          </p>
          <p>
            <Link href="/join">Show up for Kaduna</Link>
          </p>
        </div>
      </section>
    </article>
  );
}

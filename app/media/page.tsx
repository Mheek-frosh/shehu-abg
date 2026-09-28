import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { photos, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Media · ${site.name}`,
  description: `Photographs and video of ${site.fullName} — campaign stills and his own voice.`,
};

export default function MediaPage() {
  return (
    <>
      <header className="bg-ink px-5 py-16 text-paper md:px-10 md:py-28">
        <p className="kicker text-mist">Photographs and film</p>
        <h1 className="display mt-4 text-[14vw] md:text-[7vw]">
          In his
          <br />
          own voice
        </h1>
        <p className="mt-8 max-w-[40ch] text-lg text-paper/85">
          Stills from the campaign gallery, and the film the official site
          already uses. More speeches and town halls will sit here as they are
          released.
        </p>
      </header>

      <section className="bg-ink px-5 pb-16 md:px-10 md:pb-24">
        <div className="po-photo relative aspect-video w-full overflow-hidden bg-ink-soft">
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            poster="/media/photos/ahead.jpeg"
            src="/media/camp-video.mp4"
          >
            Your browser cannot play this film.
          </video>
        </div>
        <p className="mt-4 text-sm text-mist">
          Campaign film · sourced from usmanshehubawa.ng
        </p>
      </section>

      <section className="paper px-5 py-16 md:px-10 md:py-24">
        <p className="kicker">Gallery</p>
        <h2 className="display mt-4 text-[12vw] md:text-[5.5vw]">
          All the
          <br />
          photographs
        </h2>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 xl:columns-3">
          {photos.map((photo) => (
            <div key={photo.src} className="mb-4 break-inside-avoid">
              <Photo photo={photo} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

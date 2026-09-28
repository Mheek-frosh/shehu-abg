import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div>
          <p className="display text-[14vw] md:text-[6vw]">{site.name}</p>
          <p className="mt-4 max-w-[32ch] text-lg text-paper/80">
            {site.tagline} A website about {site.fullName}.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="kicker text-mist">Navigate</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker text-mist">Follow</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a className="link" href={site.social.x}>
                  X
                </a>
              </li>
              <li>
                <a className="link" href={site.social.facebook}>
                  Facebook
                </a>
              </li>
              <li>
                <a className="link" href={site.social.instagram}>
                  Instagram
                </a>
              </li>
              <li>
                <a className="link" href={site.social.youtube}>
                  YouTube
                </a>
              </li>
              <li>
                <a className="link" href={site.social.tiktok}>
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-16 text-sm text-mist">
        Photographs from the Shehu ABG campaign at usmanshehubawa.ng. Editorial
        layout after the PBAT Impact pattern. {site.hq}. {site.email}.
      </p>
    </footer>
  );
}

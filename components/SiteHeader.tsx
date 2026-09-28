"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-[60px] items-center justify-between bg-ink px-5 text-paper md:px-10">
        <Link
          href="/"
          className="kicker tracking-[0.22em] text-paper hover:text-accent"
          aria-label={`${site.fullName}, home`}
        >
          {site.name}
        </Link>
        <button
          type="button"
          className="kicker tracking-[0.22em] hover:text-accent"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>
      <div
        id="site-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-ink px-5 pt-[100px] text-paper md:px-10"
      >
        <nav className="flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display text-[16vw] leading-[0.9] md:text-[8vw]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-16 max-w-[40ch] text-mist">{site.tagline}</p>
      </div>
    </>
  );
}

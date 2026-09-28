"use client";

import Link from "next/link";
import { useState } from "react";
import { chapters } from "@/lib/content";

export function Eras() {
  const [active, setActive] = useState(chapters[0].id);

  return (
    <ol className="flex flex-col gap-px md:h-[56vh] md:flex-row">
      {chapters.map((era) => {
        const on = era.id === active;
        return (
          <li
            key={era.id}
            className={`group relative flex min-h-[4.5rem] flex-1 overflow-hidden bg-ink-soft opacity-70 transition-[flex-grow,opacity] duration-700 md:min-h-0 ${
              on ? "flex-[3] opacity-100" : ""
            }`}
            onMouseEnter={() => setActive(era.id)}
            onFocus={() => setActive(era.id)}
          >
            <figure className="po-photo po-photo--fill absolute inset-0 h-full w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={era.image}
                alt=""
                className={`h-full w-full object-cover grayscale opacity-70 transition-opacity duration-700 ${
                  on ? "opacity-100" : ""
                }`}
                style={{ objectPosition: era.position }}
              />
            </figure>
            <div className="scrim absolute inset-0" aria-hidden="true" />
            <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
            <Link
              href={`/story#${era.id}`}
              className="relative flex w-full flex-col justify-end p-4 md:p-6"
            >
              <span className="kicker text-mist">{era.year}</span>
              <span
                className={`display mt-2 whitespace-nowrap text-[2rem] transition-[font-size] duration-700 md:text-[1.9vw] ${
                  on ? "md:text-[2.6vw]" : ""
                }`}
              >
                {era.title}
              </span>
              <span className="mt-1 block text-sm text-paper/80">{era.line}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

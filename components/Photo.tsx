"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { photos } from "@/lib/content";

type PhotoMeta = (typeof photos)[number];

const PhotoContext = createContext<{
  open: (photo: PhotoMeta) => void;
} | null>(null);

export function PhotoProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<PhotoMeta | null>(null);
  const value = useMemo(() => ({ open: setActive }), []);

  return (
    <PhotoContext.Provider value={value}>
      {children}
      {active ? (
        <dialog
          open
          className="fixed inset-0 z-[80] m-0 flex h-dvh max-h-dvh w-screen max-w-none flex-col bg-ink text-paper md:flex-row"
          onClose={() => setActive(null)}
        >
          <button
            type="button"
            className="kicker absolute right-5 top-4 z-[3] tracking-[0.28em]"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="max-w-[46rem] self-end p-8 md:w-96 md:pb-16">
            <p className="kicker">{active.caption}</p>
            <p className="mt-4 text-[1.0625rem] leading-[1.5]">
              {active.description}
            </p>
            <p className="mt-6 text-sm text-mist">
              {active.credit} · {active.license}
            </p>
          </div>
        </dialog>
      ) : null}
    </PhotoContext.Provider>
  );
}

export function Photo({
  photo,
  className = "",
  fill = false,
  aspect,
  position,
}: {
  photo: PhotoMeta;
  className?: string;
  fill?: boolean;
  aspect?: string;
  position?: string;
}) {
  const ctx = useContext(PhotoContext);

  return (
    <figure
      className={`po-photo ${fill ? "po-photo--fill h-full w-full" : "w-full"} ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        style={{ objectPosition: position ?? "center" }}
        className={fill ? "h-full w-full object-cover" : "w-full"}
      />
      <button
        type="button"
        className="po-photo__info"
        aria-label={`About this photograph: ${photo.caption}`}
        onClick={() => ctx?.open(photo)}
      >
        <span aria-hidden="true">i</span>
      </button>
    </figure>
  );
}

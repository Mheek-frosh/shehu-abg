"use client";

import { FormEvent, useState } from "react";
import { lgas, roles, site } from "@/lib/content";

export function JoinForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const lga = String(data.get("lga") || "");
    const role = String(data.get("role") || "");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nLGA: ${lga}\nRole: ${role}`,
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Volunteer — Shehu ABG")}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="prose-po">
        Thank you. If your mail app did not open, write directly to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-[40rem]">
      <label className="kicker text-mist block">Full name</label>
      <input name="name" required className="field" placeholder="e.g. Maryam Sani" />
      <label className="kicker text-mist mt-8 block">Phone</label>
      <input name="phone" required className="field" placeholder="+234" />
      <label className="kicker text-mist mt-8 block">Local government</label>
      <select name="lga" required className="field" defaultValue="">
        <option value="" disabled>
          Select your LGA
        </option>
        {lgas.map((lga) => (
          <option key={lga} value={lga}>
            {lga}
          </option>
        ))}
      </select>
      <label className="kicker text-mist mt-8 block">How you can help</label>
      <select name="role" required className="field" defaultValue="">
        <option value="" disabled>
          Choose a role
        </option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <button type="submit" className="share-action share-action--primary mt-10">
        Join as volunteer
      </button>
    </form>
  );
}

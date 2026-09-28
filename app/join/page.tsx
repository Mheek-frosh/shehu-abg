import type { Metadata } from "next";
import { JoinForm } from "@/components/JoinForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Join · ${site.name}`,
  description: "Volunteer across Kaduna’s 23 local governments for Shehu ABG, 2027.",
};

export default function JoinPage() {
  return (
    <article className="paper px-5 py-16 md:px-10 md:py-28">
      <p className="kicker">Volunteer</p>
      <h1 className="display mt-4 text-[14vw] md:text-[7vw]">
        Show up
        <br />
        for Kaduna
      </h1>
      <p className="prose-po mt-8">
        Ward coordinators, mobilisers and digital champions in all 23 LGAs. The
        form opens your mail app and writes to {site.email}. No account. No
        dashboard. Just a name, a number, a local government.
      </p>
      <p className="mt-6 max-w-[40ch] text-ink/75">
        {site.hq}
      </p>
      <JoinForm />
    </article>
  );
}

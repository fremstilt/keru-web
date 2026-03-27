import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Keru",
  description:
    "How Keru collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* ── Header ── */}
      <header
        className="border-b px-6 py-6"
        style={{
          backgroundColor: "var(--color-birch-bark)",
          borderColor: "var(--color-mist)",
        }}
      >
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link href="/" aria-label="Back to Keru home">
            <Image
              src="/KERU_logo.svg"
              alt="Keru"
              width={88}
              height={21}
              style={{
                filter:
                  "invert(46%) sepia(20%) saturate(600%) hue-rotate(80deg) brightness(85%) contrast(90%)",
              }}
            />
          </Link>
          <Link
            href="/"
            className="text-sm"
            style={{ color: "var(--color-still-water)" }}
          >
            ← Back
          </Link>
        </div>
      </header>

      {/* ── Content ── */}
      <main
        className="px-6 py-16 sm:py-24"
        style={{ backgroundColor: "var(--color-birch-bark)" }}
      >
        <article className="mx-auto max-w-2xl">
          {/* Title */}
          <div className="mb-12">
            <h1
              className="mb-3 text-[2rem] leading-tight sm:text-[2.5rem]"
              style={{
                fontFamily: "var(--font-dm-serif)",
                color: "var(--color-forest-frame)",
              }}
            >
              Privacy Policy
            </h1>
            <p
              className="text-sm"
              style={{ color: "var(--color-stone)" }}
            >
              Last updated: March 2026
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {/* Who we are */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                Who we are
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                Keru is an app for daily intentions and behavior change,
                developed by Fremstilt. If you have questions about this policy,
                contact us at{" "}
                <a
                  href="mailto:hello@keruapp.com"
                  style={{ color: "var(--color-still-water)" }}
                >
                  hello@keruapp.com
                </a>
                .
              </p>
            </section>

            {/* What data we collect */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                What data we collect
              </h2>
              <p
                className="mb-3 text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                We collect only what is necessary to provide the service:
              </p>
              <ul
                className="mb-4 flex flex-col gap-2 text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                {[
                  "Email address or Apple ID (for authentication)",
                  "Your focus area and daily intentions",
                  "Evening check-in responses",
                  "Notification preferences and reminder times",
                  "Device timezone",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-[0.35em] h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-stone)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                We do not collect location data, contacts, camera access, or
                any data unrelated to the core app experience.
              </p>
            </section>

            {/* How we use your data */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                How we use your data
              </h2>
              <p
                className="mb-3 text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                Your data is used exclusively to:
              </p>
              <ul
                className="mb-4 flex flex-col gap-2 text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                {[
                  "Provide and improve the app experience",
                  "Generate personalized daily suggestions via AI (Anthropic Claude API)",
                  "Send push notifications at your chosen times",
                  "Maintain your history and progress",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-[0.35em] h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-stone)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                We do not sell your data. We do not use your data for
                advertising.
              </p>
            </section>

            {/* Third-party services */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                Third-party services
              </h2>
              <p
                className="mb-3 text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                Keru uses the following third-party services:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  {
                    name: "Supabase",
                    desc: "Database and authentication (EU region).",
                  },
                  {
                    name: "Anthropic Claude API",
                    desc: "AI-generated suggestions. Your focus area and recent intentions are sent to generate suggestions. No personally identifiable information is included.",
                  },
                  {
                    name: "Expo / EAS",
                    desc: "App distribution and push notifications.",
                  },
                  {
                    name: "RevenueCat",
                    desc: "Subscription management (if you subscribe to Keru Premium).",
                  },
                ].map(({ name, desc }) => (
                  <li key={name} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-[0.35em] h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-stone)" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-driftwood)" }}>
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-forest-frame)" }}
                      >
                        {name}
                      </span>{" "}
                      — {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Data storage and security */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                Data storage and security
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                Your data is stored on Supabase servers in the EU (eu-north-1).
                Data is encrypted in transit and at rest. We retain your data
                for as long as your account is active. You can request deletion
                at any time.
              </p>
            </section>

            {/* Your rights */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                Your rights
              </h2>
              <p
                className="mb-3 text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                You have the right to:
              </p>
              <ul
                className="mb-4 flex flex-col gap-2 text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                {[
                  "Access all data we hold about you",
                  "Request correction of inaccurate data",
                  "Request deletion of your account and all associated data",
                  "Export your data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-[0.35em] h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-stone)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                To exercise any of these rights, contact{" "}
                <a
                  href="mailto:hello@keruapp.com"
                  style={{ color: "var(--color-still-water)" }}
                >
                  hello@keruapp.com
                </a>
                .
              </p>
            </section>

            {/* Account deletion */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                Account deletion
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                You can delete your account at any time from the Settings
                screen. All your data will be permanently deleted within 30
                days.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                Children
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                Keru is not intended for children under 13. We do not knowingly
                collect data from children.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2
                className="mb-3 text-lg font-medium"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "var(--color-forest-frame)",
                }}
              >
                Changes to this policy
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-driftwood)" }}
              >
                We will notify you of significant changes via the app. Continued
                use after changes constitutes acceptance.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* ── Footer ── */}
      <footer
        className="flex flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between"
        style={{
          backgroundColor: "#2E2923",
          borderTop: "1px solid rgba(244,241,236,0.08)",
        }}
      >
        <Image
          src="/KERU_logo.svg"
          alt="Keru"
          width={72}
          height={17}
          style={{ filter: "brightness(0) invert(1)", opacity: 0.45 }}
        />
        <div className="flex items-center gap-5">
          <Link
            href="/privacy"
            className="text-xs"
            style={{ color: "rgba(244,241,236,0.4)" }}
          >
            Privacy Policy
          </Link>
          <span className="text-xs" style={{ color: "rgba(244,241,236,0.2)" }}>
            &middot;
          </span>
          <Link
            href="/support"
            className="text-xs"
            style={{ color: "rgba(244,241,236,0.4)" }}
          >
            Support
          </Link>
          <span className="text-xs" style={{ color: "rgba(244,241,236,0.2)" }}>
            &middot;
          </span>
          <p className="text-xs" style={{ color: "rgba(244,241,236,0.4)" }}>
            &copy; {new Date().getFullYear()} Keru. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

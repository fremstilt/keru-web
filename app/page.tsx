import Image from "next/image";
import { Sunrise, Moon, Leaf } from "lucide-react";

const APP_STORE_URL = "#";

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide text-white ${className}`}
      style={{ backgroundColor: "var(--color-forest-green)" }}
      aria-label="Download Keru on the App Store"
    >
      {/* Apple logo */}
      <svg
        viewBox="0 0 814 1000"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 405.4 0 281.3 0 162.6c0-209.5 137.4-320.1 272.5-320.1 37.5 0 89.5 14.4 122.1 14.4 31.2 0 89.5-19.2 132.3-19.2 31.2 0 117.5 4.5 178.3 56.3zm-182.6-23.9c-.6-58.6-24.6-117.2-72.2-150.4-41.4-29-89.7-36.2-130.8-36.2 1.3 44.5 18.6 87.1 49.2 119.1 34 35.6 83.3 58.9 153.8 67.5z" />
      </svg>
      Download on the App Store
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #E8E5DF 0%, var(--color-birch-bark) 55%, #EAF0EF 100%)",
        }}
        aria-label="Hero"
      >
        {/* Logo */}
        <header className="mb-16">
          <Image
            src="/KERU_logo.svg"
            alt="Keru"
            width={120}
            height={29}
            priority
          />
        </header>

        {/* Headline + CTA */}
        <main className="flex max-w-2xl flex-col items-center gap-6 text-center">
          <h1
            className="text-[2.75rem] leading-[1.15] tracking-[-0.01em] sm:text-[3.5rem] md:text-[4rem]"
            style={{
              fontFamily: "var(--font-dm-serif)",
              color: "var(--color-forest-frame)",
            }}
          >
            One intention.
            <br />
            One check&#8209;in.
            <br />
            One day at a time.
          </h1>

          <p
            className="max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--color-driftwood)" }}
          >
            Keru helps you stay close to what matters &mdash; without streaks,
            scores, or guilt.
          </p>

          <div className="mt-2">
            <AppStoreButton />
          </div>
        </main>
      </section>

      {/* ── 2. Problem ───────────────────────────────────────────── */}
      <section
        className="flex items-center justify-center px-6 py-28 sm:py-36"
        style={{ backgroundColor: "var(--color-birch-bark)" }}
        aria-label="The problem"
      >
        <article className="max-w-xl text-center">
          <p
            className="text-xl leading-[1.7] sm:text-2xl sm:leading-[1.65]"
            style={{
              fontFamily: "var(--font-dm-serif)",
              color: "var(--color-forest-frame)",
            }}
          >
            You know what&rsquo;s important to you. But the days fill up, and
            the things that matter most stay just out of reach &mdash; not
            forgotten, just never quite acted on.
          </p>
        </article>
      </section>

      {/* ── 3. How it works ──────────────────────────────────────── */}
      <section
        className="px-6 py-24 sm:py-32"
        style={{ backgroundColor: "#EDEAE4" }}
        aria-label="How Keru works"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-16 text-center text-2xl sm:text-3xl"
            style={{
              fontFamily: "var(--font-dm-serif)",
              color: "var(--color-forest-frame)",
            }}
          >
            How it works
          </h2>

          <ol className="grid gap-12 sm:grid-cols-3 sm:gap-8">
            {/* Step 1 — Morning */}
            <li className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-birch-bark)" }}
                aria-hidden="true"
              >
                <Sunrise
                  size={20}
                  strokeWidth={1.5}
                  style={{ color: "var(--color-forest-green)" }}
                />
              </div>
              <div>
                <h3
                  className="mb-2 text-base font-medium"
                  style={{ color: "var(--color-forest-frame)" }}
                >
                  Morning
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-driftwood)" }}
                >
                  Choose one small intention connected to your focus area. AI
                  suggests three, or write your own.
                </p>
              </div>
            </li>

            {/* Step 2 — Evening */}
            <li className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-birch-bark)" }}
                aria-hidden="true"
              >
                <Moon
                  size={20}
                  strokeWidth={1.5}
                  style={{ color: "var(--color-still-water)" }}
                />
              </div>
              <div>
                <h3
                  className="mb-2 text-base font-medium"
                  style={{ color: "var(--color-forest-frame)" }}
                >
                  Evening
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-driftwood)" }}
                >
                  One question: did you take a small step today?
                </p>
              </div>
            </li>

            {/* Step 3 — Over time */}
            <li className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-birch-bark)" }}
                aria-hidden="true"
              >
                <Leaf
                  size={20}
                  strokeWidth={1.5}
                  style={{ color: "var(--color-forest-green)" }}
                />
              </div>
              <div>
                <h3
                  className="mb-2 text-base font-medium"
                  style={{ color: "var(--color-forest-frame)" }}
                >
                  Over time
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-driftwood)" }}
                >
                  Not perfection. Just a little closer, every day.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ── 4. Philosophy ────────────────────────────────────────── */}
      <section
        className="flex items-center justify-center px-6 py-28 sm:py-36"
        style={{ backgroundColor: "var(--color-birch-bark)" }}
        aria-label="Philosophy"
      >
        <article className="max-w-lg text-center">
          <p
            className="text-xl leading-[1.7] sm:text-2xl sm:leading-[1.65]"
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontStyle: "italic",
              color: "var(--color-forest-frame)",
            }}
          >
            No streaks. No scores. No notifications that make you feel bad. Just
            a quiet rhythm that&rsquo;s yours.
          </p>
        </article>
      </section>

      {/* ── 5. Social proof ──────────────────────────────────────── */}
      {/* This section exists in the DOM but renders nothing visible */}
      <section aria-hidden="true" className="hidden">
        {/* TESTIMONIAL — insert real quote when available */}
      </section>

      {/* ── 6. Closing CTA ───────────────────────────────────────── */}
      <section
        className="flex flex-col items-center justify-center gap-8 px-6 py-28 text-center sm:py-36"
        style={{ backgroundColor: "#2E2923" }}
        aria-label="Download Keru"
      >
        <p
          className="max-w-sm text-xl leading-[1.65] sm:max-w-md sm:text-2xl"
          style={{
            fontFamily: "var(--font-dm-serif)",
            color: "#F4F1EC",
          }}
        >
          The days will go by either way. Keru just helps you stay a little
          closer to what matters.
        </p>

        <AppStoreButton className="border border-white/10" />
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
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
        <p
          className="text-xs"
          style={{ color: "rgba(244,241,236,0.4)" }}
        >
          &copy; {new Date().getFullYear()} Keru. All rights reserved.
        </p>
      </footer>
    </>
  );
}

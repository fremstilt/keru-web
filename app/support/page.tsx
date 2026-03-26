import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Keru",
  description:
    "Help and frequently asked questions for Keru, the daily intention app.",
};

const faqs = [
  {
    q: "How do I sign in?",
    a: "Enter your email address and tap Continue. A one-time code will be sent to your inbox — enter it in the app to sign in. No password needed.",
  },
  {
    q: "I didn't receive the sign-in code.",
    a: "Check your spam folder. If it's not there, wait a minute and try again. Make sure you're entering the same email address each time.",
  },
  {
    q: "What is a focus area?",
    a: "A focus area is something you want to work on — health, a relationship, a project, your mindset. Keru uses your focus area to suggest relevant intentions each morning.",
  },
  {
    q: "What's the difference between Monthly and Lifetime?",
    a: "Monthly gives you access to your Journal for as long as your subscription is active. Lifetime is a one-time purchase that unlocks your Journal permanently.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Open the App Store on your iPhone, tap your profile picture, go to Subscriptions, and select Keru. From there you can cancel or manage your subscription.",
  },
  {
    q: "How do I export my data?",
    a: "Go to Preferences → Download my data. Your intentions and reflections will be exported as a CSV file that you can save or share.",
  },
  {
    q: "How do I delete my account?",
    a: "Go to Preferences → Delete account. This permanently removes all your data from our servers.",
  },
  {
    q: "Where is my data stored?",
    a: "Your data is stored securely on servers in the EU. We never sell your data.",
    privacyLink: true,
  },
];

export default function SupportPage() {
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
              Keru Support
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-driftwood)" }}
            >
              Keru is a daily intention app. One focus area, one intention each
              morning, one check-in each evening.
              <br />
              If you have questions or need help, we&rsquo;re here.
            </p>
          </div>

          {/* FAQ */}
          <section className="mb-16">
            <h2
              className="mb-6 text-lg font-medium"
              style={{
                fontFamily: "var(--font-dm-serif)",
                color: "var(--color-forest-frame)",
              }}
            >
              Frequently asked questions
            </h2>

            <div
              className="divide-y"
              style={{ borderColor: "var(--color-mist)" }}
            >
              {faqs.map(({ q, a, privacyLink }) => (
                <details
                  key={q}
                  className="group py-4"
                  style={
                    {
                      "--summary-color": "var(--color-forest-frame)",
                    } as React.CSSProperties
                  }
                >
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium"
                    style={{ color: "var(--color-forest-frame)" }}
                  >
                    {q}
                    {/* Chevron — rotates when open via CSS sibling trick */}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-base leading-none transition-transform duration-200 group-open:rotate-45"
                      style={{ color: "var(--color-stone)" }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--color-driftwood)" }}
                  >
                    {a}
                    {privacyLink && (
                      <>
                        {" "}
                        <Link
                          href="/privacy"
                          style={{ color: "var(--color-still-water)" }}
                        >
                          Read our Privacy Policy
                        </Link>{" "}
                        for full details.
                      </>
                    )}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section
            className="rounded-2xl px-8 py-8"
            style={{ backgroundColor: "var(--color-mist)", opacity: 0.9 }}
          >
            <h2
              className="mb-2 text-lg font-medium"
              style={{
                fontFamily: "var(--font-dm-serif)",
                color: "var(--color-forest-frame)",
              }}
            >
              Contact
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-driftwood)" }}
            >
              Questions not covered here? Reach out at{" "}
              <a
                href="mailto:hello@keruapp.com"
                style={{ color: "var(--color-still-water)" }}
              >
                hello@keruapp.com
              </a>
              {" "}— we read every message.
            </p>
          </section>
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

"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "./actions";

const initialState: FormState = { status: "idle" };

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="py-6">
        <p
          className="mb-1 text-sm font-medium"
          style={{ color: "var(--color-forest-frame)" }}
        >
          Message sent
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-driftwood)" }}>
          Thanks for reaching out. We read every message and will get back to
          you at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-4 pt-2">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="name"
          className="text-xs font-medium"
          style={{ color: "var(--color-stone)" }}
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={isPending}
          placeholder="Your name"
          className="rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-sm disabled:opacity-50"
          style={{
            backgroundColor: "var(--color-birch-bark)",
            borderColor: "var(--color-mist)",
            color: "var(--color-forest-frame)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-still-water)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-mist)")
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-xs font-medium"
          style={{ color: "var(--color-stone)" }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={isPending}
          placeholder="you@example.com"
          className="rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-sm disabled:opacity-50"
          style={{
            backgroundColor: "var(--color-birch-bark)",
            borderColor: "var(--color-mist)",
            color: "var(--color-forest-frame)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-still-water)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-mist)")
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="text-xs font-medium"
          style={{ color: "var(--color-stone)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isPending}
          placeholder="What's on your mind?"
          className="resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-sm disabled:opacity-50"
          style={{
            backgroundColor: "var(--color-birch-bark)",
            borderColor: "var(--color-mist)",
            color: "var(--color-forest-frame)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-still-water)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-mist)")
          }
        />
      </div>

      {state.status === "error" && (
        <p className="text-xs" style={{ color: "#b91c1c" }}>
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-1 self-start rounded-full px-6 py-2.5 text-sm font-medium transition-opacity disabled:opacity-50"
        style={{
          backgroundColor: "var(--color-forest-green)",
          color: "#fff",
        }}
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

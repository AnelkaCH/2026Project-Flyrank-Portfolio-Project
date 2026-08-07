"use client";

import { useState, type FormEvent } from "react";
import Win95Window from "@/components/ui/Win95Window";

const EMAIL = "anelka.c.hariyanto@gmail.com";

const labelClasses =
  "mb-1 block font-mono text-xs font-bold uppercase tracking-widest text-slate-600";

const inputClasses =
  "w-full rounded-sm border border-slate-400 bg-white px-3 py-2 font-mono text-sm text-slate-900 shadow-[inset_1px_1px_2px_rgba(15,23,42,0.15)] outline-none transition focus:border-[#000080]";

const buttonClasses =
  "inline-flex items-center gap-2 rounded-sm bg-[#c0c0c0] px-5 py-2 font-mono text-sm font-bold text-slate-900 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#808080] transition hover:bg-[#d4d4d4] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Message from ${name.trim() || "your website"}`);
    const body = encodeURIComponent(
      `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <Win95Window title="contact">
      <form onSubmit={handleSubmit} className="bg-slate-100 p-6 sm:p-8">
        <div className="mb-4">
          <label htmlFor="contact-name" className={labelClasses}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact-email" className={labelClasses}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="contact-message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClasses} resize-y`}
            placeholder="What are you working on, and how can I help?"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" className={buttonClasses}>
            Send Message
          </button>
          <p className="text-sm text-slate-500">
            Opens your email app with the message pre-filled.
          </p>
        </div>
      </form>
    </Win95Window>
  );
}

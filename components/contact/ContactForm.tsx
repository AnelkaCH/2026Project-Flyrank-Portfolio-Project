"use client";

import { useState, type FormEvent } from "react";
import Win95Window from "@/components/ui/Win95Window";

const EMAIL = "anelka.c.hariyanto@gmail.com";

const labelClasses =
  "mb-1 block font-mono text-xs font-bold uppercase tracking-widest text-slate-800";

const inputStyle = {
  backgroundColor: "#ffffff",
  borderStyle: "inset",
  borderWidth: "2px",
  borderColor: "#808080 #ffffff #ffffff #808080",
  outline: "none",
};

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
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white text-black"
        style={{
          borderStyle: "inset",
          borderWidth: "2px",
          borderColor: "#808080 #ffffff #ffffff #808080",
        }}
      >
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
            className="w-full px-3 py-2 font-mono text-sm text-slate-900"
            style={inputStyle}
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
            className="w-full px-3 py-2 font-mono text-sm text-slate-900"
            style={inputStyle}
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
            className="w-full px-3 py-2 font-mono text-sm text-slate-900 resize-y"
            style={inputStyle}
            placeholder="What are you working on, and how can I help?"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="inline-block px-5 py-2 font-mono text-sm font-bold bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white active:pt-[9px] active:pb-[7px] active:pl-[21px] active:pr-[19px]"
          >
            Send Message
          </button>
          <p className="text-xs text-slate-600 font-mono">
            Opens your email app with the message pre-filled.
          </p>
        </div>
      </form>
    </Win95Window>
  );
}


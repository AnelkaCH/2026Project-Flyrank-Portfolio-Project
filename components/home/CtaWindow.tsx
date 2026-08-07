import Link from "next/link";
import Win95Window from "@/components/ui/Win95Window";

export default function CtaWindow() {
  return (
    <Win95Window title="meeting_request.txt">
      <div
        className="p-6 text-center bg-white text-black"
        style={{
          borderStyle: "inset",
          borderWidth: "2px",
          borderColor: "#808080 #ffffff #ffffff #808080",
        }}
      >
        <p className="mb-6 text-sm sm:text-base text-gray-800 font-mono">
          If any of that sounds like someone you want on your team, I&apos;d
          love to talk.
        </p>

        <div className="flex flex-col items-center gap-5">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 font-mono text-sm font-bold bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white active:pt-3.5 active:pb-2.5 active:pl-[26px] active:pr-[22px]"
          >
            Let&apos;s have a 15-minute conversation
          </Link>

          <Link
            href="/about"
            className="font-mono text-sm font-bold text-[#2563EB] hover:text-[#06B6D4] transition"
          >
            More about me &rarr;
          </Link>
        </div>
      </div>
    </Win95Window>
  );
}


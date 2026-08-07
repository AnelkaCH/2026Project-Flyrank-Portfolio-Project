import Link from "next/link";
import Win95Window from "@/components/ui/Win95Window";

const buttonClasses =
  "inline-flex items-center justify-center rounded-sm bg-[#c0c0c0] px-6 py-3 font-mono text-sm font-bold text-slate-900 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#808080] transition hover:bg-[#d4d4d4] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]";

export default function CtaWindow() {
  return (
    <Win95Window title="meeting_request.txt">
      <div className="bg-slate-100 p-6 text-center sm:p-10">
        <p className="mb-6 text-lg text-slate-700">
          If any of that sounds like someone you want on your team, I&apos;d
          love to talk.
        </p>

        <div className="flex flex-col items-center gap-5">
          <Link href="/contact" className={buttonClasses}>
            Let&apos;s have a 15-minute conversation
          </Link>

          <Link
            href="/about"
            className="font-medium text-[#2563EB] transition hover:text-[#06B6D4]"
          >
            More about me →
          </Link>
        </div>
      </div>
    </Win95Window>
  );
}

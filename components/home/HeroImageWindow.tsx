import Image from "next/image";
import Win95Window from "@/components/ui/Win95Window";

interface HeroImageWindowProps {
  className?: string;
}

export default function HeroImageWindow({ className = "" }: HeroImageWindowProps) {
  return (
    <div className={`overflow-hidden shadow-xl ${className}`}>
      <Win95Window title="anelka_working.jpg" className="h-full">
        <div className="relative flex-1 w-full min-h-[220px]">
          <Image
            src="/images/case-studies/default/darwin-iot-codeavour-7.jpeg"
            alt="Anelka presenting the Darwin IoT robot at Codeavour 7"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover animate-fade-in"
            loading="eager"
          />
        </div>
      </Win95Window>
    </div>
  );
}

import Image from "next/image";
import Win95Window from "@/components/ui/Win95Window";

export default function HeroImageWindow() {
  return (
    <div className="overflow-hidden rounded-lg shadow-xl">
      <Win95Window title="codeavour_7.jpg">
        <div className="relative" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src="/images/case-studies/default/darwin-iot-codeavour-7.jpeg"
            alt="Anelka presenting the Darwin IoT robot at Codeavour 7"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
            loading="eager"
          />
        </div>
      </Win95Window>
    </div>
  );
}

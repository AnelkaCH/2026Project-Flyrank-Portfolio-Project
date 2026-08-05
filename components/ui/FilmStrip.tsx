import Image from "next/image";

export interface FilmStripImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface FilmStripProps {
  images: FilmStripImage[];
  fullBleed?: boolean;
}

const perforationCount = 14;

export default function FilmStrip({ images, fullBleed = false }: FilmStripProps) {
  return (
    <figure
      className={`group flex h-32 flex-col overflow-hidden bg-black sm:h-40 md:h-52 lg:h-56 xl:h-64 ${
        fullBleed ? "-mx-[calc(50vw-50%)]" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="flex items-center justify-between gap-2 px-4 pt-3"
      >
        {Array.from({ length: perforationCount }).map((_, i) => (
          <span key={i} className="size-2.5 rounded-[1px] bg-slate-700" />
        ))}
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <div className="flex h-full w-max animate-[film-scroll_55s_linear_infinite] motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {[0, 1].map((set) => (
            <div key={set} className="flex" aria-hidden={set === 1}>
              {images.map((image) => (
                <div
                  key={`${set}-${image.src}`}
                  className="relative h-full shrink-0 pr-3"
                  style={{
                    aspectRatio:
                      image.width && image.height
                        ? `${image.width} / ${image.height}`
                        : "3 / 2",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={set === 1 ? "" : image.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
        />
      </div>

      <div
        aria-hidden="true"
        className="flex items-center justify-between gap-2 px-4 pb-3"
      >
        {Array.from({ length: perforationCount }).map((_, i) => (
          <span key={i} className="size-2.5 rounded-[1px] bg-slate-700" />
        ))}
      </div>
    </figure>
  );
}

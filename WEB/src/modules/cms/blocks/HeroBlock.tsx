import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  mobileImage: string;
  className?: string;
}

export default function HeroBlock({
  title,
  subtitle,
  backgroundImage,
  mobileImage,
  className = "",
}: HeroProps) {
  return (
    <section className="relative w-full max-w-[1440px] h-[240px] mx-auto overflow-hidden">

      <Image
        src={backgroundImage}
        alt="hero desktop"
        fill
        priority
        className="hidden md:block object-cover"
      />

      <Image
        src={mobileImage}
        alt="hero mobile"
        fill
        priority
        className="block md:hidden object-cover"
      />

      <div className="relative z-10 h-full flex items-center">
        <div
          className={`max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}
        >
          <div className="max-w-xl">
            <p className="text-center md:text-left text-2xl md:text-4xl font-bold text-white">
              {title}
            </p>

            {subtitle && (
              <p className="text-center md:text-left mt-4 text-sm md:text-lg text-white/90">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
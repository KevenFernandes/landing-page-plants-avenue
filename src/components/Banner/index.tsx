import Link from "next/link";
import Image from "next/image";

type BannerProps = {
  subtitle: string;
  title: string;
  hrefLink: string;
  srcImage: string;
};

export function Banner({ subtitle, title, hrefLink, srcImage }: BannerProps) {
  return (
    <article className="bg-[#ddd] px-4 py-6 rounded-xl flex overflow-hidden w-full">
      <div className="flex flex-col gap-2 font-semibold w-full">
        <h3 className="text-xs md:text-sm opacity-70">{subtitle}</h3>
        <h2 className="text-lg md:text-xl max-w-30">{title}</h2>
        <Link
          href={hrefLink}
          className="text-xs md:text-sm text-secondary my-4"
        >
          Comprar Agora
        </Link>
      </div>
      <div className="flex w-full relative">
        <Image
          src={srcImage}
          width={600}
          height={600}
          alt="planta de interior"
          className="max-w-60 max-h-60 object-cover absolute -bottom-25"
        />
      </div>
    </article>
  );
}

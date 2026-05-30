import clsx from "clsx";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductArticleTypes = {
  name: string;
  price: string;
  imageUrl: string;
};

export function ProductArticle({ name, price, imageUrl }: ProductArticleTypes) {
  return (
    <article>
      <Link
        href={"#"}
        className={clsx(
          "hover:bg-green-800/50 bg-[#ddd] h-50",
          "flex rounded-xl relative sm:min-h-55 lg:min-h-65",
          "transition-colors",
        )}
      >
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt="planta interior com jarro de barro"
          className="object-contain"
        />
        <div className="absolute right-2 top-2">
          <button
            className={clsx(
              "bg-[#ddd] rounded-full p-1 text-secondary",
              "cursor-pointer group",
            )}
          >
            <HeartIcon size={18} className="group-hover:fill-secondary" />
          </button>
        </div>
      </Link>
      <div className="text-sm font-semibold mt-1">
        <h3>{name}</h3>
        <p className="text-secondary">${price}</p>
      </div>
    </article>
  );
}

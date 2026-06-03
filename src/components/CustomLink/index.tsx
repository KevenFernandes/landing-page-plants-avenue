import clsx from "clsx";
import { LucideProps } from "lucide-react";
import Link from "next/link";

type CustomLinkProps = {
  buttonText: string;
  href: string;
  icon?: React.ElementType<LucideProps>;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function CustomLink({
  buttonText,
  href,
  icon: Icon,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "w-fit rounded-3xl text-light",
        "text-sm md:text-base text-nowrap",
        "px-2 py-1 md:px-4 md:py-2",
        "bg-secondary cursor-pointer",
        "flex items-center gap-2",
      )}
      {...props}
    >
      {buttonText}{" "}
      {Icon && (
        <span className="bg-white rounded-full flex items-center justify-center w-7 h-7">
          <Icon color="black" size={20} />
        </span>
      )}
    </Link>
  );
}

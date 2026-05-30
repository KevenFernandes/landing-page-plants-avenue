import clsx from "clsx";
import { LucideProps } from "lucide-react";

type ButtonProps = {
  buttonText: string;
  icon?: React.ElementType<LucideProps>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ buttonText, icon: Icon, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-fit rounded-3xl text-white",
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
    </button>
  );
}

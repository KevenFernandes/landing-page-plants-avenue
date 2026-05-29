import clsx from "clsx";
import { LucideProps } from "lucide-react";

type BadgeProps = {
  title: string;
  description: string;
  icon: React.ElementType<LucideProps>;
};

export function Badge({ title, description, icon: Icon }: BadgeProps) {
  return (
    <div className="flex flex-col items-center md:items-center md:flex-row md:gap-4 gap-2 min-w-25 h-17">
      <div className="flex h-8 items-center justify-center ">
        <Icon size={26} />
      </div>
      <div>
        <h3
          className={clsx(
            "font-semibold text-xs text-center",
            "md:text-base md:text-left",
            "md:text-nowrap",
          )}
        >
          {title}
        </h3>
        <p className="text-sm hidden md:flex">{description}</p>
      </div>
    </div>
  );
}

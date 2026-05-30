import clsx from "clsx";

export type TitleSectionProps = {
  variant?: "primary" | "ghost";
  size?: "lg" | "xl";
  weight?: "bold" | "default" | "semibold";
  text: string;
};
export function TitleSection({
  variant = "primary",
  size = "xl",
  weight = "bold",
  text,
}: TitleSectionProps) {
  const variantMap = {
    primary: "text-primary",
    ghost: "text-white",
  };

  const sizeMap = {
    lg: "text-lg",
    xl: "text-xl sm:text-2xl",
  };

  const weightMap = {
    default: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <h1
      className={clsx(
        "font-playfair",
        variantMap[variant],
        sizeMap[size],
        weightMap[weight],
      )}
    >
      {text}
    </h1>
  );
}

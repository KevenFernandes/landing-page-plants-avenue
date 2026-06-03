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
    ghost: "text-light",
  };

  const sizeMap = {
    lg: "text-lg",
    xl: "text-xl sm:text-2xl lg:text-4xl",
  };

  const weightMap = {
    default: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <h1
      className={clsx(
        "font-playfair lg:py-4",
        variantMap[variant],
        sizeMap[size],
        weightMap[weight],
      )}
    >
      {text}
    </h1>
  );
}

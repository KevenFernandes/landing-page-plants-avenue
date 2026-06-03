type StepArticleProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};
export function StepArticle({
  children,
  title,
  description,
}: StepArticleProps) {
  return (
    <article className="flex gap-4 items-center sm:flex-col sm:text-center ">
      <div className="w-14 h-14 p-3 bg-primary rounded-full">{children}</div>
      <div className="flex-1 flex flex-col gap-1">
        <h2 className="font-semibold text-sm md:text-base">{title}</h2>
        <p className="text-xs md:text-sm">{description}</p>
      </div>
    </article>
  );
}

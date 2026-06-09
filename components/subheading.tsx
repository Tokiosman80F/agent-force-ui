import { cn } from "@/lib/utils";

export default function Subheading({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "p";
}) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "max-w-lg text-base text-neutral-500 dark:text-neutral-600 font-sans",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

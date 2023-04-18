import { cn } from "@/lib/utils";

type Typography = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyH1({ children, className }: Typography) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: Typography) {
  return (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: Typography) {
  return (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyP({ children, className }: Typography) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function TypographySubtle({ children, className }: Typography) {
  return <p className={cn("text-sm text-slate-500", className)}>{children}</p>;
}

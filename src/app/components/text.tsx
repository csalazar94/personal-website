import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";

interface HProps extends ComponentProps<"h5"> {
  className?: string;
}

export const H1 = ({ children, className, ...props }: HProps) => (
  <h1
    className={twMerge(className, "text-4xl font-bold text-[#c8d3f5]")}
    {...props}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className, ...props }: HProps) => (
  <h2
    className={twMerge(className, "mt-2 text-xl font-semibold text-[#c8d3f5]")}
    {...props}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className, ...props }: HProps) => (
  <h3
    className={twMerge(className, "text-lg uppercase font-bold text-[#c8d3f5]")}
    {...props}
  >
    {children}
  </h3>
);

export const H4 = ({ children, className, ...props }: HProps) => (
  <h4
    className={twMerge(className, "uppercase font-medium text-[#c8d3f5]")}
    {...props}
  >
    {children}
  </h4>
);

export const H5 = ({ children, className, ...props }: HProps) => (
  <h5
    className={twMerge(
      className,
      "uppercase text-sm font-medium text-[#828bb8]",
    )}
    {...props}
  >
    {children}
  </h5>
);

interface PProps extends ComponentProps<"p"> {
  className?: string;
}

export const P = ({ children, className, ...props }: PProps) => (
  <p className={twMerge(className, "text-[#828bb8]")} {...props}>
    {children}
  </p>
);

interface ULProps extends ComponentProps<"ul"> {
  className?: string;
}

export const UL = ({ children, className, ...props }: ULProps) => (
  <ul
    className={twMerge(className, "text-[#828bb8] list-disc ml-4")}
    {...props}
  >
    {children}
  </ul>
);

interface AProps extends ComponentProps<"a"> {
  className?: string;
}

export const A = ({ children, className, ...props }: AProps) => (
  <a
    className={twMerge(
      className,
      "text-[#89DDFF] font-semibold hover:underline",
    )}
    {...props}
  >
    {children}
  </a>
);

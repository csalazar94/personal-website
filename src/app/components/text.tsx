import { twMerge } from "tailwind-merge";

export const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1 className={twMerge(className, "text-4xl font-bold text-[#c8d3f5]")}>
    {children}
  </h1>
);

export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={twMerge(className, "mt-2 text-xl font-semibold text-[#c8d3f5]")}
  >
    {children}
  </h2>
);

export const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={twMerge(className, "text-lg uppercase font-bold text-[#c8d3f5]")}
  >
    {children}
  </h3>
);

export const H4 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h4 className={twMerge(className, "uppercase font-medium text-[#c8d3f5]")}>
    {children}
  </h4>
);

export const H5 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h5
    className={twMerge(
      className,
      "uppercase text-sm font-medium text-[#828bb8]",
    )}
  >
    {children}
  </h5>
);

export const P = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <p className={twMerge(className, "text-[#828bb8]")}>{children}</p>;

export const UL = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <ul className={twMerge(className, "text-[#828bb8] list-disc ml-4")}>
    {children}
  </ul>
);

export default function IconButton({
  href,
  target,
  children,
}: {
  href: string;
  target?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={target}
      className="h-8 fill-[#828bb8] hover:fill-[#c8d3f5]"
    >
      {children}
    </a>
  );
}

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
      className="text-[#828bb8] hover:text-[#c8d3f5]"
    >
      {children}
    </a>
  );
}

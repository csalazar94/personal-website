export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm bg-[#394B70] text-[#82AAFF] px-2 py-1 rounded-sm">
      {children}
    </div>
  );
}

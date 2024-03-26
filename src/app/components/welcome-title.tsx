import Hi from "./hi";

export default function WelcomeTitle() {
  return (
    <h1 className="text-5xl mb-4">
      <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-emerald-500 to-blue-500">
        I&apos;m Camilo Salazar{" "}
      </span>
      <Hi />
    </h1>
  );
}

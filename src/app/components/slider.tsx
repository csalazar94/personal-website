export const Slider = ({ imgs }: { imgs: string[] }) => (
  <div className="inline-flex animate-slide whitespace-nowrap w-max">
    {imgs.map((src, idx) => (
      <img key={idx} className="h-10 mx-5 inline" src={src} />
    ))}
  </div>
);

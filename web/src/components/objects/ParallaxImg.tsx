import { useParallax } from "react-scroll-parallax";

type TypeParallaxImg = {
  fileName: string;
  speed?: number;
  className?: string;
};

export default function ParallaxImg({
  fileName,
  speed = 1,
  className = "",
}: TypeParallaxImg) {
  const { ref } = useParallax({ speed });
  const [name] = fileName.split(".");
  return (
    <img
      ref={ref as any}
      alt={`${name}`}
      className={className}
      src={`/images/${fileName}`}
    />
  );
}

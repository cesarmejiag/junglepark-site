import { urlFor } from "@/lib/api";

export default function Figure({ value }: any) {
  const { alt, caption, asset } = value;
  if (!asset) {
    return null;
  }
  return (
    <figure>
      <img src={urlFor(asset).auto("format").width(2000).url()} alt={alt} />
      {caption && (
        <figcaption>
          <p>{caption}</p>
        </figcaption>
      )}
    </figure>
  );
}

import { getVideoUrl, urlFor } from "@/lib/api";

type TypeVideo = {
  srcRef: any;
  posterRef?: any;
  autoPlay?: boolean;
  controls?: boolean;
  height?: number;
  loop?: boolean;
  muted?: boolean;
  width?: number;
};

export default function Video(props: TypeVideo) {
  const { srcRef, posterRef, ...config } = props;
  const src = getVideoUrl(srcRef);
  const poster = posterRef ? urlFor(posterRef).url() : undefined;
  return (
    <video poster={poster} {...config}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

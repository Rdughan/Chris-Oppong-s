import type { ImgHTMLAttributes } from "react";

interface PictureProps {
  jpg: string;
  webp: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
}

export default function Picture({
  jpg,
  webp,
  width,
  height,
  alt,
  className,
  loading = "lazy",
  fetchPriority = "auto",
}: PictureProps) {
  // fetchPriority landed in @types/react from 18.3.3 onward. Setting it via a
  // cast keeps this component compiling whether or not the installed
  // @types/react version already knows about the prop, without relying on
  // a fragile @ts-expect-error that breaks the build the moment the types
  // catch up.
  const imgProps: ImgHTMLAttributes<HTMLImageElement> = {
    src: jpg,
    width,
    height,
    alt,
    className,
    loading,
    decoding: "async",
  };
  (imgProps as Record<string, unknown>).fetchPriority = fetchPriority;

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img {...imgProps} />
    </picture>
  );
}

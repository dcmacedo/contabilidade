type PictureImgProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export default function PictureImg({ src, alt, width, height, priority, className }: PictureImgProps) {
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  return (
    <picture>
      <source type="image/webp" srcSet={webp} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
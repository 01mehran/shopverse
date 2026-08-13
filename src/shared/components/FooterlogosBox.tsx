type FooterImages = {
  imageUrl: string;
  alt: string;
  borderRadius?: string;
  className?: string;
};

export default function FooterLogosBox({
  imageUrl,
  alt,
  borderRadius = "",
  className = "",
}: FooterImages) {
  return (
    <article
      className={`rounded-md bg-white p-2 ${className}`}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <img src={imageUrl} alt={alt} className={`object-cover`} />
    </article>
  );
}

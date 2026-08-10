type FooterImages = {
  imageUrl: string;
  alt: string;
  bg?: string;
  border?: string;
  className?: string;
};

export default function FooterLogosBox({
  imageUrl,
  alt,
  bg = "white",
  border = "6px",
  className,
}: FooterImages) {
  return (
    <article
      className={`rounded-md p-2 ${className} `}
      style={{ backgroundColor: bg, borderRadius: border }}
    >
      <img src={imageUrl} alt={alt} className={`w-full object-cover`} />
    </article>
  );
}

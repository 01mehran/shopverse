type FooterImages = {
  imageUrl: string;
  alt: string;
  bg?: string;
  border?: string;
};

export default function FooterLogosBox({
  imageUrl,
  alt,
  bg = "white",
  border = "6px",
}: FooterImages) {
  return (
    <article
      className={`rounded-md p-2`}
      style={{ backgroundColor: bg, borderRadius: border }}
    >
      <img src={imageUrl} alt={alt} className="object-cover" />
    </article>
  );
}

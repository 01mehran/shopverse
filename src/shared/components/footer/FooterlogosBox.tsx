// Types;
import type { FooterImages } from "@/shared/types/types";

export default function FooterLogosBox({
  alt,
  imageUrl,
  href,
  borderRadius = "",
  className = "",
}: FooterImages) {
  const instagram = alt === "instagram icon";

  return (
    <article
      className={`cursor-pointer rounded-md p-2 ${instagram ? "bg-black" : "bg-white"} ${className}`}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer bg-black"
        className="flex h-full w-full items-center justify-center"
      >
        <img src={imageUrl} alt={alt} className={`object-cover`} />
      </a>
    </article>
  );
}

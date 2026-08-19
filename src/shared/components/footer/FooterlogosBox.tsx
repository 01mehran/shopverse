// Types;
import type { FooterImages } from "@/shared/types/types";

export default function FooterLogosBox({
  imageUrl,
  alt,
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
      <img src={imageUrl} alt={alt} className={`object-cover`} />
    </article>
  );
}

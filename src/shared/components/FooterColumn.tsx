type FooterColumn = {
  title: string;
  links: string[];
};

export default function FooterColumn({ title, links }: FooterColumn) {
  return (
    <section>
      <article className="flex flex-col items-start justify-center gap-3">
        <p className="font-Satoshi text-lg font-medium uppercase">{title}</p>

        {links.map((link) => (
          <span
            key={link}
            className="font-Satoshi text-base text-black/60 capitalize"
          >
            {link}
          </span>
        ))}
      </article>
    </section>
  );
}

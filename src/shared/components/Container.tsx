export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-3 xl:px-12 2xl:max-w-350">
      {children}
    </section>
  );
}

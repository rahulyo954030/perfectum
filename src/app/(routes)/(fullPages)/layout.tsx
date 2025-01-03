export default function FullPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="max-w-8xl mx-auto 2xl:container">{children}</div>
    </>
  );
}

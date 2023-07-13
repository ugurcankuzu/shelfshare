export default function ShelfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full flex flex-col items-center bg-dark-brown">
      {children}
    </main>
  );
}

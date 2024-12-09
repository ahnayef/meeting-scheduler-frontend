import { Nav } from "@/app/(components)/Navbar";

export default function guestDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`antialiased`}>
      <Nav />
      {children}
    </main>
  );
}

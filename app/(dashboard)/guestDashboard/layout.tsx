import { DSidebar } from "../../(components)/DashboardSidebar";

export default function guestDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`antialiased`}>
      {children}
    </main>
  );
}

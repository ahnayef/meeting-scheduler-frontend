import { DSidebar } from "../(components)/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`antialiased`}>
    <DSidebar/>
    {children}
    </main>;
}

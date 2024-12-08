import { Nav } from "../(components)/Navbar";

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main
          className={`antialiased`}
        >
            <Nav/>
          {children}
        </main>
    );
  }
"use client";

import { Nav } from "../(components)/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/utils/isLoggedIn";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const getUserRole = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.role;
  };

  useEffect(() => {
    if (isLoggedIn()) {
      const role = getUserRole();
      if (role === "Guest") {
        router.push("/guestDashboard");
      } else if (role === "Host") {
        router.push("/hostDashboard");
      }
    }
  }, []);

  return (
    <main className={`antialiased`}>
      <Nav />
      {children}
    </main>
  );
}

"use client";


import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

export function Nav() {

    const router = useRouter();


  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <HiOutlineCalendarDateRange className="text-primary-500 dark:text-primary-400 mr-2 h-8 w-8 self-center" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MeetFlow
        </span>
      </Navbar.Brand>
      <div className="flex items-center justify-center gap-10 md:order-2">
        <Link href="login">Login</Link>
        <Button className="p-0" onClick={() => router.push("signup")}>
          Signup
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

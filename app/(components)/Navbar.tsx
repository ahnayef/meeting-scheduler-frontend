"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

export function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com" className="gap-2">
      <HiOutlineCalendarDateRange />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Meeting Scheduler
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

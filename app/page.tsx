"use client"
import { Button } from "flowbite-react";
import Image from "next/image";
import { Nav } from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Nav />
      <section className="bg-white dark:bg-gray-900 h-full">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Simplify Your Meetings with MeetFlow
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Effortlessly schedule and manage meetings with our intuitive
              platform. Save time and stay organized with MeetFlow.
            </p>

            <div className="flex flex-row gap-10">
              <Button className=""  onClick={()=> router.push("/signup")}>Get started</Button>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img src="hero.png" alt="mockup" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

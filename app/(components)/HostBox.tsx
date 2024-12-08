"use client";

import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HostBox({
  id,
  name,
  email,
  photo,
}: {
  id: string;
  name: string;
  email: string;
  photo: string;
}) {
  return (
    <div className="shadow-md p-10 border">
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Host"
          height="150"
          src={photo}
          width="150"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <Link
            href={`/host/${id}`}
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            View Schedules
          </Link>
        </div>
      </div>
    </div>
  );
}

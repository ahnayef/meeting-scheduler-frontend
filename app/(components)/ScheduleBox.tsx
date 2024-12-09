"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

export default function ScheduleBox({
  user_id,
  slot_id,
  date,
  start_tm,
  end_tm,
  is_booked,
  setModalData,
}: {
  user_id: number;
  slot_id: number;
  date: string;
  start_tm: string;
  end_tm: string;
  is_booked: boolean;
  setModalData: any;
}) {
  const user = localStorage.getItem("user");
  const id = user ? JSON.parse(user)["user_id"] : null;

  return (
    <>
      <div className="border p-10 shadow-md">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {start_tm} - {end_tm}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {is_booked ? "Booked" : "Available"}
          </span>

          <div className="mt-4 flex space-x-3 lg:mt-6">
            {id === user_id ? (
              <Button
                onClick={() => setModalData({ id: slot_id })}
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Edit
              </Button>
            ) : (
              <Button
                onClick={() => setModalData({ id: slot_id })}
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Book
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

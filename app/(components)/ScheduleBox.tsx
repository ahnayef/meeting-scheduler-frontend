"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ScheduleBox({
  user_id,
  slot_id,
  date,
  start_tm,
  end_tm,
  is_booked,
  setModalData,
  bookedBy,
}: {
  user_id: number;
  slot_id: number;
  date: string;
  start_tm: string;
  end_tm: string;
  is_booked: boolean;
  setModalData: any;
  bookedBy: number;
}) {
  const user =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const id = user ? JSON.parse(user)["user_id"] : null;

  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    // Parse date and time into a Date object
    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes] = start_tm.split(":").map(Number);
    const targetDate = new Date(year, month - 1, day, hours, minutes);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;
      setTimeLeft(difference > 0 ? difference : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [date, start_tm]);

  const formatTimeLeft = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

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
            {is_booked &&
              (id === bookedBy ? "Booked by me" : "Booked by someone else")}
          </span>

          <div className="mt-4 flex space-x-3 lg:mt-6">
            {id === user_id ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <Button
                  color="red"
                  onClick={() =>
                    !is_booked &&
                    setModalData({ id: slot_id, actionType: "Delete" })
                  }
                  className={`inline-flex items-center rounded-lg p-1 text-sm font-medium text-red-500 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
                    is_booked && "cursor-not-allowed opacity-40"
                  }`}
                >
                  Delete
                </Button>
                <Button
                  onClick={() =>
                    !is_booked &&
                    router.push(`/hostDashboard/editSchedule/${slot_id}`)
                  }
                  className={`inline-flex items-center rounded-lg p-1 text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
                    is_booked && "cursor-not-allowed opacity-40"
                  }`}
                >
                  Edit
                </Button>
              </div>
            ) : (
              <Button
                onClick={() =>
                  !is_booked &&
                  setModalData({ id: slot_id, actionType: "Book" })
                }
                className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
                  is_booked && "cursor-not-allowed opacity-40"
                }`}
              >
                Book
              </Button>
            )}
          </div>
          {/* <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Starts in: {formatTimeLeft(timeLeft)}
          </div> */}
        </div>
      </div>
    </>
  );
}

"use client";

import React, { use, useEffect } from "react";
import HostSchedules from "./HostSchedules";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { request } from "@/utils/request";

export default function Host({ params }: { params: Promise<{ id: string }> }) {
  const [schedules, setSchedules] = React.useState([]);

  const { user_id } = JSON.parse(localStorage.getItem("user") || "{}")
  console.log(user_id);

  useEffect(() => {
    const res = request.get("/slots/getall?user_id=" + user_id);
    res.then((res) => {
      setSchedules(res.data);
    });
  }, []);

  const bookedSchedules = [
    {
      slot_id: 13,
      date: "2021-07-01",
      start_tm: "09:00",
      end_tm: "10:00",
      status: "Pending",
    },
    {
      slot_id: 14,
      date: "2021-07-01",
      start_tm: "10:00",
      end_tm: "11:00",
      status: "Pending",
    },
    {
      slot_id: 15,
      date: "2021-07-01",
      start_tm: "11:00",
      end_tm: "12:00",
      status: "Pending",
    },
  ];

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-10">
        <h2 className="text-2xl font-semibold">My Schedules</h2>
        <Link
          href="hostDashboard/addSchedule"
          className="flex cursor-pointer flex-row items-center justify-center gap-1 border p-2 shadow"
        >
          <FaPlus className="text-2xl" />
          <p>Add Schedule</p>
        </Link>
        <HostSchedules schedules={schedules} />
        {/* <h2 className="text-2xl font-semibold">Booked Schedules</h2>
        <HostSchedules schedules={bookedSchedules} /> */}
      </div>
    </>
  );
}

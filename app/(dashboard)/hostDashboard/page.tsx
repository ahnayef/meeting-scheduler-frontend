"use client";

import React, { use, useEffect } from "react";
import HostSchedules from "./HostSchedules";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { request } from "@/utils/request";

export default function Host({ params }: { params: Promise<{ id: string }> }) {
  const [schedules, setSchedules] = React.useState([]);
  const [bookedSchedules, setBookedSchedules] = React.useState([]);

  const { user_id } = JSON.parse(localStorage.getItem("user") || "{}");

  const getSchedule = () => {
    const res = request.get("/slots/getall?user_id=" + user_id);
    res.then((res) => {
      const { slots, bookedSlots } = res.data;
      setSchedules(slots);
      setBookedSchedules(bookedSlots);
    });
  };

  useEffect(() => {
    getSchedule();
  }, []);

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
        <HostSchedules getSchedule={getSchedule} schedules={schedules} />
        <h2 className="text-2xl font-semibold">Booked Schedules</h2>
        {bookedSchedules.length === 0 ? (
          <HostSchedules
            getSchedule={getSchedule}
            schedules={bookedSchedules}
          />
        ) : (
          <p>No booked schedules</p>
        )}
      </div>
    </>
  );
}

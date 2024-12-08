import React from "react";
import HostSchedules from "./HostSchedules";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export default function Host({ params }: { params: { id: string } }) {
  const hostDetails = {
    id: 1,
    name: "Host1",
    email: "demo@gmail.com",
    photo: "https://via.placeholder.com/150",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const schedules = [
    {
      slot_id: 1,
      date: "2021-07-01",
      start_tm: "09:00",
      end_tm: "10:00",
      status: "Available",
    },
    {
      slot_id: 2,
      date: "2021-07-01",
      start_tm: "10:00",
      end_tm: "11:00",
      status: "Available",
    },
    {
      slot_id: 3,
      date: "2021-07-01",
      start_tm: "11:00",
      end_tm: "12:00",
      status: "Available",
    },
    {
      slot_id: 4,
      date: "2021-07-01",
      start_tm: "13:00",
      end_tm: "14:00",
      status: "Available",
    },
    {
      slot_id: 5,
      date: "2021-07-01",
      start_tm: "14:00",
      end_tm: "15:00",
      status: "Available",
    },
    {
      slot_id: 6,
      date: "2021-07-01",
      start_tm: "15:00",
      end_tm: "16:00",
      status: "Available",
    },
    {
      slot_id: 7,
      date: "2021-07-01",
      start_tm: "16:00",
      end_tm: "17:00",
      status: "Available",
    },
    {
      slot_id: 8,
      date: "2021-07-01",
      start_tm: "17:00",
      end_tm: "18:00",
      status: "Available",
    },
    {
      slot_id: 9,
      date: "2021-07-01",
      start_tm: "18:00",
      end_tm: "19:00",
      status: "Available",
    },
    {
      slot_id: 10,
      date: "2021-07-01",
      start_tm: "19:00",
      end_tm: "20:00",
      status: "Available",
    },
    {
      slot_id: 11,
      date: "2021-07-01",
      start_tm: "20:00",
      end_tm: "21:00",
      status: "Available",
    },
    {
      slot_id: 12,
      date: "2021-07-01",
      start_tm: "21:00",
      end_tm: "22:00",
      status: "Available",
    },
  ];

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
        <h2 className="text-2xl font-semibold">Schedules</h2>
        <Link href="hostDashboard/addSchedule"  className="flex justify-center items-center shadow border p-2 cursor-pointer gap-1 flex-row">
        <FaPlus className="text-2xl"/> 
        <p>
        Add Schedule
        </p>
        </Link>
        <HostSchedules schedules={schedules} />
        <h2 className="text-2xl font-semibold">Booked Schedules</h2>
        <HostSchedules schedules={bookedSchedules} />
      </div>
    </>
  );
}

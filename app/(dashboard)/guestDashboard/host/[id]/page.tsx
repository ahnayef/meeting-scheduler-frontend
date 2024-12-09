"use client";
import React, { use, useEffect } from "react";
import ScheduleList from "./ScheduleList";
import { request } from "@/utils/request";

export default function Host({ params }: { params: Promise<{ id: string }> }) {
  const hostDetails = {
    id: 1,
    name: "Host1",
    email: "demo@gmail.com",
    photo: "https://via.placeholder.com/150",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  // const schedules = [
  //   {
  //     slot_id: 1,
  //     date: "2021-07-01",
  //     start_tm: "09:00",
  //     end_tm: "10:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 2,
  //     date: "2021-07-01",
  //     start_tm: "10:00",
  //     end_tm: "11:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 3,
  //     date: "2021-07-01",
  //     start_tm: "11:00",
  //     end_tm: "12:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 4,
  //     date: "2021-07-01",
  //     start_tm: "13:00",
  //     end_tm: "14:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 5,
  //     date: "2021-07-01",
  //     start_tm: "14:00",
  //     end_tm: "15:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 6,
  //     date: "2021-07-01",
  //     start_tm: "15:00",
  //     end_tm: "16:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 7,
  //     date: "2021-07-01",
  //     start_tm: "16:00",
  //     end_tm: "17:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 8,
  //     date: "2021-07-01",
  //     start_tm: "17:00",
  //     end_tm: "18:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 9,
  //     date: "2021-07-01",
  //     start_tm: "18:00",
  //     end_tm: "19:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 10,
  //     date: "2021-07-01",
  //     start_tm: "19:00",
  //     end_tm: "20:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 11,
  //     date: "2021-07-01",
  //     start_tm: "20:00",
  //     end_tm: "21:00",
  //     status: "Available",
  //   },
  //   {
  //     slot_id: 12,
  //     date: "2021-07-01",
  //     start_tm: "21:00",
  //     end_tm: "22:00",
  //     status: "Available",
  //   },
  // ];

  // const pendingSchedules = [
  //   {
  //     slot_id: 13,
  //     date: "2021-07-01",
  //     start_tm: "09:00",
  //     end_tm: "10:00",
  //     status: "Pending",
  //   },
  //   {
  //     slot_id: 14,
  //     date: "2021-07-01",
  //     start_tm: "10:00",
  //     end_tm: "11:00",
  //     status: "Pending",
  //   },
  //   {
  //     slot_id: 15,
  //     date: "2021-07-01",
  //     start_tm: "11:00",
  //     end_tm: "12:00",
  //     status: "Pending",
  //   },
  // ];

  const [schedules, setSchedules] = React.useState([]);
  const [bookedSchedules, setBookedSchedules] = React.useState([]);

  const { id } = use(params);

  const getSchedules = () => {
    const res = request.get("/slots/getall?user_id=" + id);
    res.then((res) => {
      const { slots, bookedSlots } = res.data;
      setSchedules(slots);
      setBookedSchedules(bookedSlots);
    });
  };

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-10">
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Host"
            height="150"
            src={hostDetails.photo}
            width="150"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {hostDetails.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {hostDetails.bio}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {hostDetails.email}
          </span>
        </div>
        <h2 className="text-2xl font-semibold">Schedules</h2>
        <ScheduleList getSchedules={getSchedules} schedules={schedules} />
        <h2 className="text-2xl font-semibold">Booked Schedules</h2>
        <ScheduleList getSchedules={getSchedules} schedules={bookedSchedules} />
      </div>
    </>
  );
}

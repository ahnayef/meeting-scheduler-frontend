"use client";

import ScheduleBox from "@/app/(components)/ScheduleBox";
import { request } from "@/utils/request";
import { Button, Modal } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ScheduleList({ schedules, getSchedules }: any) {
  const [modalData, setModalData] = useState<{ id: number | null }>({
    id: null,
  });
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [sortOption, setSortOption] = useState("date");
  const [filteredSchedules, setFilteredSchedules] = useState(schedules);

  useEffect(() => {
    let filtered = schedules;

    if (startDate && endDate) {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();

      filtered = filtered.filter((schedule: any) => {
        const scheduleDate = new Date(schedule.date).getTime();
        return scheduleDate >= start && scheduleDate <= end;
      });
    }

    if (sortOption === "date") {
      filtered.sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (sortOption === "start_tm") {
      filtered.sort(
        (a: any, b: any) =>
          new Date(`${a.date} ${a.start_tm}`).getTime() -
          new Date(`${b.date} ${b.start_tm}`).getTime()
      );
    } else if (sortOption === "end_tm") {
      filtered.sort(
        (a: any, b: any) =>
          new Date(`${a.date} ${a.end_tm}`).getTime() -
          new Date(`${b.date} ${b.end_tm}`).getTime()
      );
    }

    setFilteredSchedules(filtered);
  }, [startDate, endDate, sortOption, schedules]);

  const handleClearFilter = () => {
    setStartDate("");
    setEndDate("");
    setSortOption("date");
  };

  const handleBook = (slot_id: number) => {
    const res = request.post("/booking/create", { slot_id, user_id: id });
    res
      .then((res) => {
        toast.success("Booking successful");
      })
      .catch((err) => {
        toast.error(
          err.response.data.message ||
            err.response.data ||
            "Booking failed"
        );
      })
      .finally(() => {
        setModalData({ id: null });
        getSchedules();
      });
  };

  const user = localStorage.getItem("user");
  const id = user ? JSON.parse(user)["user_id"] : null;

  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>
        <div className="flex space-x-2">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="date">Sort by Date</option>
            <option value="start_tm">Sort by Start Time</option>
            <option value="end_tm">Sort by End Time</option>
          </select>
          <button
            onClick={handleClearFilter}
            className="border px-2 py-1 rounded bg-gray-200"
          >
            Clear Filter
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-5">
        {filteredSchedules.map((schedule: any) => (
          <ScheduleBox
            key={schedule.slot_id}
            user_id={schedule.user_id}
            slot_id={schedule.slot_id}
            date={schedule.date}
            start_tm={schedule.start_tm}
            end_tm={schedule.end_tm}
            is_booked={schedule.is_booked}
            setModalData={setModalData}
            bookedBy={schedule.bookedBy}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        show={modalData.id !== null}
        size="md"
        onClose={() => setModalData({ id: null })}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to book this schedule?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => modalData.id && handleBook(modalData.id)}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => setModalData({ id: null })}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ScheduleList;
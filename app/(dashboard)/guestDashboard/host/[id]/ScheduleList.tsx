"use client";

import ScheduleBox from "@/app/(components)/ScheduleBox";
import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

function ScheduleList({ schedules }: any) {
  const [modalData, setModalData] = useState<{ id: number | null }>({
    id: null,
  });

  const handleBook = (slot_id: number) => {
    console.log(slot_id);
    setModalData({ id: null });
  };

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-5">
        {schedules.map((schedules: any) => (
          <ScheduleBox
            key={schedules.slot_id}
            user_id={schedules.user_id}
            slot_id={schedules.slot_id}
            date={schedules.date}
            start_tm={schedules.start_tm}
            end_tm={schedules.end_tm}
            is_booked={schedules.is_booked}
            setModalData={setModalData}
          />
        ))}
      </div>

      {/*Modal */}
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
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setModalData({ id: null })}>
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

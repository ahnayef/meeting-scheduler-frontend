import ScheduleBox from "@/app/(components)/ScheduleBox";
import React from "react";

function ScheduleList({ schedules }: any) {
  return (
    <div className="grid lg:grid-cols-5 gap-5">
      {schedules.map((schedules: any) => (
        <ScheduleBox
          key={schedules.slot_id}
          slot_id={schedules.slot_id}
          date={schedules.date}
          start_tm={schedules.start_tm}
          end_tm={schedules.end_tm}
          is_booked={schedules.is_booked}
        />
      ))}
    </div>
  );
}

export default ScheduleList;

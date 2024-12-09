"use client";

import { request } from "@/utils/request";
import { Button, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialForm = {
  start_date: "",
  end_date: "",
  start_tm: "",
  end_tm: "",
};

function addSchedule() {

    const router = useRouter();

  const [formState, setFormState] = useState(initialForm);

  const handleChange = (e: any) => {
    let value = e.target.value;
    if (e.target.type === "date" || e.target.type === "time") {
      const date = new Date(e.target.value);
      if (!isNaN(date.getTime())) {
        value = new Date(date.getTime() + date.getTimezoneOffset() * 60000)
          .toISOString()
          .slice(0, e.target.type === "date" ? 10 : 16);
      }
    }
    setFormState({
      ...formState,
      [e.target.id]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const startDate = new Date(formState.start_date);
    const endDate = new Date(formState.end_date);
    const startTime = new Date(`1970-01-01T${formState.start_tm}:00Z`);
    const endTime = new Date(`1970-01-01T${formState.end_tm}:00Z`);
    const duration =
      (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);

    if (endDate < startDate) {
      toast.error("End date cannot be earlier than start date.");
      return;
    }

    if (duration > 2) {
      toast.error("Meeting duration cannot exceed 2 hours.");
      return;
    }

    const res = request.post("/slots/create", formState);

    res
      .then((res) => {
        toast.success(res as any);
        router.push("/hostDashboard");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data || error.message);
      });
  };

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <form className="flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
        <h1 className="w-full text-center text-2xl font-bold lg:text-4xl">
          Create Schedule
        </h1>

        <div className="w-full">
          <Label htmlFor="start_date" value="Start Date" />
          <TextInput
            id="start_date"
            type="date"
            required
            shadow
            onChange={handleChange}
          />

          <Label htmlFor="end_date" value="End Date" />

          <TextInput
            id="end_date"
            type="date"
            required
            shadow
            onChange={handleChange}
          />

          <Label htmlFor="start_tm" value="Start Time" />
          <TextInput
            id="start_tm"
            type="time"
            required
            shadow
            onChange={handleChange}
          />

          <Label htmlFor="end_tm" value="End Time" />

          <TextInput
            id="end_tm"
            type="time"
            required
            shadow
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Create Schedule</Button>
      </form>
    </main>
  );
}

export default addSchedule;

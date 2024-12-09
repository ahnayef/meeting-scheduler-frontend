"use client";

import { request } from "@/utils/request";
import { Button, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialForm = {
  date: "",
  start_tm: "",
  end_tm: "",
};

function addSchedule({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();

  const [formState, setFormState] = useState(initialForm);

  const { id } = use(params);

  const getSlot = () => {
    const res = request.get("/slots/getone/" + id);
    res.then((res) => {
      const slot = res.data;
      console.log(slot);
      setFormState({
        start_tm: slot.start_tm,
        end_tm: slot.end_tm,
        date: new Date(slot.date).toISOString().slice(0, 10),
      });
    });
  };

  useEffect(() => {
    getSlot();
  }, []);

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
    const startTime = new Date(`1970-01-01T${formState.start_tm}:00Z`);
    const endTime = new Date(`1970-01-01T${formState.end_tm}:00Z`);
    const duration =
      (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);

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
          <TextInput
            id="date"
            type="date"
            value={formState.date || ""}
            required
            shadow
            onChange={handleChange}
          />

          <Label htmlFor="start_tm" value="Start Time" />
          <TextInput
            id="start_tm"
            type="time"
            value={formState.start_tm || ""}
            shadow
            onChange={handleChange}
          />

          <Label htmlFor="end_tm" value="End Time" />

          <TextInput
            id="end_tm"
            type="time"
            value={formState.start_tm || ""}
            required
            shadow
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Update Schedule</Button>
      </form>
    </main>
  );
}

export default addSchedule;

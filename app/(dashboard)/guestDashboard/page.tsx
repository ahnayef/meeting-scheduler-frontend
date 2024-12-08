import React from "react";
import HostList from "./HostList";

function GuestDashboard() {
  const hosts = [
    {
      id: 1,
      name: "Host1",
      email: "demo1@gmail.com",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Host2",
      email: "demo2@gmail.com",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Host3",
      email: "demo3@gmail.com",
      photo: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-10">
      <h2 className="text-2xl font-semibold">Hosts</h2>
      <HostList hosts={hosts} />
    </div>
  );
}

export default GuestDashboard;

"use client"

import React, { useEffect } from "react";
import HostList from "./HostList";
import { request } from "@/utils/request";

function GuestDashboard() {

  const [hosts, setHosts] = React.useState([]);

  useEffect(() => {
    const res = request.get("/users/getusers?role=Host");
    res.then((res) => {
      setHosts(res.data);
    });
  }, []);


  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-10">
      <h2 className="text-2xl font-semibold">Hosts</h2>
      <HostList hosts={hosts} />
    </div>
  );
}

export default GuestDashboard;

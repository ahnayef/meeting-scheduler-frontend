import HostBox from "@/app/(components)/HostBox";
import React from "react";

function HostList({ hosts }: any) {
  console.log(hosts);
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full justify-center items-center h-full">
      {hosts.map((host: any) => (
       <HostBox key={host.user_id} user_id={host.user_id} name={host.name} email={host.email} photo={host.photo}/>
      ))}
    </div>
  )
}

export default HostList;

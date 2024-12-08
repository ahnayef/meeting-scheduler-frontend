import HostBox from "@/app/(components)/HostBox";
import React from "react";

function HostList({ hosts }: any) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full justify-center items-center h-full">
      {hosts.map((host: any) => (
       <HostBox key={host.id} id={host.id} name={host.name} email={host.email} photo={host.photo}/>
      ))}
    </div>
  )
}

export default HostList;

import Link from 'next/link';
import React from 'react'

export default function ScheduleBox({
   slot_id,
    date,
    start_tm,
    end_tm,
    is_booked,
  }: {
    slot_id: number;
    date: string;
    start_tm: string;
    end_tm: string;
    is_booked: boolean;
  }) {
    return (
      <div className="shadow-md p-10 border">
        <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {date}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                {start_tm} - {end_tm}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                {is_booked ? 'Booked' : 'Available'}
                </span>
            
 
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Link
              href={`/host/${slot_id}`}
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              View Schedules
            </Link>
          </div>
        </div>
      </div>
    );
  }
  

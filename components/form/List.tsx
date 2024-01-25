import React from "react";

function List({ doctors }: any) {
  return (
    <ul className="bg-blue-100 rounded-md shadow-md ">
      {doctors?.map((doctor: any, index: number) => (
        <li
          key={index}
          className="flex items-center justify-between p-2 border-b border-blue-200 last:border-b-0"
        >
          <div  className="flex justify-between  w-[300px]">
            <span className="text-blue-700 font-semibold">{doctor.name}</span>
            <p className="text-gray-500">{doctor.expertise}</p>
            <p className="text-gray-500">{doctor.city}</p>
          </div>
          {/* Add more details or icons if needed */}
        </li>
      ))}
    </ul>
  );
}

export default List;

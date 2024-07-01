import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const SortButtons = ({
  handleSort,
}: {
  handleSort: (column: string) => void;
}) => (
  <div className="flex items-center justify-evenly gap-2">
    <button
      className="border-gray-800 border rounded-[5px] flex items-center justify-between shadow-md px-3 py-1 text-sm"
      onClick={() => handleSort("postId")}
    >
      Sort Post ID 
      <div className="flex flex-col gap-0 ms-2">
        <IoIosArrowUp />
        <IoIosArrowDown />
      </div>
    </button>
    <button
      className="border-gray-800 border rounded-[5px] flex items-center justify-between shadow-md px-3 py-1 text-sm"
      onClick={() => handleSort("name")}
    >
      Sort Name
      <div className="flex flex-col gap-0 ms-2">
        <IoIosArrowUp />
        <IoIosArrowDown />
      </div>
    </button>
    <button
      className="border-gray-800 border rounded-[5px] flex items-center justify-between shadow-md px-3 py-1 text-sm"
      onClick={() => handleSort("email")}
    >
      Sort Email
      <div className="flex flex-col gap-0 ms-2">
        <IoIosArrowUp />
        <IoIosArrowDown />
      </div>
    </button>
  </div>
);

export default SortButtons;

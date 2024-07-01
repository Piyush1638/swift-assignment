import React from "react";

const SortButtons = ({
  handleSort,
}: {
  handleSort: (column: string) => void;
}) => (
  <div className="flex items-center justify-evenly gap-2">
    <button
      className="border-gray-800 border rounded-[5px] shadow-md px-3 py-1 text-sm"
      onClick={() => handleSort("postId")}
    >
      Sort Post ID
    </button>
    <button
      className="border-gray-800 border rounded-[5px] shadow-md px-3 py-1 text-sm"
      onClick={() => handleSort("name")}
    >
      Sort Name
    </button>
    <button
      className="border-gray-800 border rounded-[5px] shadow-md px-3 py-1 text-sm"
      onClick={() => handleSort("email")}
    >
      Sort Email
    </button>
  </div>
);

export default SortButtons;

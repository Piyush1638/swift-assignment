import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = ({
  searchTerm,
  handleSearchChange,
}: {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="md:w-2/5 w-full rounded-xl border-t border-gray-400 shadow-md flex items-center gap-2 px-3 py-2">
    <CiSearch className="text-3xl text-[#9ba0a5]" />
    <input
      type="text"
      className="w-full outline-none"
      placeholder="Search name, email, content"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  </div>
);

export default SearchBox;

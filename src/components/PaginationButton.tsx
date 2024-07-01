import React from "react";

const PaginationButton = ({
  page,
  currentPage,
  onPageChange,
}: {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => (
  <p
    className={`px-2 text-sm rounded-[5px] border-2 cursor-pointer ${
      page === currentPage ? "border-blue-950" : "border-gray-300"
    }`}
    onClick={() => onPageChange(page)}
  >
    {page}
  </p>
);

export default PaginationButton;

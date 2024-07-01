import React from "react";
import { TableCell } from "@/components/ui/table";

// Helper function to truncate text to 50 characters
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const TableDataCell = ({
  postId,
  name,
  email,
  comment,
}: {
  postId: number;
  name: string;
  email: string;
  comment: string;
}) => (
  <>
    <TableCell className="text-[#23375a]">{postId}</TableCell>
    <TableCell className="text-[#4b5a78] text-nowrap">
      {truncateText(name, 50)}
    </TableCell>
    <TableCell className="text-[#4b5a78]">{truncateText(email, 50)}</TableCell>
    <TableCell className="text-[#4b5a78] text-nowrap">
      {truncateText(comment, 50)}
    </TableCell>
  </>
);

export default TableDataCell;

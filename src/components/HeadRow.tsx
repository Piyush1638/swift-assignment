import React from "react";
import { TableHead } from "@/components/ui/table";

const HeadRow = ({ label }: { label: string }) => (
  <TableHead className="text-[#23375a] font-bold text-nowrap">{label}</TableHead>
);

export default HeadRow;

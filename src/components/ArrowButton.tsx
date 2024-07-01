import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ArrowButton = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) => (
  <button onClick={onClick} disabled={disabled}>
    {direction === "prev" ? (
      <IoIosArrowBack className="text-lg" />
    ) : (
      <IoIosArrowForward className="text-lg" />
    )}
  </button>
);

export default ArrowButton;

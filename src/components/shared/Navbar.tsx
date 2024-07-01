"use client";
import React, { useEffect, useState } from "react";
import { getInitials } from "@/lib/getInitials";
import { UserDataType } from "@/lib/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { fetchUserData } from "@/lib/dataFetchers/fetchUserData";



const Navbar: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []); 



  return (
    <header className="bg-[#282846] fixed top-0 w-full lg:px-20 sm:px-10 px-3 z-10">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="flex items-center skew-y-3">
            <div className="flex items-center justify-center w-5 h-5 p-4 bg-[#4baa5a] transform text-white font-semibold">S</div>
            <div className="w-0 h-0 border-t-[33px] border-t-transparent border-l-[10px] border-l-[#4baa5a]"></div>
          </div>
          <span className="font-bold text-white">WIFT</span>
        </div>
        <div className="flex items-center sm:gap-4 gap-2 cursor-pointer" onClick={()=> router.push("/profile")}>
          <div className="bg-white p-2 rounded-full">
            <p className="text-[#23375a] font-semibold sm:text-base text-sm">
              {userData ? getInitials(userData.name) : ""}
            </p>
          </div>
          <p className="text-white text-sm">{userData?.name}</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

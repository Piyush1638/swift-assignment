"use client";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { getInitials } from "@/lib/getInitials";
import { useRouter } from 'next/navigation';
import { UserDataType } from "@/lib/interfaces/interfaces";



const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleBackClick = () => {
    router.push('/');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 xl:px-24 lg:px-20 md:px-16 px-5">
      <div className="w-full flex flex-col  ">
        <div className="flex items-center justify-start gap-3">
          <FaLongArrowAltLeft className="text-3xl cursor-pointer" onClick={handleBackClick} />
          <h1 className="text-[#23375a] sm:text-2xl text-xl font-semibold">
            Welcome, {userData?.name}
          </h1>
        </div>

        {userData && (
          <div className="w-full flex flex-col mt-8 p-10 shadow-md border-t-4 border-[#f5f5f5]">
            <div className="flex items-center gap-3">
              <div className="p-10 flex items-center justify-center text-2xl font-semibold h-10 w-10 rounded-full bg-[#f5f5f5]">
                {userData ? getInitials(userData.name) : ""}
              </div>
              <div>
                <h3 className="text-[#23375a] font-bold text-xl">{userData?.name}</h3>
                <h4 className="text-[#9ba5b1]">{userData?.email}</h4>
              </div>
            </div>

            {/* user Details */}

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 my-10">
              <DetailsWithLabel label="User ID" detail={userData?.id} />
              <DetailsWithLabel label="Name" detail={userData?.name} />
              <DetailsWithLabel label="Email Id" detail={userData?.email} />
              <DetailsWithLabel label="Address" detail={userData?.address?.street + ", " + userData?.address?.suite + ", " + userData?.address?.city + ", " + userData?.address?.zipcode} />
              <DetailsWithLabel label="Phone" detail={userData?.phone} />
              {/* <DetailsWithLabel label="Street" detail={userData?.address.street} />
              <DetailsWithLabel label="Suite" detail={userData?.address.suite} />
              <DetailsWithLabel label="City" detail={userData?.address.city} />
              <DetailsWithLabel label="Zipcode" detail={userData?.address.zipcode} />
              <DetailsWithLabel label="Company" detail={userData?.company.name} />
              <DetailsWithLabel label="Catch Phrase" detail={userData?.company.catchPhrase} />
              <DetailsWithLabel label="BS" detail={userData?.company.bs} /> */}
            </div>

          </div>
        )}
      </div>
    </main>
  );
};

export default Profile;

const DetailsWithLabel = ({ label, detail }: { label: string; detail: string; }) => (
  <div className="flex flex-col  gap-2 w-full">
    <p className="text-[#505f78]">{label}</p>
    <div className="bg-[#f5f5f5] px-3 py-4 rounded-xl">
      <p className="text-[#23375a]">{detail}</p>
    </div>
  </div>
);

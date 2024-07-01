"use client";
import DataTable from "@/components/DataTable";
import React from "react";


const Dashboard = () => {
  return <main className="flex min-h-screen flex-col items-center justify-between py-24 xl:px-24 lg:px-20 md:px-16 px-5">
    <DataTable/>
  </main>;
};

export default Dashboard;

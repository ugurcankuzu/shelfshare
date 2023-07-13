"use client";

import Navbar from "@/_components/Navbar";
import CreateShelfButton from "@/_components/dashboardPageComponents/createShelfButton";
import MyShelves from "@/_components/dashboardPageComponents/myShelves";
import getUserInfo from "@/_lib/getUserInfo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function DashboardPage() {
  const { push } = useRouter();
  const [userInfo, setUserInfo] = useState({
    _id: "",
    email: "",
    shelves: []
  });
  const handleUserInfo = (data: any) => {
    setUserInfo(data);
  };
  useEffect(() => {
    const getInfo = async () => {
      await getUserInfo(push, handleUserInfo);
    };
    getInfo();
  }, []);
  return (
    <>
      {userInfo && (
        <>
          <Navbar />
          <MyShelves shelves={userInfo.shelves} push={push}/>
          <CreateShelfButton push={push}/>
        </>
      )}
    </>
  );
}

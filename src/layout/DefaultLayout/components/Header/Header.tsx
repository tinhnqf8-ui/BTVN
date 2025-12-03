import React, { useState } from "react";
import AppLogo from "./../components/AppLogo";
import SearchForm from "./components/SearchForm";
import MyCourses from "./components/MyCourses";
import Notification from "./components/Notification";
import UserMenu from "./components/UserMenu";
function Header() {
  type OpenBoxType = "Notification" | "UserMenu" | "MyCourses" | "SearchForm" | null;
  const [openModalHeader, setopenModalHeader] = useState<OpenBoxType>(null);
  console.log("okokof")
  return (
    <div className="px-7 py-3 border-b flex items-center justify-between ">
      <AppLogo />
      <SearchForm
        openModal={openModalHeader === "SearchForm"}
        setOpenModalHeader={() => {
          setopenModalHeader(openModalHeader === "SearchForm" ? null : "SearchForm");
        }}
      />
      <div className="flex items-center gap-6">
        <MyCourses
          openModal={openModalHeader === "MyCourses"}
          setOpenModalHeader={() => {
            setopenModalHeader(openModalHeader === "MyCourses" ? null : "MyCourses");
          }}
        />
        <Notification
          openModal={openModalHeader === "Notification"}
          setOpenModalHeader={() => {
            setopenModalHeader(openModalHeader === "Notification" ? null : "Notification");
          }}
        />
        <UserMenu
          openModal={openModalHeader === "UserMenu"}
          setOpenModalHeader={() => {
            setopenModalHeader(openModalHeader === "UserMenu" ? null : "UserMenu");
          }}
        />
      </div>
    </div>
  );
}

export default Header;

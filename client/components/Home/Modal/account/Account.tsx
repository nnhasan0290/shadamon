import Dashboard from "./Dashboard";
import Profile from "./Profile/Profile";
import { useState } from "react";

export default function () {
  const [pageState, setPageState] = useState("DASHBOARD");
  return (
    <div className="w-full bg-body-bg">
      <div className="flex self-start justify-start gap-2 p-2 bg-white  rounded-md align-start text-[13.5px] border-b shadow-lg">
        <h2
          className={`px-2 cursor-pointer  py-1 font-semibold rounded-md transition-all duration-300  ${
            pageState === "DASHBOARD"
              ? "bg-common-color text-white"
              : "bg-account-gray"
          }`}
          onClick={() => {
            setPageState("DASHBOARD");
          }}
        >
          Dashboard
        </h2>
        <h2
          className={`px-2 py-1 transition-all duration-300 font-semibold rounded-md  cursor-pointer ${
            pageState === "PROFILE"
              ? "bg-common-color text-white"
              : "bg-account-gray"
          }`}
          onClick={() => setPageState("PROFILE")}
        >
          Profile
        </h2>
        <h2 className="px-2 py-1 font-semibold rounded-md bg-account-gray">
          Settings
        </h2>
      </div>
      {pageState === "DASHBOARD" && <Dashboard />}
      {pageState === "PROFILE" && <Profile />}
    </div>
  );
}

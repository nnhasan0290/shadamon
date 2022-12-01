import Dashboard from "./Dashboard";
import Profile from "./Profile";

export default function () {
  return (
    <div className="w-full bg-body-bg">
      <div className="flex self-start justify-start gap-2 p-2 bg-white  rounded-md align-start text-[13.5px] border-b shadow-lg">
        <h2 className="px-2 py-1 font-semibold rounded-md bg-common-color">
          Dashboard
        </h2>
        <h2 className="px-2 py-1 font-semibold rounded-md bg-account-gray">
          Profile
        </h2>
        <h2 className="px-2 py-1 font-semibold rounded-md bg-account-gray">
          Settings
        </h2>
      </div>
      <Profile />
    </div>
  );
}

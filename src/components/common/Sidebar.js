import React from "react";
import DashboardIcon from "../../assets/sidebarIcons/dashboard_icon.png";
import TransactionsIcon from "../../assets/sidebarIcons/transaction_icon.png";
import SchedulesIcon from "../../assets/sidebarIcons/schedule_icon.png";
import UsersIcon from "../../assets/sidebarIcons/user_icon.png";
import SettingsIcon from "../../assets/sidebarIcons/setting_icon.png";



const Sidebar = () => {
  return (
    <div className="w-[20rem] h-[100vh] zsM:w-full sticky top-0 overflow-hidden transition duration-500 flex justify-center items-center mdM:p-0 p-8 ">
      <div className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 w-full h-full mdM:rounded-none rounded-2xl p-10 py-12 flex flex-col justify-between">
        <ul className="flex flex-col gap-y-7">
            <li className="text-4xl font-bold text-white mb-5"> Board.</li>
            <li className="text-white font-bold flex gap-5 items-center"> <img src={DashboardIcon} />  Dashboard</li>
            <li className="text-white flex gap-5 items-center">  <img src={TransactionsIcon} /> Transactions</li>
            <li className="text-white flex gap-5 items-center">  <img src={SchedulesIcon} /> Schedules</li>
            <li className="text-white flex gap-5 items-center">  <img src={UsersIcon} /> Users</li>
            <li className="text-white flex gap-5 items-center">  <img src={SettingsIcon} /> Settings</li>
        </ul>
        <ul className="flex flex-col gap-y-4">
          <li className="text-white text-sm">Help</li>
          <li className="text-white text-sm">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

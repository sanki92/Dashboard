import React from 'react'
import stat1 from "../assets/dashboardIcons/Vector.png";
import stat2 from "../assets/dashboardIcons/Vector-1.png";
import stat3 from "../assets/dashboardIcons/Vector-2.png";
import stat4 from "../assets/dashboardIcons/Vector-3.png";

const AllStat = ({data}) => {
  return (
    <div className="grid grid-cols-4 mdM:grid-cols-2 mdM:gap-y-6 gap-x-6">
    <div className="bg-white p-4 rounded-xl border-2 border-[#E0E0E0] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.10)]">
      <div className="bg-[#7FCD93] w-8 h-8 flex justify-center items-center rounded-full ">
        <img src={stat1} className="" />
      </div>
      <p className="text-xs font-lato my-1">Total Revenues</p>
      <h4 className="font-bold flex items-center justify-between font-opensans truncate">
        {data?.dashboard?.totalRevenue}{" "}
        <span className="text-[11px] font-semibold text-[#4AD15F] font-figtree bg-[#E9F9EB] py-[2px] px-[4px] rounded-xl">
          +{data?.dashboard?.revenueIncreasePercentage}%
        </span>
      </h4>
    </div>
    <div className="bg-white p-4 rounded-xl border-2 border-[#E0E0E0] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.10)]">
      <div className="bg-[#DEBF85] w-8 h-8 flex justify-center items-center rounded-full ">
        <img src={stat2} className="" />
      </div>
      <p className="text-xs font-lato my-1">Total Transactions</p>
      <h4 className="font-bold flex items-center justify-between font-opensans truncate">
      {data?.dashboard?.totalTransactions}{" "}
        <span className="text-[11px] font-semibold text-[#4AD15F] font-figtree bg-[#E9F9EB] py-[2px] px-[4px] rounded-xl">
        +{data?.dashboard?.transactionIncreasePercentage}%
        </span>
      </h4>
    </div>
    <div className="bg-white p-4 rounded-xl border-2 border-[#E0E0E0] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.10)]">
      <div className="bg-[#ECA4A4] w-8 h-8 flex justify-center items-center rounded-full ">
        <img src={stat3} className="" />
      </div>
      <p className="text-xs font-lato my-1">Total Likes</p>
      <h4 className="font-bold flex items-center justify-between font-opensans truncate">
      {data?.dashboard?.totalLikes}{" "}
        <span className="text-[11px] font-semibold text-[#4AD15F] font-figtree bg-[#E9F9EB] py-[2px] px-[4px] rounded-xl">
        +{data?.dashboard?.likesIncrease}%
        </span>
      </h4>
    </div>
    <div className="bg-white p-4 rounded-xl border-2 border-[#E0E0E0] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.10)]">
      <div className="bg-[#A9B0E5] w-8 h-8 flex justify-center items-center rounded-full ">
        <img src={stat4} className="" />
      </div>
      <p className="text-xs font-lato my-1">Total Users</p>
      <h4 className="font-bold flex items-center justify-between font-opensans truncate">
      {data?.dashboard?.totalUsers}{" "}
        <span className="text-[11px] font-semibold text-[#4AD15F] font-figtree bg-[#E9F9EB] py-[2px] px-[4px] rounded-xl">
        +{data?.dashboard?.usersIncreasePercentage}%
        </span>
      </h4>
    </div>
  </div>
  )
}

export default AllStat
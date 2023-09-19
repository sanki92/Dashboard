import React from "react";

const BarGraph = ({data}) => {
  const graphMap = {
    0: "0px",
    100: "34.52px",
    200: "69.04px",
    300: "103.56px",
    400: "138.08px",
    500: "172.6px",
  };

  // h-[${graphMap[item?.user]}]
  
  return (
    <div className="my-4  relative">
      <ul className="space-y-[14px]">
        <li className="flex items-center gap-2">
          <span className="w-8 text-[#858585] text-sm font-lato ">500</span>
          <hr className="flex-grow" />
        </li>
        <li className="flex items-center gap-2">
          <span className="w-8 text-[#858585] text-sm font-lato ">400</span>
          <hr className="flex-grow" />
        </li>
        <li className="flex items-center gap-2">
          <span className="w-8 text-[#858585] text-sm font-lato ">300</span>
          <hr className="flex-grow" />
        </li>
        <li className="flex items-center gap-2">
          <span className="w-8 text-[#858585] text-sm font-lato ">200</span>
          <hr className="flex-grow" />
        </li>
        <li className="flex items-center gap-2">
          <span className="w-8 text-[#858585] text-sm font-lato ">100</span>
          <hr className="flex-grow" />
        </li>
        <li className="flex items-center gap-2">
          <span className="w-8 text-[#858585] text-sm font-lato ">0</span>
          <hr className="flex-grow" />
        </li>
      </ul>
      <ul className="flex justify-evenly  absolute h-full w-[95%] right-0 top-0 z-30 ">
        {data?.dashboard?.activityData?.map((item,index) => {
          return (
            <li key={index} className="flex items-end justify-center relative mb-2 gap-x-2 mdM:gap-x-1">
              <span style={{'height':graphMap[item.user]}} className={`bg-[#98D89E] w-[2rem] mdM:w-[1.3rem] block rounded-sm`}>
              </span>
              <span style={{'height':graphMap[item.guest]}} className={`bg-[#EE8484] w-[2rem] mdM:w-[1.3rem] block rounded-sm `}></span>
              <span className="absolute -bottom-8 text-sm text-[#858585] font-opensans">
                week {index+1}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BarGraph;

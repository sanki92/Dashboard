import React, { useEffect, useState } from "react";
import PieChart from "./OtherComponents/PieChart";

const TopProduct = ({ data }) => {
  const [pieChartData, setPieChartData] = useState([]);

  const addColorsToProducts = (data) => {
    const colors = ["#98D89E", "#EE8484", "#F6DC7D"];
    const productsWithColors = data?.dashboard?.productDictionary?.map(
      (product, index) => ({
        ...product,
        color: colors[index],
      })
    );
    return productsWithColors;
  };

  useEffect(() => {
    setPieChartData(addColorsToProducts(data));
  }, []);

  return (
    <div className="bg-white py-4 px-8 rounded-xl border-2 border-[#E0E0E0] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.10)]">
      <h1 className="text-lg font-bold flex justify-between items-center">
        Top products{" "}
        <span className="text-xs text-[#858585] font-normal">
          May - June 2021
        </span>
      </h1>
      <div className="grid grid-cols-2 lgM:grid-cols-1">
        <PieChart data={pieChartData} size={160} thickness={20} />

        <ul className=" flex flex-col justify-around lgM:w-fit mdM:flex-row mdM:justify-between mdM:w-full xsM:flex-col lgM:ml-auto ">
          {pieChartData?.map((data) => {
            return (
              <li className="grid grid-cols-6">
                <div className="col-span-1 flex justify-center">
                  <span style={{background:data.color}} className={`w-3 h-3 block rounded-full`}></span>
                </div>
                <div className="col-span-5">
                  <h1 className="text-sm font-bold ">{data.name}</h1>
                  <span className="text-xs font-lato text-[#858585]">{data.value}%</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TopProduct;

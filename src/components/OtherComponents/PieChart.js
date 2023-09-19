import React from "react";

function PieChart({ data, size, thickness }) {
  const pxSize = size;
  const pxHalf = Math.round(size / 2);
  const pxRadius = Math.round(size / 2) - thickness / 2;
  const pxLength = Math.ceil(Math.PI * 2 * pxRadius);
  const totalValue = data.reduce((accum, item) => accum + item.value, 0);
  let rotateStart = 0;
  let sum = 0;

  return (
    <div className="flex items-center justify-start py-4 lgM:justify-center">

    
    <svg
      aria-hidden={true}
      className="pie-chart"
      fill="none"
      style={{
        width: pxSize,
        height: pxSize,
      }}
    >
      {data?.map((segment, index) => {
        sum += segment.value;
        const length = pxLength - Math.round((segment.value * pxLength) / totalValue);
        const percentage = Math.round((segment.value * 100) / totalValue);
        rotateStart = index === 0 ? -90 : (((360 / +totalValue) * (+sum - +segment.value)) - 90);

        return (
          <circle
            key={index}
            style={{
              strokeWidth: thickness,
              strokeDashoffset: length,
              strokeDasharray: pxLength,
              stroke: segment.color,
              transform: `rotate(${rotateStart}deg)`,
              transformOrigin: `${pxHalf}px ${pxHalf}px`,
            }}
            cx={pxHalf}
            cy={pxHalf}
            r={pxRadius}
          ></circle>
        );
      })}
    </svg>
    </div>
  );
}

export default PieChart;

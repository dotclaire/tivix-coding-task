import React from "react";

export const Forecast = ({ data }) => {
  console.log(data);
  return data ? (
    <div>
      <h1>Today's forecast for {data.city.name}</h1>
    </div>
  ) : null;
};

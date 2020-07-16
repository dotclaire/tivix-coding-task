import React from "react";
import { format } from "date-fns";

export const Forecast = ({ data }) => {
  const weatherList = data.list;

  const groupedForecasts = weatherList.reduce((groupedForecasts, day) => {
    const date = format(new Date(day["dt"] * 1000), "EEEE dd/MM");
    if (!groupedForecasts[date]) {
      groupedForecasts[date] = [];
    }
    groupedForecasts[date].push(day);
    return groupedForecasts;
  }, {});

  return data ? (
    <div className="flex flex-col p-6">
      <div className="flex justify-center">
        <h1 className="text-xl font-semibold">Forecast for {data.city.name}</h1>
      </div>
      <div className="">
        {Object.keys(groupedForecasts).map((el, i) => {
          return (
            <div className="p-5" key={i}>
              <h1 className="text-lg">{el}</h1>
              <div className="flex justify-between">
                {groupedForecasts[el].map((d, i) => (
                  <div className="" key={i}>
                    <h4>{d.dt_txt.split(" ")[1]}</h4>
                    <p className="inline-block">Temperature: </p>
                    <span className="inline-block">{d.main.temp}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

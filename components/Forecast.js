import { Carousel } from "react-responsive-carousel";
import React from "react";
import { format } from "date-fns";
import { getCelsius } from "../utils/getCelsius";

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
      <Carousel showThumbs={false}>
        {Object.keys(groupedForecasts).map((el, i) => {
          return (
            <div className="bg-primary p-6" key={i}>
              <h1 className="text-lg text-black">{el}</h1>
              <div className="flex flex-col lg:flex-row justify-between">
                {groupedForecasts[el].map((d, i) => (
                  <div key={i}>
                    <h4 className="text-black">{d.dt_txt.split(" ")[1]}</h4>
                    <span className="inline-block text-black">
                      {getCelsius(d.main.temp).toFixed(2)}
                      &#8451;
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  ) : null;
};

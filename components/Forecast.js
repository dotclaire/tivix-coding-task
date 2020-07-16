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
    <div>
      <h1>Forecast for {data.city.name}</h1>
      <div>
        {Object.keys(groupedForecasts).map(el => {
          return (
            <>
              <div>{el}</div>
              {groupedForecasts[el].map(time => (
                <div>
                  <p>{time.dt_txt.split(" ")[1]}</p>
                  <span>{time.main.temp}</span>
                </div>
              ))}
            </>
          );
        })}
      </div>
    </div>
  ) : null;
};

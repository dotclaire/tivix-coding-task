import React, { useEffect, useState } from "react";

import Head from "next/head";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "9b5596f8ec5036640bf15d987c734bcd";

      try {
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=London,UK&appid=${API_KEY}`
        );

        setData(result.data);
      } catch (error) {
        error.message;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data && (
        <div>
          <h1>{data.city.name}</h1>
          <h2>Temperature</h2>
          <p>Max: {data.list[0].main.temp_max}</p>
          <p>Min: {data.list[0].main.temp_min}</p>
        </div>
      )}
    </div>
  );
}

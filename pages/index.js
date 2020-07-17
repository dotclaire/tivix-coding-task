import React, { useState } from "react";

import { Forecast } from "../components/Forecast";
import Head from "next/head";
import { Header } from "../components/Header";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState();
  const [input, setInput] = useState();
  const [error, setError] = useState();

  const handleChange = event => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const API_KEY = "9b5596f8ec5036640bf15d987c734bcd";

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}`
      );

      setData(res.data);
      setError("");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div>
          <Header
            error={error}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          {data && <Forecast error={error} data={data} />}
        </div>
      </div>
    </div>
  );
}

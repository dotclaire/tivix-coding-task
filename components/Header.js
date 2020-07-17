import { Form } from "./Form";
import React from "react";

export const Header = ({ error, handleSubmit, handleChange, data }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center py-6">
        <h1 className="text-3xl">Weather App</h1>
        <img src="/weather-logo.svg" />
        <h3 className="text-xl">
          Find a 5 day / 3 hour forecast for the city you want.
        </h3>
      </div>
      <Form
        error={error}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
      />
    </div>
  );
};

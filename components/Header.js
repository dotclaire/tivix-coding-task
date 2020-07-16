import { Form } from "./Form";
import React from "react";

export const Header = ({ handleSubmit, handleChange, data }) => {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      <h1 className="text-3xl">Weather App</h1>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
      />
    </div>
  );
};

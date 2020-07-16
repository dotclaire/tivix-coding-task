import React from "react";

export const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="shadow appearance-none border rounded py-2 px-3 mx-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="city"
        placeholder="i.e. London"
        onChange={handleChange}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Get Weather
      </button>
    </form>
  );
};

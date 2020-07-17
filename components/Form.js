import React from "react";

export const Form = ({ error, handleSubmit, handleChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded py-2 px-3 mx-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="city"
          placeholder="i.e. London"
          onChange={handleChange}
        />
        <button className="bg-secondary focus:outline-none hover:bg-hover text-white font-bold py-2 px-4 rounded-full">
          Get Forecasts
        </button>
      </form>
      {error && (
        <p className="p-5 text-red-600">Please enter a valid city name.</p>
      )}
    </div>
  );
};

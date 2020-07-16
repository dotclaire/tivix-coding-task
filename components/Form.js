import React from "react";

export const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="City..."
        onChange={handleChange}
      />
      <button>Get Weather</button>
    </form>
  );
};

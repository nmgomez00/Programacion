import React, { useId } from "react";

export default function Control({ register, type, name, error, label }) {
  const id = useId();
  return (
    <div className="control">
      <label htmlFor={name}>{label}:</label>
      <input type={type} id={id} {...register(name)} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

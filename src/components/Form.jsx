import React, { useState } from "react";

function Form({ addColours }) {
  const [color, setColor] = useState("#315c72");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColours(color);
  };
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          //   placeholder="#315c72"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          placeholder="#315c72"
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;

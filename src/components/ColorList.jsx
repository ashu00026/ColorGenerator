import React from "react";
import SingleColor from "./SingleColor";

function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor index={index} color={color} key={index} />;
      })}
    </section>
  );
}

export default ColorList;

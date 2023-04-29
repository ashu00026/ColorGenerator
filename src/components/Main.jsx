import React, { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { toast, ToastContainer } from "react-toastify";

function Main() {
  const [colours, setColours] = useState(new Values("#f15025").all(10));
  const addColours = (color) => {
    try {
      setColours(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log(colours);

  //   console.log(newColors);
  return (
    <div>
      <ToastContainer position="top-center" />
      <Form addColours={addColours} />
      <ColorList colors={colours} />
    </div>
  );
}

export default Main;

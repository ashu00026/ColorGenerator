import React from "react";
import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  console.log(index);
  const { hex, weight } = color;
  const saveToClip = async () => {
    if (navigator) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("coppied successfully to clipBoard");
      } catch (error) {
        toast.error("failed to copy");
      }
    } else {
      toast.error("clipoard access denied");
    }
  };
  return (
    <article
      onClick={saveToClip}
      style={{ background: `#${hex}` }}
      className={index > 10 ? "color color-light" : "color"}
    >
      <p className="percent-value">{`#${hex}`}</p>
      <p className="color-value">{weight}% </p>
    </article>
  );
}

export default SingleColor;

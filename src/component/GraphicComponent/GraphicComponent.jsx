import React from "react";

const accentColor = [{ accentColor: "#FF751D" }, { accentColor: "#FFDAC0" }];
const random = (accentColor) =>
  accentColor[Math.round(1 * Math.random())].accentColor;

const GraphicComponent = ({ obj }) => {
  const data = Object.entries(obj).map(([name, value]) => ({
    name,
    value,
    color: random(accentColor),
  }));
  return <div></div>;
};

export default GraphicComponent;

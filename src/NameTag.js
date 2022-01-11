import React from "react";

let textSize = "";

const NameTag = (props) => {
  const deleteByIndex = () => props.removeName(props.index);
  props.name.length > 20 ? (textSize = "20px") : props.name.length > 15 ? (textSize = "30px") : props.name.length > 10 ? (textSize = "40px"): (textSize = "60px");
  return (
    <div className="name-tag">
      <h3 className="title">HELLO</h3>
      <p className="subtitle">my name is</p>
      <h2 className="name" style={{ fontSize: textSize }}>
        {props.name}
      </h2>
      <span onClick={deleteByIndex} className="name-tag__delete">
        x
      </span>
    </div>
  );
};

export default NameTag;

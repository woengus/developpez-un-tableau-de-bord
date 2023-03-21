import React from "react";

const Counter = (props) => {
  return (
    <div>
      <div className={props.name}>
        <img src={props.src} alt={props.alt} className={props.class} />
        <div className="name-weight-flex">
          <span className="weight"> {props.weight}</span>
          <span className="weight-name">{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;

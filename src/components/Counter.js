import React from "react";
import PropType from "prop-types";

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

Counter.propType = {
  src: PropType.string,
  alt: PropType.string,
  class: PropType.string,
  name: PropType.string,
  weight: PropType.number,
};
export default Counter;

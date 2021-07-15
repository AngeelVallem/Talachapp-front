import React from "react";

export default function CustomInput(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.id} className="textlabl">
        {props.id}
      </label>
      <input
        type={props.type ? props.type : "text"}
        className={`form-control inputStyle ${props.className}`}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.callback(event.target.value)}
      />
    </React.Fragment>
  );
}

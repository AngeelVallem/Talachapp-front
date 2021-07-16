import React from "react";

export default function CustomInput(props) {
  return (
    <React.Fragment>
      <input
        type={props.type ? props.type : "text"}
        className={`form-control inputStyle2 ${props.className}`}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.callback(event.target.value)}
      />
    </React.Fragment>
  );
}

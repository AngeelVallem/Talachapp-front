import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";


const CustomButton = styled.button`
  ${({ color }) =>
    !color ? " background-color : peru;" : ` background-color : ${color};`}
`;

export default function Button(props) {
  if (props.link) {
    return (
        <Link to={`/${props.route}`}>
          <CustomButton
            {...props}
            className={`btn ${props.className}`}
            onClick={props.onClick}
          >
            {props.text}
          </CustomButton>
        </Link>
    );
  }

  return (
    <CustomButton
      {...props}
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </CustomButton>
  );
}

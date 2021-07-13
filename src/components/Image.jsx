import React from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";

const CustomImage = styled.img`
  ${({ size }) =>
    !size
      ? `width : 50px;
  height : 50px;`
      : `width : ${size};
  height : ${size};`}
  ${({circle}) => circle && `border-radius : 3rem` }
`;

export default function Image(props) {
  
  const validRoute = !props.route ? '/' : `/${props.route}`



  if (props.link) {
    return (
        <Link to={validRoute}>
        <picture>
          <CustomImage {...props} />
        </picture>
      </Link>
    );
  }

  return (
    <picture>
      <CustomImage {...props}/>
    </picture>
  );
}



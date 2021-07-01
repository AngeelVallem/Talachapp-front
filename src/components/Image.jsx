import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const CustomImage = styled.img`
  ${({ size }) =>
    !size
      ? `width : 50px;
  height : 50px;`
      : `width : ${size};
  height : ${size};`}
`;

export default function Image(props) {
  if (props.link) {
    return (
      <Router>
        <Link to={`/${props.route}`}>
        <picture>
          <CustomImage {...props} />
        </picture>
      </Link>
      </Router>
    );
  }

  return (
    <picture>
      <CustomImage {...props}/>
    </picture>
  );
}

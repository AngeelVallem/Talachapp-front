import React from "react";
import {Link} from "react-router-dom";

import '../styles/app.scss'


export default function Linkk(props) {
  return (
      <Link className={`link ${props.className}`} to={`/${props.route}`}>{props.text}</Link>
  );
}

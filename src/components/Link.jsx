import React from "react";
import { BrowserRouter as Router,Link} from "react-router-dom";

import '../styles/app.scss'


export default function Linkk(props) {
  return (
    <Router>
      <Link className={`link ${props.className}`} to={`/${props.route}`}>{props.text}</Link>
    </Router>
  );
}

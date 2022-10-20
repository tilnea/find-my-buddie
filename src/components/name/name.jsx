import React from "react";
import { Link } from "react-router-dom";

import classnames from "classnames";
import styles from "./name.module.css";

const Name = ({ onChange }) => {
  return (
    <div>
      <div>Please enter your name</div>
      <input onChange={onChange}></input>
      <Link to={`/welcome`} key={`next-button`}>
        GO!
      </Link>
    </div>
  );
};

export default Name;

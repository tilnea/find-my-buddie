import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import classnames from "classnames";
import styles from "./name.module.css";

const Name = ({ onChange, name }) => {
  let history = useNavigate();

  /* const goOn = () => {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        history("/welcome");
      });
  }; */

  return (
    <div>
      <div>Please enter your name</div>
      <input onChange={onChange}></input>
      {/* <button onClick={goOn}>GO!</button> */}
      <Link to={`/welcome`}>GO!</Link>
    </div>
  );
};

export default Name;

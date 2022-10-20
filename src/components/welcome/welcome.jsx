import React from "react";
import { Link } from "react-router-dom";
import team from "./team.jpg";

import classnames from "classnames";
import styles from "./welcome.module.css";

const Welcome = ({ name = "Jane" }) => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${team})` }}
    >
      <h1>Welcome {name} to Jane Doe</h1>
      <h2>Lets find you your best buddie in our team</h2>
      <Link to={`/game`} key={`next-button`}>
        GO!
      </Link>
    </div>
  );
};

export default Welcome;

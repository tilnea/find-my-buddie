import React from "react";
import { Link } from "react-router-dom";

import classnames from "classnames";
import styles from "./card.module.css";

const data = ["Alexandre", "Thomas", "Lucien"];

const Card = ({ topic, color }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      {topic}
    </div>
  );
};

export default Card;

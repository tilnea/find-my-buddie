import React from "react";
import { Link } from "react-router-dom";

import classnames from "classnames";
import styles from "./card.module.css";

const data = ["Alexandre", "Thomas", "Lucien"];

const Card = ({ topic }) => {
  return <div>{topic}</div>;
};

export default Card;

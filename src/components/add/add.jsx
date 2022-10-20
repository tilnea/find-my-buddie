import React, { useState } from "react";

import classnames from "classnames";
import styles from "./add.module.css";

const InputField = ({ onChange }) => {
  return <input onChange={onChange} />;
};

const Add = () => {
  return (
    <div>
      Add 3 opics about yourself
      <div>
        <InputField />
        <InputField />
        <InputField />
      </div>
    </div>
  );
};

export default Add;

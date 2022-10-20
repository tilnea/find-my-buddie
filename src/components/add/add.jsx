import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classnames from "classnames";
import styles from "./add.module.css";

const InputField = ({ onChange }) => {
  return (
    <div className={styles.input}>
      <input onChange={onChange} />
    </div>
  );
};

const Add = () => {
  const [newTopics, setNewTopics] = useState(["", "", ""]);
  let history = useNavigate();
  const addNewTopic = (e) => {
    //Handle change of topic
  };

  const goOn = () => {
    // Andre Send newTopics to database
    history("/leaderboard");
  };

  return (
    <div className={styles.container}>
      Add 3 topics about yourself that you would like to share with your
      colleagues
      <div className={styles.inputs}>
        <InputField onChange={(e) => addNewTopic(e, 0)} />
        <InputField onChange={(e) => addNewTopic(e, 1)} />
        <InputField onChange={(e) => addNewTopic(e, 2)} />
      </div>
      <button onClick={goOn}>Go</button>
    </div>
  );
};

export default Add;

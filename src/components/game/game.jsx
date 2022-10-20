import React, { useState } from "react";
import Card from "../card/card";
import { useNavigate } from "react-router-dom";

import classnames from "classnames";
import styles from "./game.module.css";

const topics = [
  "Tennis",
  "Australia",
  "Pasta",
  "Coffee",
  "DnD",
  "Rock music",
  "Dancing",
];

const Game = () => {
  let history = useNavigate();
  const [answers, setAnswers] = useState([]);
  const [topic, setTopic] = useState(0);

  const [showGame, setShowGame] = useState(true);

  const handleVote = (number) => {
    setAnswers([...answers, number]);
    if (topic === topics.length - 1) {
      setShowGame(false);
    }
    setTopic(topic + 1);
  };

  const goOn = () => {
    // Andre Send answers to database
    history.push("/add");
  };

  return (
    <div>
      Play game
      {showGame && (
        <div>
          <div>
            <Card topic={topics[topic]} />
          </div>
          <button onClick={() => handleVote(1)}>Yes</button>
          <button onClick={() => handleVote(0)}>NO</button>
        </div>
      )}
      {!showGame && (
        <div>
          We Now, lets add some interests of your own{" "}
          <button onClick={goOn}>Go</button>
        </div>
      )}
    </div>
  );
};

export default Game;

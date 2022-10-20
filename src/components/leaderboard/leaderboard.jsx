import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/card";
import { useNavigate, Link } from "react-router-dom";

import classnames from "classnames";
import styles from "./leaderboard.module.css";

/** Andre, lets add the leaderboard match here */

const leaderboard = [
  {
    id: 123,
    name: "Stina",
    commonTopics: ["Tennis", "Dancing", "Pasta"],
    match: 91,
  },
  { id: 133, name: "Bosse", commonTopics: ["Tennis", "Pasta"], match: 72 },
  { id: 124, name: "Anna", commonTopics: ["Dancing"], match: 24 },
];

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("hello");
    const url = "http://192.168.103.84:8000/api/users";
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);

  /* if (users.length === 0) {
    return <div>loading...</div>;
  } */

  return (
    <div className={styles.leaderboard}>
      <h1>Leaderboard</h1>
      {leaderboard.map((person, index) => {
        return index === 0 ? (
          <Link to={`/profile/${person.id}`} key={`profile`}>
            <div className={classnames(styles.item, styles.first)}>
              <div>
                1. {person.name} is your perfect JBuddie, some of the things you
                have in common is
                {person.commonTopics.map((topic, j) => (
                  <span>
                    {" "}
                    {topic}
                    {j !== person.commonTopics.length - 1 ? "," : ""}
                  </span>
                ))}{" "}
              </div>
              <div>{person.match}%</div>
            </div>
          </Link>
        ) : (
          <div className={styles.item}>
            <Link to={`/profile/${person.id}`}>
              <div>
                {index + 1}. {person.name} and you have
                {person.commonTopics.map((topic, j) => (
                  <span>
                    {" "}
                    {topic}
                    {j !== person.commonTopics.length - 1 ? "," : ""}
                  </span>
                ))}{" "}
                in common.
              </div>{" "}
              <div>You match {person.match}%</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboard;

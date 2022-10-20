import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/card";
import { useNavigate, useParams } from "react-router-dom";

import classnames from "classnames";
import styles from "./profile.module.css";

const Profile = () => {
  let params = useParams();
  let history = useNavigate();
  const [user, setUser] = useState(null);
  // Andre use params.id to fetch info about that user

  /* useEffect(() => {
    const url = "http://192.168.103.84:8000/api/users";
    axios.get(url).then((response) => {
      setUser(response.data);
    });
  }, []);

  if (user === null) {
    return <div>Loading...</div>;
  } */

  return (
    <div>
      <button onClick={() => history(-1)}>Back</button>
      <div>
        <div
          style={{
            backgroundImage:
              "url(https://tfnbk-bank.com/wp-content/uploads/2018/10/avatar.png)",
          }}
          className={styles.image}
        ></div>
        <div className={styles.name}>Stina</div>
        <div className={styles.quote}>I look forward to work with you!</div>
      </div>
    </div>
  );
};

export default Profile;

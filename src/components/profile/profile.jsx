import React, { useState } from "react";
import Card from "../card/card";
import { useNavigate, useParams } from "react-router-dom";

import classnames from "classnames";
import styles from "./profile.module.css";

const Profile = () => {
  let params = useParams();
  // Andre use params.id to fetch info about that user
  return <div>Profile</div>;
};

export default Profile;

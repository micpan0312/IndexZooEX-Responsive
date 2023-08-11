import React from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";

export default function ValueOne() {
  return (
    <div className={styles.box_container}>
      <div className={styles.left_box}>
        <div className={styles.left_box_title}>
          {`Unleash your\ntrading power\nwith ZooEx`}
        </div>
        <div className={styles.left_box_info}>
          {`ZooEx is a decentralized margin trading protocol that enables leverage trading for any tokens`}
        </div>
        <div style={{marginTop:'40px'}}>
          <Button className={styles.enter_but}>
            Enter Zoo
          </Button>
        </div>
      </div>
      <div className={styles.right_box}>
        <img
          src={"/oneRightValue.png"}
          alt=""
          className={styles.right_box_img}
        />
      </div>
    </div>
  );
}

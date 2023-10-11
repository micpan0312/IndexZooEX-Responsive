import React from "react";
import styles from "./index.module.css";
import { Button } from "@mui/material";

export default function Dashboard() {
  return (
    <div className={styles.box_container}>
      <div className={styles.left_box}>
        <div className={styles.left_box_title}>
          {`Unleash Your\nTrading Power\nwith ZooEx`}
        </div>
        <div className={styles.left_box_info}>
          {`ZooEx is a decentralized margin trading protocol that enables leverage trading for any tokens`}
        </div>
        <div className={styles.enter_box}>
          <Button className={styles.enter_but}>ZooEx Coming Soon</Button>
          <a
            href="https://docs.indexzoo.com/"
            target="_blank"
            className={styles.read_more}
          >
            Read More &rarr;
          </a>
        </div>
      </div>
      <div className={styles.right_box}>
        <img
          src="/dashboard.png"
          alt="Trading dashboard"
          className={styles.right_box_img}
        />
        <img
          src="/needle.gif"
          loading="lazy"
          alt="Trading line graph"
          className={styles.needle}
        />
      </div>
    </div>
  );
}

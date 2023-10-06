import React from "react";
import styles from "./index.module.css";
import { Button } from "@mui/material";
import Image from "next/image";

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
        </div>
      </div>
      <div className={styles.right_box}>
        <Image
          src="/dashboard.png"
          alt="Trading dashboard"
          className={styles.right_box_img}
        />
        <Image
          src="/needle.gif"
          loading="lazy"
          width={200}
          height={100}
          alt="Trading line graph"
          className={styles.needle}
        />
      </div>
    </div>
  );
}

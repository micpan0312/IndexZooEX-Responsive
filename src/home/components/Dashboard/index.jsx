import React from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";
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
          <Button className={styles.enter_but}>Enter Zoo</Button>
        </div>
      </div>
      <div className={styles.right_box}>
        <Image
          src="/dashboard.png"
          alt="Trading dashboard"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className={styles.right_box_img}
        />
        <img
          src="/needle.gif"
          loading="lazy"
          alt="Trading line graph"
          // width={800}
          // height={250}
          // layout="responsive"
          className={styles.needle}
        />
      </div>
    </div>
  );
}

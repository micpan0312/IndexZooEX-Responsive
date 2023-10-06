import React from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";
import Image from 'next/image';
// import { Height } from "@mui/icons-material";

const JoinZoo = () => {
  return (
    <div className={styles.join_box}>
      <div className={styles.join_title}>Join the Zoo</div>
      <div className={styles.join_info_box}>
        <Button className={styles.join_info} onClick={() => {}}>
          <Image
            src="/twitter.png"
            loading="lazy"
            style={{
              paddingLeft: "20px",
              paddingTop: "16px",
              paddingBottom: "16px",
              height: "70px",
            }}
          ></Image>
          <div className={styles.join_info_text}>Twitter</div>
        </Button>

        <Button className={styles.join_info}>
          <Image
            src="/discord.png"
            loading="lazy"
            style={{
              paddingLeft: "20px",
              paddingTop: "16px",
              paddingBottom: "16px",
              height: "70px",
            }}
          ></Image>
          <div className={styles.join_info_text}>Discord</div>
        </Button>

        <Button className={styles.join_info}>
          <Image
            src="/telegram.png"
            loading="lazy"
            style={{
              paddingLeft: "20px",
              paddingTop: "16px",
              paddingBottom: "16px",
              height: "70px",
            }}
          ></Image>
          <div className={styles.join_info_text}>Telegram</div>
        </Button>

        <Button className={styles.join_info}>
          <Image
            src="/reddit.png"
            loading="lazy"
            style={{
              paddingLeft: "20px",
              paddingTop: "16px",
              paddingBottom: "16px",
              height: "70px",
            }}
          ></Image>
          <div className={styles.join_info_text}>Reddit</div>
        </Button>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <Image
          src="/bull_w_bkg.jpg"
          loading="lazy"
          className={styles.bull_w_bkg}
        ></Image>
      </div>
    </div>
  );
};

export default JoinZoo;

import React from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { Height } from "@mui/icons-material";

const JoinZoo = () => {
  return (
    <div className={styles.join_box}>
      <div className={styles.join_title}>Join the Zoo</div>
      <div className={styles.join_info_box}>
        <a
          href={"https://twitter.com/indexzoo"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={styles.join_info} onClick={() => {}}>
            <img
              src="/twitter.png"
              loading="lazy"
              style={{
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "16px",
                height: "70px",
              }}
            ></img>
            <div className={styles.join_info_text}>Twitter</div>
          </Button>
        </a>
        <a
          href={"https://discord.com/invite/peMzgw26Mw"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={styles.join_info}>
            <img
              src="/discord.png"
              loading="lazy"
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
              style={{
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "16px",
                height: "70px",
              }}
            ></img>
            <div className={styles.join_info_text}>Discord</div>
          </Button>
        </a>
        <a
          href={"https://t.me/indexzoo"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={styles.join_info}>
            <img
              src="/telegram.png"
              loading="lazy"
              style={{
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "16px",
                height: "70px",
              }}
            ></img>
            <div className={styles.join_info_text}>Telegram</div>
          </Button>
        </a>
        <a
          href={"https://www.reddit.com/r/IndexZoo/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={styles.join_info}>
            <img
              src="/reddit.png"
              loading="lazy"
              style={{
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "16px",
                height: "70px",
              }}
            ></img>
            <div className={styles.join_info_text}>Reddit</div>
          </Button>
        </a>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <img
          src="/bull_w_bkg.jpg"
          loading="lazy"
          className={styles.bull_w_bkg}
        ></img>
      </div>
    </div>
  );
};

export default JoinZoo;

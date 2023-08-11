import React from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";

const JoinZoo = () => {
    return (
        <div className={styles.join_box}>
            <div className={styles.join_title}>
                Join the Zoo
            </div>
            <div className={styles.join_info_box}>
                <Button className={styles.join_info} onClick={
                    () => {

                    }
                }>
                    <img src="/twitter.svg" style={{
                        paddingLeft: "20px",
                        paddingTop: "16px",
                        paddingBottom: "16px"
                    }}></img>
                    <div className={styles.join_info_text}>Twitter</div>
                </Button>

                <Button className={styles.join_info}>
                <img src="/discord.svg" style={{
                        paddingLeft: "20px",
                        paddingTop: "16px",
                        paddingBottom: "16px"
                    }}></img>
                    <div className={styles.join_info_text}>Discord</div>
                </Button>

                <Button className={styles.join_info}>
                <img src="/telegram.svg" style={{
                        paddingLeft: "20px",
                        paddingTop: "16px",
                        paddingBottom: "16px"
                    }}></img>
                    <div className={styles.join_info_text}>Telegram</div>
                </Button>

                <Button className={styles.join_info}>
                <img src="/reddit 1.png" style={{
                        paddingLeft: "20px",
                        paddingTop: "16px",
                        paddingBottom: "16px"
                    }}></img>
                    <div className={styles.join_info_text}>Reddit</div>
                </Button>

            </div>
            <img src="/Rectangle.png" style={{
                width: "15%",
                marginTop: "200px",
                justtifyContent: "center",
                marginLeft: "35%",

            }}></img>
        </div>
    );
};

export default JoinZoo;
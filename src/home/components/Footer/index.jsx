import React from "react";
import styles from "./index.module.css";
import { ClassNames } from "@emotion/react";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_top}>
                <div className={styles.left_container}>
                    <img src={"/logo.png"} alt="zoo logo" />
                    <p className={styles.left_container_text}>
                        ZooEx is a decentralized margin trading protocol that
                        enables leverage trading for any tokens.
                    </p>
                    <p className={styles.left_container_email}>contact@ZooEx.com</p>
                </div>
                <div className={styles.right_container}>
                    <div className={styles.links_container}>
                        <p className={styles.category}>The Zoo</p>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Zoo Doc</p>
                        <p>GitHub</p>
                        <p>DApp</p>
                        <p>Branding Material</p>
                    </div>
                    <div className={styles.links_container}>
                    <p className={styles.category}>The Animals</p>
                    <p>Bear Inverse Token</p>
                    <p>Fear Volatility Token</p>
                    <p>Future Animals</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <p>ZooEx ©2023. </p>
            </div>
        </div>
    );
};

export default Footer;
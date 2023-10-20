import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_top}>
        <div className={styles.left_container}>
          <img src={"/logo.png"} loading="lazy" alt="zoo logo" />
          <p className={styles.left_container_text}>
            ZooEx is a decentralized margin trading protocol that enables
            leverage trading for any tokens.
          </p>
          <p className={styles.left_container_email}>contact@ZooEx.com</p>
        </div>
        <div className={styles.right_container}>
          <div className={styles.links_container}>
            <h3 className={styles.category}>About Us</h3>
            <ul>
              <li>
                <a target="_blank" href="https://docs.indexzoo.com/">
                  Gitbook
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/IndexZoo">
                  GitHub
                </a>
              </li>
              <li>
                <a target="_blank" href="https://medium.com/indexzoo">
                  Medium
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://sheer-avatar-2ad.notion.site/65f8bfdb40724fe3a996e389026fc837?v=f5253bea30574e87a0a9e784276766bc"
                >
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.links_container}>
            <h3 className={styles.category}>Our Products</h3>
            <ul>
              <li style={{ marginBottom: "4px" }}>
                <a target="_blank" href="https://www.indexzoo.com">
                  IndexZoo
                </a>
              </li>
              <li>
                <a target="_self" href="">
                  ZooEx
                </a>
                <img
                  src="/comingSoon.png"
                  alt=""
                  loading="lazy"
                  style={{
                    marginLeft: "-13px",
                    marginBottom: "9px",
                    height: "auto",
                    width: "45px",
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>ZooEx ©2023.</p>
      </div>
    </div>
  );
};

export default Footer;

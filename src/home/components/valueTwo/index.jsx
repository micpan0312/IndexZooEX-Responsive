import React from 'react'
import styles from "./index.module.css";

const ValueTwo = () => {
  
    return (
      <div className={styles.container_box}>
        <div className={styles.item_box} style={{
          width: "390.82px",
        }}>
          <div className={styles.item_img}></div>

          <div className={styles.item_right}>
            <div className={styles.item_text_title}>Trading Volume</div>
            <div className={styles.item_value}>$108,892,466,791</div>
          </div>
        </div>

        <div className={styles.sep_bar}></div>

        <div className={styles.item_box} style={{
          width: "377.64px",
        }}>
          <div className={styles.item_img}></div>
          <div className={styles.item_right}>
            <div className={styles.item_text_title}>Jackpot Number</div>
            <div className={styles.item_value}>$215,819,063</div>
          </div>
        </div>

        <div className={styles.sep_bar}></div>

        <div className={styles.item_box} style={{
          width: "370.54px",
        }}>
        <div className={styles.item_img}></div>
          <div className={styles.item_right}>
            <div className={styles.item_text_title}>Total Users</div>
            <div className={styles.item_value}>249,031</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ValueTwo;
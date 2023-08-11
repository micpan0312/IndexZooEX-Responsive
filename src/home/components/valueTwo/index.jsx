import React from 'react'
import styles from "./index.module.css";

const ValueTwo = () => {
  
    return (
      <div className={styles.container_box}>
        <div className={styles.item_box} style={{flex:'1.5'}}>
          <div className={styles.item_img}></div>

          <div className={styles.item_right}>
            <div className={styles.item_text_title}>Trading Volume</div>
            <div className={styles.item_value}>$108,892,466,791</div>
          </div>
          


        </div>
        <div className={styles.item_box}></div>
        <div className={styles.item_box}></div>
      </div>
    );
  };
  
  export default ValueTwo;
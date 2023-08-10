import React from 'react'
import styles from "./index.module.css";

const ValueTwo = () => {
  
    return (
      <div className={styles.container_box}>
        <div className={styles.item_box} style={{flex:'1.5'}}></div>
        <div className={styles.item_box} style={{
          backgroundColor:"red"
        }}></div>
        <div className={styles.item_box}></div>
      </div>
    );
  };
  
  export default ValueTwo;
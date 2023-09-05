import React from "react";
import styles from "./index.module.css";

const Highlights = () => {
  return (
    <div className={styles.outer_box}>
      <div className={styles.highlight_box}>
        <div className={styles.highlight_title}>Product Highlights</div>
        <div className={styles.highlight_col}>
          <div className={styles.highlight_section}>
            <div className={styles.highlight_rows_img}>
              <div className={styles.image_container}>
                <img src="/data_bar_1.png" className={styles.static_image}/>
                <img src="/Tail Animation 1.gif" className={styles.gif_image}/>
              </div>
            </div>
            <div className={styles.highlight_subtitle}>
              Optimized Trade Routing
            </div>
            <div className={styles.highlight_info}>
              Compares prices from multiple DEXs and aggregators. By using
              advanced algorithms, we can route trades to the most liquid markets
              in real-time, ensuring minimal slippage and maximum returns. Execute
              trades with confidence, knowing they are getting the best possible
              deal.
            </div>
          </div>

          <div className={styles.highlight_section}>
            <div className={styles.highlight_rows_img}>
            <div className={styles.image_container}>
                <img src="/data_bar_2.png" className={styles.static_image}/>
                <img src="/Tail Animation 2.gif" className={styles.gif_image}/>
              </div>
            </div>
            <div className={styles.highlight_subtitle}>
              Limit Order & Stop Loss Order
            </div>
            <div className={styles.highlight_info}>
              Enable variety of order selections for the best trading experience.
            </div>
          </div>

          <div className={styles.highlight_section}>
            <div className={styles.highlight_rows_img}>
            <div className={styles.image_container}>
                <img src="/data_bar_3.png" className={styles.static_image}/>
                <img src="/Tail Animation 3.gif" className={styles.gif_image}/>
              </div>
            </div>
            <div className={styles.highlight_subtitle}>
              Win Big By Simply Trading
            </div>
            <div className={styles.highlight_info}>
              Unique fee distribution raffle program that provides users with the
              chance to win big simply by trading on our platform. The more trades
              a user makes, the higher their chances of winning.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

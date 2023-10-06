import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const Highlights = () => {
  return (
    <div className={styles.outer_box}>
      <div className={styles.highlight_box}>
        <div className={styles.highlight_title}>Product Highlights</div>
        <div className={styles.highlight_col}>
          <div className={styles.highlight_section}>
            <div className={styles.highlight_rows_img}>
              <div className={styles.image_container}>
                <Image
                  src="/data_bar_1.png"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.static_image}
                />
                <Image
                  src="/tail_ani_1.gif"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.gif_image}
                />
              </div>
            </div>
            <div className={styles.highlight_subtitle}>
              Optimized Trade Routing
            </div>
            <div className={styles.highlight_info}>
              ZooEx's optimized trade routing automatically compares prices from
              multiple DEXs and aggregators to ensure traders always receive the
              best possible price. By using advanced algorithms, we can route
              trades to the most liquid markets in real-time, ensuring minimal
              slippage and maximum returns.
            </div>
          </div>

          <div className={styles.highlight_section}>
            <div className={styles.highlight_rows_img}>
              <div className={styles.image_container}>
                <Image
                  src="/data_bar_2.png"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.static_image}
                />
                <Image
                  src="/tail_ani_2.gif"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.gif_image}
                />
              </div>
            </div>
            <div className={styles.highlight_subtitle}>
              Limit Order & Stop Loss Order
            </div>
            <div className={styles.highlight_info}>
              ZooEx offers a variety of order selections to provide the best
              trading experience for users. Our platform supports both limit and
              stop-loss orders, allowing traders to take advantage of market
              movements while managing their risks. This flexibility allows
              ZooEx users to customize their trades to fit their unique trading
              strategies.
            </div>
          </div>

          <div className={styles.highlight_section}>
            <div className={styles.highlight_rows_img}>
              <div className={styles.image_container}>
                <Image
                  src="/data_bar_3.png"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.static_image}
                />
                <Image
                  src="/tail_ani_3.gif"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.gif_image}
                />
              </div>
            </div>
            <div className={styles.highlight_subtitle}>
              Win Big By Simply Trading
            </div>
            <div className={styles.highlight_info}>
              ZooEx offers a unique fee distribution raffle program that
              provides users with the chance to win big simply by trading on our
              platform. The more trades a user makes, the higher their chances
              of winning. The Program has the potential to distribute millions
              of dollars in fees to lucky users.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

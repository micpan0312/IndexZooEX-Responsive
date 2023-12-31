import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { autoPlay } from "react-swipeable-views-utils";
import { Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import CarouselDSK from "../CarouselDSK";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const defualtData = [
    {
      img: "/car1_updated.png",
      title: "Deep Liquidity \r\n for Any Pairs",
      info: "Provide traders with the deepest liquidity possible across all trading pairs by leveraging the liquidity pools on DEXs. Unlike centralized exchanges, ZooEx never trades against its users, ensuring that the platform operates with transparency and fairness.",
    },
    {
      img: "/car2_updated.png",
      title: "High Leverage at Low Cost",
      info: "Offer competitive interest rates by utilizing lending protocols from top providers like Aave. This allows us to offer high leverage up to 5x on major trading pairs, providing traders with the ability to amplify their gains while keeping costs low.",
    },
    {
      img: "/car3_updated.png",
      title: 'Unique "JackPot" Trading Fees Distribution',
      info: 'ZooEx is revolutionizing the way trading fees are distributed by offering a unique "JackPot" program. We distribute 100% of trading fees, providing traders with the opportunity to earn more while adding an exciting element of chance to the trading experience.',
    },
  ];

  //exchange
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={styles.box_container}>
      <CarouselDSK />
      <div className={styles.box_mobile}>
        <div className={styles.box_top}>
          <div className={styles.box_top_title}>Key Features</div>
          <div className={styles.box_silder_box}>
            <div
              onClick={() => {
                setActiveStep(0);
              }}
              className={
                activeStep == 0
                  ? styles.box_right_silder_box_s
                  : styles.box_right_silder_box_u
              }
            ></div>
            <div
              onClick={() => {
                setActiveStep(1);
              }}
              className={
                activeStep == 1
                  ? styles.box_right_silder_box_s
                  : styles.box_right_silder_box_u
              }
            ></div>
            <div
              onClick={() => {
                setActiveStep(2);
              }}
              className={
                activeStep == 2
                  ? styles.box_right_silder_box_s
                  : styles.box_right_silder_box_u
              }
            ></div>
          </div>

          <AutoPlaySwipeableViews
            axis={"x"}
            step={activeStep}
            onChangeIndex={(step) => {
              console.log(step);
              setActiveStep(step);
            }}
          >
            {defualtData.map((val, index) => {
              return (
                <div>
                  <div className={styles.box_top_value}>
                    <div className={styles.box_top_value_title}>
                      {val?.title}
                    </div>
                    <div className={styles.box_top_value_info}>{val?.info}</div>
                    <img className={styles.mbsw_img} src={val?.img} />
                  </div>
                </div>
              );
            })}
          </AutoPlaySwipeableViews>
          <div className={styles.box_bottom_left}>
            <Button className={styles.enter_but}>Enter</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

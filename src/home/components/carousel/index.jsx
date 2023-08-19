import { useState } from "react";
import styles from "./index.module.css";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Button, Menu, MenuItem } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarouselBox = () => {
  const defualtData = [
    {
      img: "car1.png",
      title: "ZooEx is a decentralized",
      info: "ZooEx is a decentralized margin trading protocol that enables leverage trading for any tokens",
    },
    {
      img: "car2.png",
      title: "ZooEx is a decentralized",
      info: "ZooEx is a decentralized margin trading protocol that enables leverage trading for any tokens",
    },
    {
      img: "car3.png",
      title: "ZooEx is a decentralized",
      info: "ZooEx is a decentralized margin trading protocol that enables leverage trading for any tokens",
    },
  ];

  //exchange
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={styles.box_container}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <div className={styles.box_left_title}>Key Features</div>
          <div className={styles.box_left_img_box}>
            <div className={styles.box_left_img_value}>
              <img src={defualtData[activeStep].img} alt="" className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.box_right_silder_box}>
            <div
            onClick={()=> {
              setActiveStep(0)
            }}
              className={
                activeStep == 0
                  ? styles.box_right_silder_box_s
                  : styles.box_right_silder_box_u
              }
            ></div>
            <div
                 onClick={()=> {
                  setActiveStep(1)
                }}
              className={
                activeStep == 1
                  ? styles.box_right_silder_box_s
                  : styles.box_right_silder_box_u
              }
            ></div>
            <div
                 onClick={()=> {
                  setActiveStep(2)
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
                <div className={styles.box_right_value}>
                  <div className={styles.box_right_value_title}>
                    {val?.title}
                  </div>
                  <div className={styles.box_right_value_info}>{val?.info}</div>
                  <div style={{ marginTop: "40px" }}>
                    <Button className={styles.enter_but}>Enter Zoo</Button>
                  </div>
                </div>
              );
            })}
          </AutoPlaySwipeableViews>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;

// import React from "react";
import styles from "./index.module.css";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import data from "./data";
import Image from "next/image";

function CarouselDSK() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className={styles.section}>
      <div className={styles.top}>
        <div className={styles.keyHead}>Key Features</div>
      </div>
      <div className={styles.carousel}>
        <div className={styles.leftSection}>
          <div className={styles.section_img}>
            {people.map((person, personIndex) => {
              const { id, image, name } = person;
              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <div
                  key={id}
                  className={`${styles.article_heading} ${styles[position]}`}
                >
                  <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className={styles.keyFeat_img}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.slideshowDots}>
            {people.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.slideshowDot} ${
                  index === idx ? styles.active : styles
                }`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
          <div className={styles.section_text}>
            {people.map((person, personIndex) => {
              const { id, name, quote } = person;
              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <div
                  key={id}
                  className={`${styles.article_heading} ${styles[position]}`}
                >
                  <div
                    className={styles.titleHead}
                    dangerouslySetInnerHTML={{ __html: name }}
                  ></div>
                  <div className={styles.text}>{quote}</div>
                </div>
              );
            })}
          </div>
          <Button className={styles.enter_but}>Enter</Button>
        </div>
      </div>
    </div>
  );
}

export default CarouselDSK;

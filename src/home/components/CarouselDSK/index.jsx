// import React from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem, stepLabelClasses } from "@mui/material";

// export default function CarouselDSK() {
//   return (
//     <div className={styles.test}>
//       <p>hello world</p>
//       <p>sup</p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

import "./index.module.css";

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
                  <img src={image} alt={name} className={styles.person_img} />
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

{
  /* <div className={styles.section_center}>
  {people.map((person, personIndex) => {
    const { id, image, name, title, quote } = person;
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
      <div key={id} className={`${styles.article_heading} ${styles[position]}`}>
        <img src={image} alt={name} className={styles.person_img} />
        <h4>{name}</h4>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{quote}</p>
      </div>
    );
  })}
</div>; */
}

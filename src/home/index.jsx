import { useState } from "react";
import styles from "./index.module.css";
import Header from "./components/header";
import ValueOne from "./components/valueOne";
import ValueTwo from "./components/valueTwo";
import ValueThree from "./components/ValueThree";
import JoinZoo from "./components/joinZoo";
import CarouselBox from "./components/carousel";
import Footer from "./components/footer";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container_box}>
      <div className={styles.box1}>
        <img src="/header_left.png" alt="" className={styles.left} />
        <img src="/header_middle.png" alt="" className={styles.middle} />
        <img src="/header_right.png" alt="" className={styles.right} />
        <Header />
        <ValueOne />
      </div>
      <ValueTwo />
      <CarouselBox />
      <ValueThree />
      <JoinZoo />
      <Footer />
    </div>
  );
};

export default Home;

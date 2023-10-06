import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./index.module.css";
// import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import Stats from "./components/Stats";
// import Highlights from "./components/Highlights";
// import JoinZoo from "./components/JoinZoo";
// import Carousel from "./components/Carousel";
// import Footer from "./components/Footer";

const Header = dynamic(() => import("../home/components/Header"));
const Dashboard = dynamic(() => import("../home/components/Dashboard"));
const Stats = dynamic(() => import("../home/components/Stats"));
const Carousel = dynamic(() => import("../home/components/Carousel"));
const Highlights = dynamic(() => import("../home/components/Highlights"));
const JoinZoo = dynamic(() => import("../home/components/JoinZoo"));
const Footer = dynamic(() => import("../home/components/Footer"));

import Image from "next/image";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container_box}>
      <div className={styles.box1}>
        <div className={styles.desktop_bkg}>
          <img
            // src="/header_left_crop.png"
            src="/header_left1.png"
            alt=""
            loading="lazy"
            className={styles.left}
          />
          <img
            src="/header_middle.png"
            alt=""
            loading="lazy"
            className={styles.middle}
          />
          <img
            src="/header_right.png"
            alt=""
            loading="lazy"
            className={styles.right}
          />
        </div>

        <div className={styles.mobile_bkg}>
          <Image
            src="/mobile_dash_bkg.png"
            loading="lazy"
            alt=""
            className={styles.mobile_dash}
          />
          <Image
            src="/mobile_dash_right.png"
            loading="lazy"
            alt=""
            className={styles.mobile_dash_r}
          />
        </div>
        <Header />
        <Dashboard />
      </div>
      {/* <Stats /> */}
      <div className={styles.box1}>
        <Image
          src="/keyfeature.webp"
          loading="lazy"
          alt="Key Feature Bkg"
          className={styles.keyfeature}
        />
        <Carousel />
      </div>
      <div className={styles.box1}>
        <img
          src="/product_bkg_right_min.png"
          loading="lazy"
          alt=""
          className={styles.product_bkg_right}
        />
        <img
          src="/product_bkg_min.png"
          alt=""
          loading="lazy"
          className={styles.product_bkg}
        />
        <Image
          src="/paw_right.gif"
          loading="lazy"
          className={styles.pawR}
        ></Image>
        <Image src="/paw_left.gif" className={styles.pawL}></Image>
        <Highlights />
      </div>
      <div className={styles.box1}>
        <JoinZoo />
        <Image
          src="/joinZoo_right.png"
          alt=""
          loading="lazy"
          className={styles.joinZoo_right}
        />
        <Image
          src="/joinZoo_left.png"
          alt=""
          loading="lazy"
          className={styles.joinZoo_left}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

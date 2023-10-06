import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./index.module.css";
import Image from "next/image";
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

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container_box}>
      <div className={styles.box1}>
        <div className={styles.desktop_bkg}>
          <Image
            src="/header_left1.png"
            width={1000}
            height={1000}
            alt=""
            loading="lazy"
            className={styles.left}
          />
          <Image
            src="/header_middle.png"
            width={1000}
            height={1000}
            alt=""
            loading="lazy"
            className={styles.middle}
          />
          <Image
            src="/header_right.png"
            width={900}
            height={900}
            alt=""
            loading="lazy"
            className={styles.right}
          />
        </div>

        <div className={styles.mobile_bkg}>
          <Image
            src="/mobile_dash_bkg.png"
            width={500}
            height={500}
            loading="lazy"
            alt=""
            className={styles.mobile_dash}
          />
          <Image
            src="/mobile_dash_right.png"
            width={300}
            height={300}
            alt=""
            className={styles.mobile_dash_r}
          />
        </div>
        <Header />
        <Dashboard />
      </div>
      <Stats />
      <div className={styles.box1}>
        <Image
          src="/keyfeature.webp"
          width={900}
          height={900}
          loading="lazy"
          alt="Key Feature Bkg"
          className={styles.keyfeature}
        />
        <Carousel />
      </div>
      <div className={styles.box1}>
        <Image
          src="/product_bkg_right_min.png"
          width={900}
          height={500}
          loading="lazy"
          alt=""
          className={styles.product_bkg_right}
        />
        <Image
          src="/product_bkg_min.png"
          width={1000}
          height={800}
          alt=""
          loading="lazy"
          className={styles.product_bkg}
        />
        <Image
          src="/paw_right.gif"
          width={900}
          height={600}
          loading="lazy"
          className={styles.pawR}
        />
        <Image
          src="/paw_left.gif"
          width={1000}
          height={100}
          loading="lazy"
          className={styles.pawL}
        />
        <Highlights />
      </div>
      <div className={styles.box1}>
        <JoinZoo />
        <Image
          src="/joinZoo_right.png"
          width={500}
          height={500}
          alt=""
          loading="lazy"
          className={styles.joinZoo_right}
        />
        <Image
          src="/joinZoo_left.png"
          width={500}
          height={500}
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

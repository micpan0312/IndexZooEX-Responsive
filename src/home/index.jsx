import { useState } from "react";
import styles from "./index.module.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Stats from "./components/Stats";
import Highlights from "./components/Highlights";
import JoinZoo from "./components/JoinZoo";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container_box}>
      <div className={styles.box1}>
        <div className={styles.desktop_bkg}>
          <img src="/header_left.png" alt="" className={styles.left} />
          <img src="/header_middle-1.png" alt="" className={styles.middle} />
          <img src="/header_right.png" alt="" className={styles.right} />
        </div>
        
        <div className={styles.mobile_bkg}>
          <img src="/mobile_dash_bkg.png" alt="" className={styles.mobile_dash} />
          <img src="/mobile_dash_right.png" alt="" className={styles.mobile_dash_r} />
        </div>
        <Header />
        <Dashboard />
      </div>
      <Stats />
      <div className={styles.box1}> 
        <img src="/keyfeature.png" alt="" className={styles.keyfeature} />
        <Carousel />
      </div>
      <div className={styles.box1}>
        <img src="/product_bkg_right.png" alt="" className={styles.product_bkg_right} />
        <img src="/product_bkg.png" alt="" className={styles.product_bkg} />
        <img src="/paw_right.gif" className={styles.pawR}></img>
        <img src="/paw_left.gif" className={styles.pawL}></img>
        <Highlights />
      </div>
      <div className={styles.box1}>
        <JoinZoo />
        <img src="/joinZoo_right.png" alt="" className={styles.joinZoo_right} />
        <img src="/joinZoo_left.png" alt="" className={styles.joinZoo_left} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

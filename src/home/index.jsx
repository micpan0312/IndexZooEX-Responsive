import { useState } from "react";
import styles from "./index.module.css";
import Header from "./components/header";
import ValueOne from "./components/valueOne";
import ValueTwo from "./components/valueTwo";
import ValueThree from "./components/ValueThree";
import JoinZoo from "./components/joinZoo";
import CarouselBox from "./components/carousel";


const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container_box}>
      <Header />
      <ValueOne/>
      <ValueTwo/>
      <CarouselBox/>
      <ValueThree/>
      <JoinZoo/>
      
    </div>
  );
};

export default Home;

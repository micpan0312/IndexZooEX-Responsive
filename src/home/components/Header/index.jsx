import { Button, Menu, MenuItem, Popover } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./index.module.css";
import { useRef } from "react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [popUpMenu, setPopUpMenu] = useState(false);
  const [mobile, setMobile] = useState(false);

  //switch mobile menu button image when click
  const checkbox = popUpMenu ? "/mobile_close_btn.png" : "/mobile_more_btn.png";

  // click outside to close the menu
  let menuRef = useRef();
  let ref = useRef();
  let mobileRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    let MenuHandler = (e) => {
      if (!ref.current.contains(e.target)) {
        setPopUpMenu(false);
      }
    };

    document.addEventListener("mousedown", MenuHandler);
    return () => {
      document.removeEventListener("mousedown", MenuHandler);
    };
  });

  useEffect(() => {
    let MobileHandler = (e) => {
      if (!mobileRef.current.contains(e.target)) {
        setMobile(false);
      }
    };

    document.addEventListener("mousedown", MobileHandler);
    return () => {
      document.removeEventListener("mousedown", MobileHandler);
    };
  });

  // mobile more btn function
  return (
    <div>
      <div className={styles.mobile_header_container} ref={ref}>
        <div className={styles.mobile_header_left}>
          <Image
            src={"/logo_mobile.png"}
            loading="lazy"
            alt="Zoo Logo"
            className={styles.mobile_logo}
          />
        </div>
        <div className={styles.mobile_header_right}>
        {/* <Button className={styles.mobile_enter}>Enter Zoo</Button> */}
          <img
            src={checkbox}
            loading="lazy"
            alt="More Button"
            className={styles.more_btn}
            onClick={() => {
              setPopUpMenu(!popUpMenu);
            }}
          />
        </div>

        <div
          className={`${popUpMenu ? styles.active : styles.inactive} ${
            styles.mobile_menu
          }`}
        >
          <div className={styles.mask}>
            <div>
              <Button
                id="basic-button"
                endIcon={<KeyboardArrowDownIcon />}
                style={{
                  marginLeft: "30px",
                  textTransform: "capitalize",
                }}
                className={styles.mobile_prod}
                onClick={() => {
                  setMobile(!mobile);
                }}
                ref={mobileRef}
              >
                Products
              </Button>

              <div
                className={`${mobile ? styles.active : styles.inactive} ${
                  styles.dropdown_menu
                }`}
              >
                <div>
                  <DropdownItem
                    img="/bear.png"
                    text={"Bear"}
                    link="https://app.indexzoo.com/bear"
                  />
                  <DropdownItem
                    img="/bull.png"
                    text={"Bull"}
                    link="https://app.indexzoo.com/bull"
                  />
                  <DropdownItem img="/zoo.png" text={"ZooEx"} link="" />
                  <Image
                    src="/comingSoon.png"
                    alt=""
                    width={80}
                    height={80}
                    loading="lazy"
                    style={{
                      position: "absolute",
                      marginLeft: "-30px",
                      marginTop: "4px",
                      height: "auto",
                      width: "60px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ paddingLeft: "32px" }}>
              <Button
                id="zoo-doc"
                style={{
                  marginRight: "30px",
                  textTransform: "capitalize",
                }}
                className={styles.mobile_zooDoc}
              >
                Zoo Doc
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header_container}>
        <Image
          src={"/logo.png"}
          width={200}
          height={50}
          loading="lazy"
          className={styles.header_container_left}
        />
        <div className={styles.header_container_right} ref={menuRef}>
          <div>
            <Button
              id="basic-button"
              endIcon={<KeyboardArrowDownIcon />}
              style={{
                textTransform: "capitalize",
                fontSize: "16px",
                marginTop: "38px",
              }}
              onClick={() => {
                setOpen(!open);
              }}
              className={styles.btn}
            >
              Products
            </Button>
            <div
              className={`${open ? styles.active : styles.inactive} ${
                styles.dropdown_menu
              }`}
            >
              <div>
                <DropdownItem
                  img="/bear.png"
                  text={"Bear"}
                  link="https://app.indexzoo.com/bear"
                />
                <DropdownItem
                  img="/bull.png"
                  text={"Bull"}
                  link="https://app.indexzoo.com/bull"
                />
                <DropdownItem img="/zoo.png" text={"ZooEx"} link="" />
                <Image
                  src="/comingSoon.png"
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    marginLeft: "-43px",
                    marginTop: "4px",
                    height: "auto",
                    width: "60px",
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: "32px", zIndex: "1" }}>
            <Button
              style={{
                width: "80px",
                textTransform: "capitalize",
                fontSize: "16px",
                marginTop: "38px",
              }}
              className={styles.btn}
            >
              Zoo Doc
            </Button>
            <Image
              src="/comingSoon.png"
              alt=""
              width={80}
              height={80}
              loading="lazy"
              style={{
                marginLeft: "-25px",
                marginBottom: "-8px",
                height: "auto",
                width: "60px",
              }}
            />
          </div>

          {/* <div style={{ paddingLeft: "40px" }}>
            <Button className={styles.header_container_right_enter}>
              Enter Zoo
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const DropdownItem = (props) => {
  // const handleClick = () => {
  //   // console.log("hi there", props.text);
  //   window.open(props.link, "_blank");
  // };
  // button click color effect
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Button
        // onClick={handleClick}
        sx={{
          "&:hover": {
            color: "#1CCD58",
            backgroundColor: "yellow",
            backgroundColor: "rgba(121, 255, 167, 0.04)",
            boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.20)",
            backdropFilter: "blur(45px)",
          },
          width: "100%",
          borderRadius: "10px",
          color: "white",
          textTransform: "capitalize",
          fontFamily: "Inter",
          fontSize: "14px",
        }}
      >
        <div className={styles.dropdownItem}>
          <Image src={props.img} width={40} height={40} loading="lazy" alt="" />
          <p className={styles.itemText}>{props.text}</p>
        </div>
      </Button>
    </a>
  );
};

export default Header;

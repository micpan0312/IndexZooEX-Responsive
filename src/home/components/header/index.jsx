import { Button, Menu, MenuItem, Popover } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./index.module.css";
import { PhotoSizeSelectActual } from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className={styles.header_container}>
      <img src={"/logo.png"} alt="" className={styles.header_container_left} />
      <div className={styles.header_container_right}>
        <div>
          <Button 
            id="basic-button"
            endIcon={<KeyboardArrowDownIcon />}
            style={{
              color: "white",
              textTransform: "capitalize",
              fontSize: "16px",
              marginTop: "38px",
            }}
            onClick={()=>{setOpen(!open)}}
          >
            Products
          </Button>
          <div className={`${open ? styles.active : styles.inactive} ${styles.dropdown_menu}` }>
            <div>
              <DropdownItem img="/bear.png" text={"Bear"} onClick link="https://timmousk.com/blog/react-conditional-classname/"/>
              <DropdownItem img="/bull.png" text={"Bull"} link="https://www.w3schools.com/css/css_align.asp"/>
              <DropdownItem img="/zoo.png" text={"ZooEx"} link=""/>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingLeft: "32px",
          }}
        >
          <Button
            style={{
              color: "white",
              textTransform: "capitalize",
              fontSize: "16px",
              marginTop: "38px",

            }}
          >
            {/* {"Zoo Doc"} */}
            Zoo Doc
          </Button>
        </div>
        <div
          style={{
            paddingLeft: "20px",
          }}
        >
          <Button className={styles.header_container_right_enter}>
            Enter the Zoo
          </Button>
        </div>
      </div>
    </div>
  );
};

const DropdownItem = (props) => {
  return (
    <a className="linkItem" href={props.link} target="blank">
      <div className={styles.dropdownItem} >
        <img src={props.img} alt="" />
        <p>{props.text}</p>
      </div>
    </a>

  );
  // return (
  //   <div className={styles.dropdownItem}>
  //     <img src={props.img} alt="" />
  //     <a href={props.link}>{props.text}</a>
  //   </div>
  // );
}

export default Header;


{/* <div>
<Button
  id="basic-button"
  aria-controls={open ? "basic-menu" : undefined}
  aria-haspopup="true"
  aria-expanded={open ? "true" : undefined}
  onClick={() => {
    setOpen(true);
  }}
  endIcon={<KeyboardArrowDownIcon />}
  style={{
    color: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    marginTop: "38px",
  }}
>
  Products
</Button>
<Menu
  id="basic-menu"
  open={open}
  anchorEl={open}
  onClose={() => {
    setOpen(false);
  }}
  MenuListProps={{
    "aria-labelledby": "basic-button",
  }}
>
  <MenuItem>Bear</MenuItem>
  <MenuItem>Bull</MenuItem>
  <MenuItem>ZooEx</MenuItem>
</Menu>
</div> */}
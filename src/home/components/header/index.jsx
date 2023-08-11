import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./index.module.css";
import { PhotoSizeSelectActual } from "@mui/icons-material";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.header_container}>
      <img src={"/logo.png"} alt="" className={styles.header_container_left} />
      <div className={styles.header_container_right}>
        <div>
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
            anchorEl={open}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
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
            {"Zoo Doc"}
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

export default Header;

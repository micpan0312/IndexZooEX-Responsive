import { useState } from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container_box}>
      <div className={styles.header_container}>
        <img
          src={"/logo.png"}
          alt=""
          className={styles.header_container_left}
        />
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

          <div>
            <Button
              style={{
                color: "white",
                textTransform: "capitalize",
              }}
            >
              {"Zoo Doc"}
            </Button>
          </div>
          <div>
            <Button className={styles.header_container_right_enter}>Enter the Zoo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

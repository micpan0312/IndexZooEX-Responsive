import * as React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme";
import Home from "../src/home";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
  );
}

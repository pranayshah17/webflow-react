import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.06), 0px 1px 10px 0px rgba(0,0,0,0.04)",
  color: "black",
});

const StyledLogo = styled("img")({
  width: 40,
  marginRight: 10,
});

export default function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledLogo src="logo.png" alt="Logo" />
        <Typography variant="h6" component="div">
          SSPL
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}
// export default Header;

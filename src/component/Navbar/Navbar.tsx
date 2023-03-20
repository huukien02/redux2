import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 2 }}>MUI-05</Typography>
        <Button color="inherit">Button</Button>
        <Button color="inherit">Box</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

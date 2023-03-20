import { Box, Typography } from "@mui/material";
import React from "react";

function ItemGrid() {
  return (
    <>
      <Box
        sx={{
          borderRadius: "10px",
          height: "100px",
          textAlign: "center",
          boxShadow: "0px 0px 10px lightgray",
        }}
      >
        <Typography variant="body1" color="initial">
          Item Grid
        </Typography>
      </Box>
    </>
  );
}

export default ItemGrid;

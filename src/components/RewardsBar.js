import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function RewardsBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#1e3932",
        height: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Typography
          sx={{ marginLeft: "1rem", fontWeight: "bold", fontSize: "0.9rem" }}
        >
          STARBUCKS® REWARDS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default RewardsBar;

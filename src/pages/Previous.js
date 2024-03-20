import React from "react";
import MenuHeader from "../components/MenuHeader";
import { Box, styled } from "@mui/material";
import CustomButton from "../components/CustomButton";
import prevImg from "../assets/previousImage.gif";

function Previous() {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "lg",
    paddingLeft: "140px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
    },
  }));

  return (
    <Box>
      <MenuHeader />
      <CustomBox>
        <h2>Previous</h2>
        <img src={prevImg} alt="previous  " />
        <h2>When history repeats itself</h2>
        <p>Previous orders will appear here to quickly order again.</p>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomButton btnText="Sign in" color="#000000de" />
          <CustomButton btnText="Join now" color="#000000de" />
        </Box>
      </CustomBox>
    </Box>
  );
}

export default Previous;

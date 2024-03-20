import React from "react";
import { Box, Container, styled } from "@mui/material";
import MenuHeader from "../components/MenuHeader";
import favImg from "../assets/favouritesImage.png";
import CustomButton from "../components/CustomButton";

function Favourites() {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "lg",
    paddingLeft: "140px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
    },
    // [theme.breakpoints.up("lg")]: {
    //   margin: "1.5rem",
    // },
  }));
  return (
    <Box>
      <MenuHeader />
      <CustomBox>
        <h2>Favourites</h2>
        <img src={favImg} alt="favourite" />
        <h3>Save your favourite mixes</h3>
        <p>
          Use the heart to save customizations. Your favourites will appear here
          to order again.
        </p>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomButton btnText="Sign in" color="#000000de" />
          <CustomButton btnText="Join now" color="#000000de" />
        </Box>
      </CustomBox>
    </Box>
  );
}

export default Favourites;

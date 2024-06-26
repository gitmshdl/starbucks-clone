import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";

function Hero2({
  image,
  subtitle,
  description,
  bgcolor,
  btnText,
  subtitleSize = "50px",
  descSize = "24px",
  smallSize = false,
  color = "white",
}) {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    maxWidth: "lg",
    margin: "1.5rem 0 1.5rem 0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgcolor,
    lineHeight: 0,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "1.5rem",
    },
  }));

  const CustomTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "2.5rem 0 2.5rem 0",
    },
  }));

  return (
    <CustomBox>
      <CustomTextBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
        flex={1}
      >
        <Typography
          sx={{
            color: { color },
            fontWeight: "bold",
            textAlign: "center",
            px: { xs: "1rem" },
            fontSize: { xs: smallSize ? "22px" : "28px", md: subtitleSize },
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          sx={{
            color: { color },
            maxWidth: "27rem",
            textAlign: "center",
            px: { xs: "1rem" },
            fontSize: { xs: smallSize ? "16px" : "22px", md: descSize },
          }}
        >
          {description}
        </Typography>
        <CustomButton color={color} btnText={btnText} />
      </CustomTextBox>
      <Box flex={1}>
        <img
          src={image}
          alt={image}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </CustomBox>
  );
}

export default Hero2;

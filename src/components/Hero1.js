import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";

function Hero1({
  image,
  subtitle,
  description,
  bgcolor,
  subtitleSize = "50px",
  descSize = "24px",
  smallSize = false,
  btnText,
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
      flexDirection: "column",
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

  //   const CustomText = styled(Typography)(({ theme }) => ({
  //     color: "white",
  //     textAlign: "center",
  //     px: { xs: "1rem" },
  //     fontSize
  //   }));

  //28 22

  return (
    <CustomBox>
      <Box flex={1}>
        <img
          src={image}
          alt={image}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <CustomTextBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 4,
        }}
        flex={1}
      >
        <Typography
          //   variant={subtitleSize}
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            px: { xs: "1rem" },
            fontSize: { xs: smallSize ? "22px" : "28px", md: subtitleSize },
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          //   variant={descSize}
          sx={{
            color: "white",
            maxWidth: "27rem",
            textAlign: "center",
            px: { xs: "1rem" },
            fontSize: { xs: smallSize ? "16px" : "22px", md: descSize },
          }}
        >
          {description}
        </Typography>
        <Button
          size="small"
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "white",
            border: "1px white solid",
            borderRadius: "50px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {btnText}
        </Button>
      </CustomTextBox>
    </CustomBox>
  );
}

export default Hero1;

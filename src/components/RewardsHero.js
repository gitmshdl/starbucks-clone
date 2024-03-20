import React from "react";
import rewards from "../assets/xl-hero-desktop_2021.webp";
import { Box, Button, Container, Typography, styled } from "@mui/material";

function RewardsHero() {
  const CustomContainer = styled(Box)(({ theme }) => ({
    paddingTop: "18%",
    paddingLeft: "2.5%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "2rem",
      padddingLeft: 0,
    },
  }));
  return (
    <Box
      sx={{
        width: "100%",
        height: "95svh",
        backgroundColor: "rgb(212, 233, 226)",
        backgroundImage: `url(${rewards})`,
        backgroundSize: "150%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "35% 120%",
      }}
    >
      <CustomContainer>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", lineHeight: 1.2, mb: "1rem" }}
        >
          FREE COFFEE
          <br />
          IS A TAP AWAY.
        </Typography>
        <Typography sx={{ mb: "1.5rem" }}>
          Join now to start earning Rewards.
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: "2rem", textTransform: "none", mb: "1rem" }}
        >
          Join now
        </Button>
        <Typography>Or join in the app for the best experience</Typography>
      </CustomContainer>
    </Box>
  );
}

export default RewardsHero;

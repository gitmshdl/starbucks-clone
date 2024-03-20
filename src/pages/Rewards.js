import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react"; // import CustomButton from "../components/CustomButton";
import RewardsSteps from "../components/RewardsSteps";
import RewardsTabs from "../components/RewardsTabs";
import RewardsSecond from "../components/RewardsSecond";
import EarnStar from "../components/EarnStar";
import RewardsTD from "../components/RewardsTD";
import RewardsFooter from "../components/RewardsFooter";
import RewardsHero from "../components/RewardsHero";
import RewardsBar from "../components/RewardsBar";

function Rewards() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <RewardsBar />
      <RewardsHero />
      <Box mt={isSmallScreen ? "3.5rem" : "7rem"}>
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
          align="center"
          sx={{ fontWeight: "bold", pb: "1rem" }}
        >
          Getting started is easy
        </Typography>
        <Typography variant={isSmallScreen ? "body2" : "body1"} align="center">
          Earn Stars and get rewarded in a few easy steps.
        </Typography>
      </Box>
      <RewardsSteps />
      <RewardsTabs />
      <Box
        mt={isSmallScreen ? "3.5rem" : "7rem"}
        mx={isSmallScreen ? "1rem" : "15rem"}
      >
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
          align="center"
          sx={{ fontWeight: "bold", pb: "1rem" }}
        >
          Endless extras
        </Typography>
        <Typography variant={isSmallScreen ? "body2" : "body1"} align="center">
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </Typography>
      </Box>
      <RewardsSecond />
      <EarnStar />
      <RewardsTD />
      <RewardsFooter />
    </>
  );
}

export default Rewards;

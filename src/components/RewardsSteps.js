import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";

function RewardsSteps() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    maxWidth: "xl",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "8rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "0 1rem",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "1.5rem",
    },
  }));
  const CustomInnerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "start",
    },
  }));
  return (
    <CustomBox>
      <CustomInnerBox>
        <img
          src={one}
          alt="one"
          style={{ width: "3rem", height: "auto", margin: ".5rem" }}
        />
        <Box>
          <Typography
            fontWeight="bold"
            variant={isSmallScreen ? "h6" : "subtitle1"}
            align={isSmallScreen ? undefined : "center"}
            m=".5rem"
          >
            Create an account
          </Typography>
          <Typography
            variant={isSmallScreen ? "body2" : "body1"}
            align={isSmallScreen ? "left" : "center"}
          >
            To get started, join now. You can also join in the app to get access
            to the full range of Starbucks® Rewards benefits.
          </Typography>
        </Box>
      </CustomInnerBox>
      <CustomInnerBox>
        <img
          src={two}
          alt="two"
          style={{ width: "3rem", height: "auto", margin: ".5rem" }}
        />
        <Box>
          <Typography
            fontWeight="bold"
            variant={isSmallScreen ? "h6" : "subtitle1"}
            align={isSmallScreen ? "left" : "center"}
            m=".5rem"
          >
            Order and pay how you’d like
          </Typography>
          <Typography
            variant={isSmallScreen ? "body2" : "body1"}
            align={isSmallScreen ? undefined : "center"}
          >
            Use cash, credit/debit card or save some time and pay right through
            the app. You’ll collect Stars all ways. Learn how
          </Typography>
        </Box>
      </CustomInnerBox>
      <CustomInnerBox>
        <img
          src={three}
          alt="three"
          style={{ width: "3rem", height: "auto", margin: "0.5rem" }}
        />
        <Box>
          <Typography
            fontWeight="bold"
            variant={isSmallScreen ? "h6" : "subtitle1"}
            align={isSmallScreen ? "left" : "center"}
            m=".5rem"
          >
            Earn Stars, get Rewards
          </Typography>
          <Typography
            variant={isSmallScreen ? "body2" : "body1"}
            align={isSmallScreen ? undefined : "center"}
          >
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </Typography>
        </Box>
      </CustomInnerBox>
    </CustomBox>
  );
}

export default RewardsSteps;

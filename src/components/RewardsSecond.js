import React from "react";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import extra1 from "../assets/extra1.jpg";
import extra2 from "../assets/extra2.jpg";
import extra3 from "../assets/extra3.jpg";

function RewardsSecond() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    maxWidth: "xl",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: "5rem .5rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "7rem",
    },
  }));
  const CustomInnerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "1rem",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
  return (
    <CustomBox>
      <CustomInnerBox>
        <img
          src={extra1}
          alt="one"
          style={{ width: "6.5rem", height: "auto", margin: "0.5rem" }}
        />
        <Box>
          <Typography
            fontWeight="bold"
            variant={isSmallScreen ? "h6" : "subtitle1"}
            align={isSmallScreen ? "left" : "center"}
            m=".5rem"
          >
            Fun freebies
          </Typography>
          <Typography
            variant={isSmallScreen ? "body2" : "body1"}
            align={isSmallScreen ? undefined : "center"}
          >
            Not only can you earn free coffee, look forward to a birthday treat
            plus coffee and tea refills.
          </Typography>
        </Box>
      </CustomInnerBox>
      <CustomInnerBox>
        <img
          src={extra2}
          alt="two"
          style={{ width: "6.5rem", height: "auto", margin: ".5rem" }}
        />
        <Box>
          <Typography
            fontWeight="bold"
            variant={isSmallScreen ? "h6" : "subtitle1"}
            align={isSmallScreen ? "left" : "center"}
            m=".5rem"
          >
            Order & pay ahead
          </Typography>
          <Typography
            variant={isSmallScreen ? "body2" : "body1"}
            align={isSmallScreen ? undefined : "center"}
          >
            Enjoy the convenience of in-store, curbside or drive-thru pickup at
            select stores.
          </Typography>
        </Box>
      </CustomInnerBox>
      <CustomInnerBox>
        <img
          src={extra3}
          alt="three"
          style={{ width: "6.5rem", height: "auto", margin: ".5rem" }}
        />
        <Box>
          <Typography
            fontWeight="bold"
            variant={isSmallScreen ? "h6" : "subtitle1"}
            align={isSmallScreen ? "left" : "center"}
            m=".5rem"
          >
            Get to free faster
          </Typography>
          <Typography
            variant={isSmallScreen ? "body2" : "body1"}
            align={isSmallScreen ? undefined : "center"}
          >
            Earn Stars even quicker with Bonus Star challenges, Double Star Days
            and exciting games.
          </Typography>
        </Box>
      </CustomInnerBox>
    </CustomBox>
  );
}

export default RewardsSecond;

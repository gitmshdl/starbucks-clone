import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import oneone from "../assets/11.png";
import onetwo from "../assets/12.png";
import twoone from "../assets/21.png";
import twotwo from "../assets/22.png";

function EarnStar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box bgcolor="#f2f0eb" pt="3.5rem" pb="4.5rem" height="auto">
      <Box px={isSmallScreen ? "1rem" : "25rem"}>
        <Typography fontWeight="bold" variant="h5" align="center" pb="1rem">
          Cash or card, you earn Stars
        </Typography>
        <Typography align="center" pb="3.5rem">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </Typography>
      </Box>
      <Grid2 container spaing={2} px={isSmallScreen ? "1rem" : "5rem"}>
        <Grid2 xs={12} md={12} lg={2}>
          <Box pb="2rem">
            <Typography fontWeight="bold" variant="h6">
              1★Star per dollar
            </Typography>
            <Typography variant="body2">Pay as you go</Typography>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} lg={5}>
          <Box display="flex">
            <img
              src={oneone}
              alt="one"
              style={{ width: "7rem", height: "auto" }}
            />
            <Box p=".5rem">
              <Typography fontWeight="bold" variant="subtitle1">
                Scan and pay separately
              </Typography>
              <Typography>
                Use cash or credit/debit card at the register.
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} lg={5}>
          <Box display="flex">
            <img
              src={onetwo}
              alt="two"
              style={{ width: "7rem", height: "auto" }}
            />
            <Box p=".5rem">
              <Typography fontWeight="bold" variant="subtitle1">
                Save payment in the app
              </Typography>
              <Typography>
                Check-out faster by saving a credit/debit card or PayPal to your
                account. You’ll be able to order ahead or scan and pay at the
                register in one step.
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
      <Divider />
      <Grid2
        container
        pt="2rem"
        spaing={2}
        px={isSmallScreen ? "1rem" : "5rem"}
      >
        <Grid2 xs={12} md={12} lg={2}>
          <Box pb="2rem">
            <Typography fontWeight="bold" variant="h6">
              2★Star per dollar
            </Typography>
            <Typography variant="body2">Add funds in the app</Typography>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} lg={5}>
          <Box display="flex">
            <img
              src={twoone}
              alt="three"
              style={{ width: "7rem", height: "auto" }}
            />
            <Box p=".5rem">
              <Typography fontWeight="bold" variant="subtitle1">
                Preload
              </Typography>
              <Typography>
                To save time and earn Stars twice as fast, add money to your
                digital Starbucks Card using any payment option. Scan and pay in
                one step or order ahead in the app.
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} lg={5}>
          <Box display="flex">
            <img
              src={twotwo}
              alt="four"
              style={{ width: "7rem", height: "auto" }}
            />
            <Box p=".5rem">
              <Typography fontWeight="bold" variant="subtitle1">
                Register your gift card
              </Typography>
              <Typography>
                Then use it to pay through the app. You can even consolidate
                balances from multiple cards in one place.
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default EarnStar;

import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";

function Description() {
  const CustomBox = styled(Box)(({ theme }) => ({
    textAlign: "center",
    padding: "0 15rem 0 15rem",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));
  return (
    <Container>
      <CustomBox>
        <Typography variant="body2" pt="3rem" pb="3rem">
          *At participating stores. To qualify for the Birthday Reward, you must
          have made at least one Star-earning transaction prior to your birthday
          each year.
        </Typography>
        <Typography variant="body2" pt="3rem" pb="3rem">
          **®Aeroplan is a registered trademark of Aeroplan Inc.
          <br />
          ®The Air Canada maple leaf logo is a registered trademark of Air
          Canada, used under license by Aeroplan Inc
          <br />
          ®The TD logo and other trademarks are the property of The
          Toronto-Dominion Bank.
          <br />
          To learn more about account linking benefits visit
          https://www.starbucks.ca/rewards/account-linking/
        </Typography>
        <Typography variant="body2" pt="3rem" pb="3rem">
          ***10/9 - 10/15, enjoy 20% off your next Starbucks order of $20 or
          more, excluding taxes and fees, on DoorDash. Fees subject to change.
          Max value of discount is $10. Does not apply to pick up or dine-in
          orders. Valid only at participating Starbucks® locations in Canada.
          Restricted delivery area. Menu items may be limited. Limit one
          redemption per person. All deliveries subject to availability. Prices
          for Starbucks® items purchased through DoorDash may be higher than
          posted in stores or as marked. See the DoorDash app for availability
          and restrictions.
        </Typography>
      </CustomBox>
    </Container>
  );
}

export default Description;

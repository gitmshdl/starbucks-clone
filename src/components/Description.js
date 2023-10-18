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
        <Typography variant="body2" pt="2rem">
          *®Aeroplan is a registered trademark of Aeroplan Inc.
        </Typography>
        <Typography variant="body2" pt="1rem">
          ®The Air Canada maple leaf logo is a registered trademark of Air
          Canada, used under license by Aeroplan Inc
        </Typography>
        <Typography variant="body2" pt="1rem" pb="1rem">
          The TD logo and other trademarks are the property of The
          Toronto-Dominion Bank. To learn more about account linking benefits
          visit https://www.starbucks.ca/rewards/account-linking/
        </Typography>
      </CustomBox>
    </Container>
  );
}

export default Description;

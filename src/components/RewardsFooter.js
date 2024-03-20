import { Box, Typography, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

function RewardsFooter() {
  return (
    <Box sx={{ px: { xs: 2, md: 5 }, py: { xs: 3, md: 6 } }} bgcolor="#f9f9f9">
      <Box pb={0.5}>
        <Typography variant="body2" pb={2} sx={{ lineHeight: 2.1 }}>
          At participating stores. Restrictions apply.
          <br />
          1Full Aeroplan Starbucks Offer Terms and Conditions↩
          <br />
          2Full TD Starbucks Offer Terms and Conditions↩
          <br />® Aeroplan is a registered trademark of Aeroplan Inc.
          <br />® The Air Canada maple leaf logo is a registered trademark of
          Air Canada, used under licence by Aeroplan Inc.
          <br />® The TD logo and other trademarks are the property of The
          Toronto-Dominion Bank.
        </Typography>
      </Box>
      <Grid2 container spacing={3}>
        <Grid2 xs={12} md={6}>
          <Typography
            variant="subtitle1"
            color="#00000094"
            pb={1}
            sx={{ fontWeight: "bold" }}
          >
            EARNING STARS
          </Typography>
          <Typography variant="body2">
            Stars cannot be earned on purchases of alcohol, Starbucks Cards or
            Starbucks Card reloads.
            <br />
            <br />
            Earn 1 Star per $1 spent when you scan your member barcode in the
            app, then pay with cash, credit/debit cards or mobile wallets at
            participating stores. You can also earn 1 Star per $1 spent when you
            link a payment method and pay directly through the app.
            <br />
            <br />
            Earn 2 Stars per $1 spent when you load funds and pay with your
            digital Starbucks Card in the app. You can also earn 2 Stars per $1
            spent when you pay in-person at a participating store with your
            registered physical Starbucks Card or scan your member barcode in
            the app, and then use any physical Starbucks Card (regardless of
            whether it is registered) to complete the purchase.
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Typography
            variant="subtitle1"
            color="#00000094"
            pb={1}
            sx={{ fontWeight: "bold" }}
          >
            TERMS OF USE
          </Typography>
          <Typography variant="body2">
            For full program details visit starbucks.ca/rewards/terms .
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Typography
            variant="subtitle1"
            color="#00000094"
            pb={1}
            sx={{ fontWeight: "bold" }}
          >
            BENEFITS
          </Typography>
          <Typography varaint="body2">
            Free refills available during same in-store visit only. To qualify
            for the Birthday Reward, you must have made at least one
            Star-earning transaction.
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Typography
            variant="subtitle1"
            color="#00000094"
            pb={1}
            sx={{ fontWeight: "bold" }}
          >
            REDEEMING REWARDS
          </Typography>
          <Typography variant="body2">
            Rewards cannot be redeemed for alcoholic beverages or multi-serve
            items. You pay the difference for any beverage customization over $1
            and/or merchandise item over $20. Not all stores honor tiered
            Rewards. Select stores redeem 200 Stars for free food or drink items
            only.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default RewardsFooter;

import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import CustomButton from "./CustomButton";

function FeaturedPoster({ image, title, description, bgColor }) {
  return (
    <Grid2 xs={12} md={6}>
      <Box sx={{ backgroundColor: bgColor, height: "100%" }}>
        <Box flex={1}>
          <img
            src={image}
            alt="drink"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Box flex={1} pt={1} pb={3}>
          <Typography
            sx={{
              fontSize: "24px",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              paddingX: { sm: 0, md: "1.5rem" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              textAlign: "center",
              paddingBottom: "1.5rem",
              paddingX: { sm: "1rem", md: "7.5rem" },
            }}
          >
            {description}
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <CustomButton btnText="Order now" color="#000000de" />
          </Box>
        </Box>
      </Box>
    </Grid2>
  );
}

export default FeaturedPoster;

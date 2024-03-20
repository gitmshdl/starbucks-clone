import {
  Box,
  Container,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import aeroplan from "../assets/aeroplan.png";
import td from "../assets/td.png";
import banner from "../assets/rewardsBanner.png";
import leftStar from "../assets/leftStar.svg";
import rightStar from "../assets/rightStar.svg";

function RewardsTD() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    // border: "1px solid red",
    marginTop: "2rem",
    // marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "start",
      //   justifyContent: "start",
    },
    [theme.breakpoints.up("lg")]: {},
  }));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Box
          bgcolor="#d4e9e2"
          sx={{
            width: "95%",
            height: "90%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: "20%",
              backgroundImage: `url(${leftStar})`,
              backgroundSize: "cover",
            }}
          />
          <Box sx={{ width: { xs: "99%", md: "60%" } }}>
            <Box
              sx={{
                marginTop: "2.5rem",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", paddingY: "2rem" }}
              >
                Keep the Rewards Coming
              </Typography>
              <Typography
                align="center"
                variant={isSmallScreen ? "body2" : "body1"}
              >
                Join Starbucks® Rewards and unlock extra perks by linking your
                Aeroplan® account or TD Card.
              </Typography>
            </Box>

            <CustomBox>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={aeroplan}
                  alt="aeroplan"
                  style={{
                    width: isSmallScreen ? "150px" : "200px",
                    marginBottom: "1.5rem",
                  }}
                />
                <Typography
                  align={isSmallScreen ? "inherit" : "center"}
                  variant={isSmallScreen ? "body2" : "body1"}
                >
                  Link your Aeroplan and Starbucks Rewards accounts to unlock
                  exclusive offers and earn Aeroplan points when you reload
                  funds in the Starbucks app.1
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={td}
                  alt="td"
                  style={{
                    width: isSmallScreen ? "150px" : "200px",
                    marginBottom: "1.5rem",
                  }}
                />
                <Typography
                  align={isSmallScreen ? "inherit" : "center"}
                  variant={isSmallScreen ? "body2" : "body1"}
                >
                  Link your eligible TD Credit or Visa Debit Card and Starbucks
                  Rewards account to earn 50% more Stars when you order in the
                  Starbucks app at participating Starbucks locations.2
                </Typography>
              </Box>
            </CustomBox>
          </Box>
          <Box
            sx={{
              width: "20%",
              backgroundImage: `url(${rightStar})`,
              backgroundSize: "cover",
            }}
          />
        </Box>
      </Box>

      <Container sx={{ paddingY: "5rem" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", paddingBottom: "1rem" }}
        >
          Questions?
        </Typography>
        <Typography variant="body2">
          We want to help in any way we can. You can ask your barista anytime or
          we’ve answered the most commonly asked questions right over here.
        </Typography>
      </Container>
    </>
  );
}

export default RewardsTD;

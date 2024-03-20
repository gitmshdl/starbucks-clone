import { Box, Container, styled } from "@mui/material";
import React from "react";
import SlickSlider from "../components/SlickSlider";
// import classes from "./GiftCards.module.css";
import giftcardImage from "../assets/giftcardImage.jpg";
import CustomButton from "../components/CustomButton";

function GiftCards() {
  const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#f9f9f9",
    marginTop: "30px",
    // [theme.breakpoints.up("lg")]: {
    //   margin: "1.5rem",
    // },
  }));

  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#f9f9f9",
    padding: "25px 0",
    gap: "50px",
    display: "flex",
    maxWidth: "lg",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "15px",
    },
    // [theme.breakpoints.up("lg")]: {
    //   margin: "1.5rem",
    // },
  }));

  const giftcardsCategory = [
    {
      title: "BIRTHDAY",
    },
    {
      title: "THANK YOU",
    },
    {
      title: "CELEBRATION",
      n: 4,
    },
    {
      title: "APPRECIATION",
      n: 4,
    },
    {
      title: "ENCOURAGEMENT",
    },
    {
      title: "WORKPLACE",
    },
    {
      title: "AFFECTION",
    },
    {
      title: "ANYTIME",
      n: 3,
    },
  ];

  return (
    <>
      {giftcardsCategory.map((category, index) => (
        <SlickSlider key={index} title={category.title} n={category.n} />
      ))}

      <CustomBox>
        <CustomContainer>
          <Box>
            <img
              src={giftcardImage}
              alt="giftcard"
              style={{ width: "300px", height: "auto" }}
            />
          </Box>
          <Box maxWidth="300px">
            <h3>Business gifting — simplified</h3>
            <p>
              Bulk send physical or digital Starbucks Cards to gift, reward,
              incentivize, or show appreciation towards your customers, clients
              and team members. Minimum 15 cards per order.
            </p>
            <CustomButton color="#000000de" btnText="Show now" />
          </Box>
        </CustomContainer>
      </CustomBox>
      <Container>
        <h4>GIFT CARD SUPPORT</h4>
        <p>
          Use the links below to manage eGifts you have sent
          <br /> or received, or view our full Card Terms & Conditions.
        </p>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomButton
            color="#000000de"
            btnText="eGift Support"
            fontSize=".9rem"
          />
          <CustomButton
            color="#000000de"
            btnText="See Terms & Conitions"
            fontSize=".9rem"
          />
          <CustomButton
            color="#000000de"
            btnText="eGift FAQs"
            fontSize=".9rem"
          />
        </Box>
      </Container>
    </>
  );
}

export default GiftCards;

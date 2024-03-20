import React from "react";
// import Navbar from "../components/Navbar";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import MenuSideBar from "../components/MenuSideBar";
import MenuHeader from "../components/MenuHeader";
import { menuData } from "../data/data2";
import image from "../assets/drinksImage.gif";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

function Menu() {
  // const convertToSlug = (str) => {
  //   str = str.replace(/\s+/g, "-").toLowerCase();
  // };
  const InnerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    paddingLeft: "7.5rem",
    paddingTop: "3rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1rem",
      paddingTop: "2rem",
    },
  }));
  const CustomContainer = styled(Box)(({ theme }) => ({
    padding: "0 128px",
    maxWidth: "xl",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  const menuCategories = Object.values(menuData);
  console.log(menuCategories);

  return (
    <>
      <MenuHeader />
      <CustomContainer>
        <MenuSideBar />
        <InnerBox>
          <Typography fontWeight="bold" variant="h5" mb={2}>
            Menu
          </Typography>
          {menuCategories.map((c) => (
            <Box key={c.category}>
              <Typography fontWeight="bold" variant="h6" mb={4}>
                {c.category}
                <Divider style={{ height: "1rem" }} />
              </Typography>
              <Grid container spacing={2} mb={8}>
                {c.subCategory.map((subc) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <Link to={`/menu/${c.path}/${subc.path}`}>
                      <img
                        src={image}
                        alt={subc.name}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "50%",
                          width: "100px",
                        }}
                      />
                    </Link>
                    <Link
                      to={`/menu/${c.path}/${subc.path}`}
                      className={classes.link}
                      // style={{ textDecoration: "none" }}
                    >
                      <Typography variant="h6">{subc.name}</Typography>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </InnerBox>
      </CustomContainer>
    </>
  );
}

export default Menu;

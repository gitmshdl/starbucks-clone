import {
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import image from "../assets/drinksImage.gif";
import React from "react";
import { Link, useParams } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import MenuSideBar from "./MenuSideBar";
import { menuData } from "../data/data2";

function MenuDetail() {
  const InnerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    paddingLeft: "7.5rem",
    paddingTop: "4rem",
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

  const { menuId, categoryId } = useParams();

  const categoryData = menuData[categoryId]?.subCategory.find(
    (item) => item.path === menuId
  );

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  function makeTitle(slug) {
    if (!slug) {
      return ""; // Return an empty string or handle the case appropriately
    }
    let words = slug.split("-");

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(" ");
  }

  return (
    <>
      <MenuHeader />
      <CustomContainer>
        <MenuSideBar />
        <InnerBox>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                style={{ color: "#00000094", textDecoration: "none" }}
                to="/menu"
              >
                Menu
              </Link>
              <Typography style={{ color: "#00000094", fontWeight: "bolder" }}>
                {makeTitle(menuId)}
              </Typography>
            </Breadcrumbs>
          </div>
          <Typography
            variant="h5"
            fontFamily="monospace"
            fontWeight="bold"
            my="1rem"
            mb={{ md: "3rem" }}
          >
            {makeTitle(menuId)}
          </Typography>
          {/* {menuData["drinks"].subCategory[0].subSubCategory[0].name}
          <br />
          {menuData["drinks"].subCategory[0].subSubCategory[0].items} */}
          {/* <MenuBody /> */}
          {categoryData &&
            categoryData.subSubCategory &&
            categoryData.subSubCategory.map((subSubCategory) => (
              <Box key={subSubCategory.name}>
                <Typography variant="h6" fontWeight="bold" mb="2rem">
                  {subSubCategory.name}
                  <Divider style={{ height: "1rem" }} />
                </Typography>

                <Grid container spacing={2} mb="2rem">
                  {subSubCategory.items.map((item, idx) => (
                    <Grid
                      item
                      xs={6}
                      md={3}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // justifyContent: "center",
                      }}
                      key={idx}
                    >
                      <img
                        src={image}
                        alt={item}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "50%",
                          width: "150px",
                        }}
                      />
                      <Typography align="center">{item}</Typography>
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

export default MenuDetail;

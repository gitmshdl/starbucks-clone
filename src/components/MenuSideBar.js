import React from "react";
import { Box, styled } from "@mui/material";
import { menuData } from "../data/data2.js";
import { Link } from "react-router-dom";
import classes from "./MenuSideBar.module.css";

function MenuSideBar() {
  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  return (
    <CustomBox maxWidth={150} pt={4}>
      {Object.values(menuData).map((categoryData) => (
        <Box key={categoryData.path}>
          <h3>{categoryData.category}</h3>
          {categoryData.subCategory?.map((subcategory) => (
            <Box key={subcategory.path} mb={1}>
              <Link
                to={`/menu/${categoryData.path}/${subcategory.path}`}
                className={classes.link}
              >
                {subcategory.name}
              </Link>
            </Box>
          ))}
        </Box>
      ))}
    </CustomBox>
  );
}

export default MenuSideBar;

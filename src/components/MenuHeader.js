import { Box, Divider, styled } from "@mui/material";
import React from "react";
import classes from "./MenuHeader.module.css";
import { NavLink } from "react-router-dom";

function MenuHeader() {
  const CustomBox = styled(Box)(({ theme }) => ({
    paddingLeft: "128px",
    backgroundColor: "#f9f9f9",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
    },
  }));

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
    };
  };
  return (
    <>
      <CustomBox>
        <nav className={classes.nav}>
          <NavLink to="/menu" end style={navLinkStyles}>
            <span>Menu</span>
          </NavLink>
          <NavLink to="/menu/featured" style={navLinkStyles}>
            <span>Featured</span>
          </NavLink>
          <NavLink to="/menu/previous" style={navLinkStyles}>
            <span>Previous</span>
          </NavLink>
          <NavLink to="/menu/favourites" style={navLinkStyles}>
            <span>Favourites</span>
          </NavLink>
        </nav>
      </CustomBox>
      <Divider />
    </>
  );
}

export default MenuHeader;

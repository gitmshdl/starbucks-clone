import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";
import starbucksLogo from "../assets/starbucksLogo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DrawerComp from "./DrawerComp";

const pages = [
  { name: "Menu", link: "/menu" },
  { name: "Rewards", link: "/rewards" },
  { name: "Gift Cards", link: "/giftcards" },
];

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "5.5rem",
        }}
      >
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <img src={starbucksLogo} alt="starbucks" width={50} />
          <Tabs
            aria-label="icon label tabs example"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {pages.map((page, index) => (
              <a href={page.link} key={index}>
                <Tab
                  label={page.name}
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                />
              </a>
            ))}
          </Tabs>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "1rem",
            marginRight: "1rem",
          }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              fontWeight: "bold",
              marginRight: "2.5rem",
            }}
            startIcon={<LocationOnIcon />}
          >
            Find a store
          </Button>
          <Button
            size="small"
            sx={{
              color: "black",
              border: "1px solid black",
              textTransform: "none",
              borderRadius: "50px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.1)",
              },
            }}
          >
            Sign in
          </Button>
          <Button
            size="small"
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              borderRadius: "50px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.6)",
              },
            }}
          >
            Join now
          </Button>
        </Box>
        <DrawerComp pages={pages} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

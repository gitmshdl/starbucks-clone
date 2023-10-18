import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function DrawerComp({ pages }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <Drawer
        // hideBackdrop="false"
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "80vw",
            top: "88px",
          },
        }}
      >
        <List>
          {pages.map((page, index) => (
            <a
              href={page.link}
              key={index}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemText
                  primary={page.name}
                  sx={{
                    padding: "0.3rem",
                    fontWeight: "bolder",
                  }}
                />
              </ListItemButton>
            </a>
          ))}
        </List>
        <Divider variant="middle" />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mx: "1.25rem", my: "1.5rem" }}>
            <Button
              size="small"
              sx={{
                color: "black",
                border: "1px solid black",
                textTransform: "none",
                borderRadius: "50px",
                fontWeight: "bold",
                marginRight: "1rem",
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
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              fontWeight: "bold",
              marginLeft: "1rem",
            }}
            startIcon={<LocationOnIcon />}
          >
            Find a store
          </Button>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="black" />
      </IconButton>
    </Box>
  );
}

export default DrawerComp;

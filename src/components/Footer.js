import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    maxWidth: "xl",
    display: "flex",
    justifyContent: "space-between",
    gap: 8,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
    marginBottom: "7.5px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: 10,
    },
  }));

  return (
    <Box py={2}>
      <Divider sx={{ display: { xs: "none", md: "block" } }} />{" "}
      <Box maxWidth="xl" mt={3}>
        <CustomContainer>
          {sections.map((section) => (
            <Box key={section.id}>
              <Typography sx={{ mb: 2.5, textAlign: "center" }}>
                {section.subtitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Tabs
                  aria-label="icon label tabs example"
                  orientation="vertical"
                >
                  {section.body.map((label, index) => (
                    <Tab
                      key={index}
                      label={label}
                      sx={{
                        fontSize: "0.9rem",
                        textTransform: "none",
                        whiteSpace: "pre-line",
                        alignItems: "center",
                      }}
                    />
                  ))}
                </Tabs>
              </Box>
            </Box>
          ))}
          <Box></Box>
        </CustomContainer>
        {sections.map((section) => (
          <Accordion
            key={section.id}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                {section.subtitle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Tabs aria-label="icon label tabs example" orientation="vertical">
                {section.body.map((tabLabel, index) => (
                  <Tab
                    key={index}
                    label={tabLabel}
                    sx={{
                      color: "black",
                      alignItems: "flex-start",
                      fontSize: "0.9rem",
                      textTransform: "none",
                    }}
                  />
                ))}
              </Tabs>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Divider variant="middle" />
      <Container sx={{ py: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
          <IconButton aria-label="facebook">
            <FacebookIcon
              icon={FacebookIcon}
              sx={{ fontSize: "2.25rem", color: "black" }}
            />
          </IconButton>
          <IconButton aria-label="instagram">
            <InstagramIcon
              icon={InstagramIcon}
              sx={{ fontSize: "2.25rem", color: "black" }}
            />
          </IconButton>
          <IconButton aria-label="twitter">
            <TwitterIcon
              icon={TwitterIcon}
              sx={{ fontSize: "2.25rem", color: "black" }}
            />
          </IconButton>
        </Box>
        <CustomBox>
          <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
            Privacy Notice
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ display: { xs: "none", md: "block" } }}
          />
          <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
            Term of Use
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ display: { xs: "none", md: "block" } }}
          />
          <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
            Do Not Share My Personal Information
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ display: { xs: "none", md: "block" } }}
          />
          <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
            Partners
          </Button>
        </CustomBox>
        <Button
          variant="text"
          sx={{ color: "#00754a", textTransform: "none", fontWeight: "bold" }}
        >
          Passer au site français
        </Button>
        <Typography variant="body2" mt={1}>
          © 2023 Starbucks Coffee Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

const sections = [
  {
    id: 0,
    subtitle: "About Starbucks",
    body: [
      "Our Company",
      "Our Coffee",
      "Stories and News",
      "Investor Relations",
      "Customer Service",
    ],
  },
  {
    id: 1,
    subtitle: "Careers",
    body: [
      "Culture and Values",
      "Diversity and Inclusion",
      "Work at Starbucks",
      "Corporate Careers",
      "Retail Careers",
    ],
  },
  {
    id: 2,
    subtitle: "Social Impact ",
    body: [
      "Overview",
      "People",
      "Planet",
      "Environmental and Social\n Impact Reporting",
    ],
  },
  {
    id: 3,
    subtitle: "For Business Partners",
    body: ["Corporate Gift Card Sales", "Branded Solutions"],
  },
  {
    id: 4,
    subtitle: "Order and Pickup",
    body: [
      "Order on the App",
      "Order on the Web ",
      "Delivery",
      "Orer and Pickup\n Options",
    ],
  },
];

import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";
import first from "../assets/25.png";
import second from "../assets/100.png";
import third from "../assets/200.png";
import fourth from "../assets/300.png";
import fifth from "../assets/400.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function RewardsTabs() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#d3e8e154",
        pt: "2.5rem",
        mt: "3.5rem",
      }}
    >
      <Typography align="center" fontWeight="bold" variant="h5">
        Get your favourites for free
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#1e3932", height: 5 },
            "& .MuiTab-root.Mui-selected": { color: "#000000de !important" },
            "& .MuiTab-root": { fontSize: "2rem" },
          }}
        >
          <Tab
            label={
              <Typography variant="h5" fontWeight="bold">
                25
              </Typography>
            }
            icon={<StarIcon sx={{ color: "#CAA158 ", fontSize: "1rem" }} />}
            iconPosition="end"
            sx={{ color: "#000000de" }}
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Typography variant="h5" fontWeight="bold">
                100
              </Typography>
            }
            icon={<StarIcon sx={{ color: "#CAA158 ", fontSize: "1rem" }} />}
            iconPosition="end"
            sx={{ color: "#000000de" }}
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Typography variant="h5" fontWeight="bold">
                200
              </Typography>
            }
            icon={<StarIcon sx={{ color: "#CAA158 ", fontSize: "1rem" }} />}
            iconPosition="end"
            sx={{ color: "#000000de" }}
            {...a11yProps(2)}
          />
          <Tab
            label={
              <Typography variant="h5" fontWeight="bold">
                300
              </Typography>
            }
            icon={<StarIcon sx={{ color: "#CAA158 ", fontSize: "1rem" }} />}
            iconPosition="end"
            sx={{ color: "#000000de" }}
            {...a11yProps(3)}
          />
          <Tab
            label={
              <Typography variant="h5" fontWeight="bold">
                400
              </Typography>
            }
            icon={<StarIcon sx={{ color: "#CAA158 ", fontSize: "1rem" }} />}
            iconPosition="end"
            sx={{ color: "#000000de" }}
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#d4e9e2",
          }}
        >
          <Box
            display="flex"
            mx={{ xs: "0", md: "20%" }}
            sx={{
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
            }}
          >
            <img src={first} alt="first" style={{ width: "50%" }} />
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography
                align={isSmallScreen ? "center" : "left"}
                fontWeight="bold"
                variant="h5"
              >
                Customize your drink
              </Typography>
              <Typography align={isSmallScreen ? "center" : "left"}>
                Make your drink just right with an extra espresso shot, dairy
                substitute or a dash of your favourite syrup.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#d4e9e2",
          }}
        >
          <Box
            display="flex"
            sx={{
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
            }}
          >
            <img src={second} alt="second" style={{ width: "50%" }} />
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography
                align={isSmallScreen ? "center" : "left"}
                fontWeight="bold"
                variant="h5"
              >
                Brewed hot or iced coffee or tea, bakery item, packaged snack
                and more
              </Typography>
              <Typography align={isSmallScreen ? "center" : "left"}>
                Treat yourself to an iced coffee, buttery croissant, bag of
                chips and more.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#d4e9e2",
          }}
        >
          <Box
            display="flex"
            sx={{
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
            }}
          >
            <img src={third} alt="third" style={{ width: "50%" }} />
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography
                align={isSmallScreen ? "center" : "left"}
                fontWeight="bold"
                variant="h5"
              >
                Handcrafted drink (Cold Brew, lattes and more) or hot breakfast
              </Typography>
              <Typography align={isSmallScreen ? "center" : "left"}>
                Turn good mornings great with a delicious handcrafted drink of
                your choice, breakfast sandwich, snack box or oatmeal on us.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#d4e9e2",
          }}
        >
          <Box
            display="flex"
            sx={{
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
            }}
          >
            <img src={fourth} alt="fourth" style={{ width: "50%" }} />

            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography
                align={isSmallScreen ? "center" : "left"}
                fontWeight="bold"
                variant="h5"
              >
                Lunch sandwich or at-home coffee
              </Typography>
              <Typography align={isSmallScreen ? "center" : "left"}>
                Enjoy a PM pick-me-up with a lunch sandwich or a bag of
                coffee—including Starbucks VIA Instant®.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#d4e9e2",
          }}
        >
          <Box
            display="flex"
            sx={{
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
            }}
          >
            <img src={fifth} alt="fifth" style={{ width: "50%" }} />
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography
                align={isSmallScreen ? "center" : "left"}
                fontWeight="bold"
                variant="h5"
              >
                Select Starbucks® merchandise
              </Typography>
              <Typography align={isSmallScreen ? "center" : "left"}>
                Take home a signature cup, drink tumbler or your choice of
                coffee merch up to $20.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}

export default RewardsTabs;

// #00754a
// #d4e9e2

//#000000de

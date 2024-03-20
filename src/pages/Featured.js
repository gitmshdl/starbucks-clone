import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import img1 from "../assets/featured1.jpg";
import img2 from "../assets/featured2.jpg";
import img3 from "../assets/featured3.webp";
import img4 from "../assets/featured4.webp";
import img5 from "../assets/featured5.webp";
import img6 from "../assets/featured6.jpg";
import FeaturedPoster from "../components/FeaturedPoster";

function Featured() {
  const data = [
    {
      id: 1,
      img: img1,
      bgColor: "#d5d0ea",
      title: "New Iced Lavender Cream Oat Matcha Tea Latte",
      description:
        "A smooth combination of matcha green tea and oat beverage, finished with lavender cream cold foam with subtle floral notes. Includes dairy.",
    },
    {
      id: 2,
      img: img2,
      bgColor: "#d5d0ea",
      title: "Iced Strawberry Oat Matcha Tea Latte",
      description:
        "Matcha green tea and oat beverage with strawberry accents and real strawberry pieces, served over ice.",
    },
    {
      id: 3,
      img: img3,
      bgColor: "#cee8c9",
      title: "Strawberry Açaí Lemonade Starbucks Refreshers® beverage",
      description:
        "Flavours of açaí and passionfruit with lemonade, real strawberry pieces and ice.",
    },
    {
      id: 4,
      img: img4,
      bgColor: "#cee8c9",
      title: "Pineapple Passionfruit Lemonade Starbucks Refreshers® beverage",
      description:
        "A blend of lemonade, passionfruit accents and real pineapple pieces shaken with ice.",
    },
    {
      id: 5,
      img: img5,
      bgColor: "#dbe6f2",
      title: "Potato, Cheddar & Chive Bakes",
      description:
        "Cage-free eggs with diced potatoes, cheese, spinach and chives, baked until golden-brown.",
    },
    {
      id: 6,
      img: img6,
      bgColor: "#dbe6f2",
      title: "Bacon, Sausage & Egg Wrap",
      description:
        "Smoked bacon, pork sausage, cage-free eggs, Cheddar and potatoes in a flour tortilla.",
    },
  ];
  return (
    <Box>
      <Typography
        mt={3}
        mb={7}
        sx={{ fontWeight: "bold" }}
        align="center"
        variant="h3"
        fontFamily="monospace"
      >
        Spring it on
      </Typography>
      <Grid2
        container
        display="flex"
        mx={{ md: 0, lg: 3 }}
        rowSpacing={3.5}
        columnSpacing={{ xs: 0, md: 3.5 }}
      >
        {data.map((d) => (
          <FeaturedPoster
            key={d.id}
            image={d.img}
            title={d.title}
            description={d.description}
            bgColor={d.bgColor}
          />
        ))}
      </Grid2>
    </Box>
  );
}

export default Featured;

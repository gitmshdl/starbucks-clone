import React from "react";
import Navbar from "../components/Navbar";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import Description from "../components/Description";
import Footer from "../components/Footer";
// import pumpkin from "../assets/pumpkin.webp";
import chai from "../assets/chai.webp";
// import pumpkinDrink from "../assets/pumpkinDrink.jpg";
// import rewards from "../assets/starbucksRewards.webp";
import muffin from "../assets/muffin.webp";
import tdaero from "../assets/tdaero.jpg";
// import takeout from "../assets/takeout.jpg";
import bean from "../assets/bean.webp";
import bakes from "../assets/bakes.jpg";

function Home() {
  return (
    <>
      <Navbar />
      {data.map((d) =>
        d.id % 2 === 0 ? (
          <Hero1
            key={d.id}
            image={d.image}
            subtitle={d.subtitle}
            description={d.description}
            bgcolor={d.bgcolor}
            btnText={d.btnText}
            subtitleSize={d.subtitleSize}
            descSize={d.descSize}
            smallSize={d.smallSize}
          />
        ) : (
          <Hero2
            key={d.id}
            image={d.image}
            subtitle={d.subtitle}
            description={d.description}
            bgcolor={d.bgcolor}
            btnText={d.btnText}
            subtitleSize={d.subtitleSize}
            descSize={d.descSize}
          />
        )
      )}
      <Description />
      <Footer />
    </>
  );
}

export default Home;

const data = [
  // {
  //   id: 0,
  //   image: pumpkin,
  //   subtitle: "HBD PSL",
  //   description: 'Cheers for the drink that\'s made "fall" for two decades.',
  //   bgcolor: "#006241",
  //   btnText: "Join the celebration",
  // },
  {
    id: 0,
    image: chai,
    subtitle: "Good idea, chai lovers",
    description:
      "Try the new coffee-free Iced Pumpkin Cream Chai Tea Latte, inspired by our customers. It’s fall in a cup.",
    bgcolor: "#b04a5a",
    btnText: "Order now",
  },
  // {
  //   id: 1,
  //   image: pumpkinDrink,
  //   subtitle: "Pumpkin forever",
  //   description:
  //     "Let the nostalgia begin. Enjoy a steamy creamy Pumpkin Spice Latte topped with pumpkin-pie spices.",
  //   bgcolor: "#b04a5a",
  //   btnText: "Order now",
  // },
  {
    id: 1,
    image: bakes,
    subtitle: "Delicious on the daily",
    description:
      "Try the new Potato, Cheddar & Chive Bakes, a comforting combo of hearty ingredients.",
    bgcolor: "#b04a5a",
    btnText: "Order now",
  },
  // {
  //   id: 2,
  //   image: rewards,
  //   subtitle: "We’re celebrating PSL’s birthday. Yours is next!",
  //   description:
  //     "Join Starbucks® Rewards and enjoy a free drink on your birthday every year.*",
  //   bgcolor: "#1e3932",
  //   subtitleSize: "h5",
  //   descSize: "h6",
  //   btnText: "Join now",
  //   smallSize: true,
  // },
  {
    id: 2,
    image: muffin,
    subtitle: "Twice the spice",
    description:
      "Pair your PSL with its sidekick, the sweet and salty Pumpkin Cream Cheese Muffin.",
    bgcolor: "#d69a2d",
    btnText: "Order now",
  },
  {
    id: 3,
    image: tdaero,
    subtitle: "Spice up your Rewards",
    description:
      "Leaves are falling, Rewards are calling! Join Starbucks Rewards® and link your Aeroplan® account or eligible TD Card to unlock extra perks. **Conditions apply",
    bgcolor: "#006341",
    btnText: "Link now",
    subtitleSize: "h5",
    descSize: "h6",
    smallSize: true,
  },
  // {
  //   id: 5,
  //   image: takeout,
  //   subtitle: "Pumpkin spice, delivered so nice",
  //   description:
  //     "Order now on the DoorDash app and get 20% off your next Starbucks® order of $20+ (up to $10) until October 15. Terms apply.***",
  //   bgcolor: "#1e3932",
  //   btnText: "Order now",
  //   subtitleSize: "h5",
  //   descSize: "h6",
  // },
  {
    id: 6,
    image: bean,
    subtitle: "Learn what's new at Starbucks",
    description:
      "Check out the latest news and stories about our partners (employees), stores and communities.",
    bgcolor: "#006341",
    btnText: "Learn more",
    subtitleSize: "h5",
    descSize: "h6",
    smallSize: true,
  },
];

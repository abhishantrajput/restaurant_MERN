import React from "react";

import HeroSection from "../components/HeroSection";

import About from "../components/About";
import Menu from "../components/Menu";

import Qualities from "../components/Qualities";

import WhoAreWe from "../components/WhoWeAre";
import Team from "../components/MyTeam";
import Reservation from "../components/Reservation";

import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  );
};

export default Home;

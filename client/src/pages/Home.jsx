import React from "react";
import Hero from "../componetns/Home/Hero";
import ServingExperiences from "../componetns/Home/ServingExperiences";
import EnterpriseChallenges from "../componetns/Home/EnterpriseChallanges";
import WireframeGrid from "../componetns/Home/WireframeGrid";
import WhatWeOffer from "../componetns/Home/WhatWeOffer";
import EngagementModel from "../componetns/Home/EngagementModel";
import IndustryExpertise from "../componetns/Home/IndustryExpertise";
import ClientSuccess from "../componetns/Home/ClientSuccess";
import WhoWeAre from "../componetns/Home/WhoWeAre";
import PartnerSlider from "../componetns/Home/PartnerSlider";
import FAQ from "../componetns/Home/FAQ";
import HorizontalCTA from "../componetns/Home/HorizontalCTA";

function Home() {
  return (
    <div>
      <Hero />
      <ServingExperiences />
      <EnterpriseChallenges />
      <WireframeGrid />
      <WhatWeOffer />
      <EngagementModel />
      <IndustryExpertise />
      <ClientSuccess />
      <WhoWeAre />
      <PartnerSlider />
      <FAQ />
      <HorizontalCTA />
    </div>
  );
}

export default Home;

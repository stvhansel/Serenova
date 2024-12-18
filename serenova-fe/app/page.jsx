"use client";

import NavbarAtas from "@components/NavbarAtas";
import Footer from "@components/Footer";
import Section01 from "@components/landingPage/Section01";
import Section02 from "@components/landingPage/Section02";
import Section03 from "@components/landingPage/Section03";
import Section04 from "@components/landingPage/Section04";

const landingPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative border">
      <div className="sticky top-0 z-50"> 
        <NavbarAtas />
      </div>

      <div className="flex-grow bg-[#FBFBFF]">
        <Section01 id="home"/>
        <Section02 id="features"/>
        <Section03 id="about"/>
        <Section04 />
        <Footer />
      </div>
    </div>
  );
};

export default landingPage;

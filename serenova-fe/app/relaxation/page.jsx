"use client";

import React, { useState, useRef, useEffect } from "react"; 
import AtasRelax from "@components/relax/AtasRelax";
import BawahRelax from "@components/relax/BawahRelax";
import MenuRelax from "@components/relax/MenuRelax";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState('/assets/images/relax/gam4.jpg');
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState('/assets/images/relax/gam4.jpg');
  const [fadeIn, setFadeIn] = useState(false); 

  const handleImageClick = (id) => {
    setIsMenuOpen(true);
    if (menuRef.current) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleBackgroundChange = (imageSrc) => {
    setBackgroundImage(imageSrc);
    setCurrentBackgroundImage(imageSrc);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleCloseMenu();
    }
  };

  useEffect(() => {
    setFadeIn(true);
    
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`w-full h-screen relative p-7 ${fadeIn ? 'animate-fade-in' : ''}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay gelap */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10" />
      )}

      {/* CONTENT RELAX */}
      <div className="w-full h-full">
        <AtasRelax />
        <BawahRelax onImageClick={handleImageClick} />
        
        {/* MenuRelax */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: '300px', zIndex: 20 }} 
        >
          <MenuRelax
            onClose={handleCloseMenu}
            currentBackgroundImage={currentBackgroundImage} 
            onBackgroundChange={handleBackgroundChange}
          />
        </div>
      </div>
    </div>
  );
};

const animateFadeIn = `
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Page;

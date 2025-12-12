import React, { useEffect } from "react";

const Marquee = () => {
  useEffect(() => {
    const marqueeItems = document.querySelectorAll(".marquee-item");
    marqueeItems.forEach((marqueeItem) => {
      const clone = marqueeItem.cloneNode(true);
      marqueeItem.parentNode.appendChild(clone);
    });
  }, []);

  return (
    <div className="static-marquee" style={{paddingBottom:'20px'}}>
      <img src="/images/Gupshup-transparent.svg" alt="3M Logo" />

      <img src="/images/YellowAi-transparent.svg" alt="Barstool Store Logo" />

      <img src="/images/Kaleyra-transparent.svg" alt="Buzzfeed Logo" />

      <img src="/images/knowlarity-transparent.svg" alt="Forbes Logo" />

      <img src="/images/Pulsepro-transparent.svg" alt="Macys Logo" />
      <img src="images/resustanability-alpha.svg" alt="resustanability-alpha-icon" />

    </div>
  );
};

export default Marquee;

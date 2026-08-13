import React from "react";

const PartnerLogos = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // marginTop: "24px",
          marginBottom: "24px",
        }}
      ></div>
      <div className="EnterpriseIcons-section container">
        <div className="EnterpriseIcons">
          {/* Sliding Logos for Larger Screens */}
          <div className="logos">
            <div className="logos-slide">
              <img alt="credgenics-logomark" src="/images/partner-logos/credgenics.png" />
              <img alt="aws-logomark" src="/images/partner-logos/aws.png" />
               <img alt="salesforce-logomark" src="/images/partner-logos/salesforce.png" />
                <img alt="fastqlik-logomark" src="/images/partner-logos/fastqlik.png" />
                 <img alt="varisource-logomark" src="/images/partner-logos/varisource.png" />
              {/* Logo Repeat */}
             <img alt="credgenics-logomark" src="/images/partner-logos/credgenics.png" />
              <img alt="aws-logomark" src="/images/partner-logos/aws.png" />
               <img alt="salesforce-logomark" src="/images/partner-logos/salesforce.png" />
                <img alt="fastqlik-logomark" src="/images/partner-logos/fastqlik.png" />
                 <img alt="varisource-logomark" src="/images/partner-logos/varisource.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerLogos;

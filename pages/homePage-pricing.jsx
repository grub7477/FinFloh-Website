import React from "react";

const PricingCards = (props) => {
  const { showBtn = false } = props;
  return (
    <div className="col-lg-10 col-sm-12 col-11 d-flex justify-content-center margin-auto">
      <div className="row g-4" style={{ height: "100%" }}>
        <div className="col-lg-4 col-12">
          {/* <div
            className="complimentary-offer-container"
            style={{ backgroundColor: "#96D300" }}
          >
            <p className="complimentary-offer-text">
              Complimentary New Year Offer
            </p>
          </div> */}
          <div
            className="pricing-card b"
            style={{ borderRadius: "0px !important",border:"2px solid #F6F7F2" }}
          >
            <div className="row">
              <div className="row pric-card-disp">
                <div className="pricing-card-f-border col-lg-12 col-sm-4 col-12">
                  <div className="pricing-card-f">
                    <h2 style={{ fontWeight: "600" }}>Starter</h2>
                  </div>
                </div>
           
                <div
                  className="col-lg-12 col-sm-8 col-12"
                
                >
                         {!showBtn && (
                  <div className="offer-parent-container"   style={{ borderBottom: "2px solid #F6F7F2" }}>
                    <div>
                      <p
                        className="complimentary-price-text"
                        style={{ marginBottom: "0px" }}
                      >
                        ₹25,000
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#002211",
                          marginTop: "5px",
                        }}
                      >
                        Per Month Billed Monthly
                      </p>
                    </div>
                    <p>OR</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div style={{ display: "flex", gap: "10px" }}>
                        <p
                          style={{
                            fontSize: "24px",
                            fontWeight: "500",
                            color: "#002211",
                            marginBottom: "0px",
                          }}
                        >
                          ₹20,000
                        </p>
                        <div className="offer-container">20% off</div>
                      </div>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#002211",
                          marginTop: "5px",
                          textAlign: "center",
                        }}
                      >
                        Per Month Billed Annually
                      </p>
                    </div>
                  </div>
                )}

                  <div className="pricing-card-f">
                  <h3 style={{ visibility: "hidden" }}>Everything in Starter, plus:</h3>
                    <ul>
                      <li>1 user</li>
                      <li>Integration with your ERP & accounting software</li>
                      <li>Invoice creation, retrieval and delivery</li>
                      <li>
                        Collaborative workspaces with buyers & internal teams
                      </li>
                      <li>Dispute management</li>
                      <li>1 custom workflow</li>
                      <li>Customer risk segmentation</li>
                      <li>Automated email collection follow-ups</li>
                      <li>Basic reporting & analytics - DSO, aging, etc.</li>
                      <li>Buyer dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 d-block d-sm-none d-lg-block">
                {showBtn && (
                  <div className="pricing-card-btn">
                    <LinkButton
                      type={LinkBtnType.SECONDARY}
                      theme={Theme.LIGHT}
                      href={BookDemoRedirectLink}
                      openInNewTab={BookDemoRedirectInNewTab}
                      style={{ width: "100%" }}
                    >
                      Book A Demo
                    </LinkButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12">
          <div className="pricing-card" style={{ border: "2px solid #F6F7F2" }}>
            <div className="row">
              <div className="row pric-card-disp">
                {/* <div
                  className="complimentary-offer-container"
                  style={{ backgroundColor: "#96D300" }}
                >
                  <p className="complimentary-offer-text">
                    Complimentary New Year Offer
                  </p>
                </div> */}
                <div className="pricing-card-f-border col-lg-12 col-sm-4 col-12">
                  <div className="pricing-card-f">
                    <h2 style={{ fontWeight: "600" }}>Growth</h2>
                  </div>
                </div>
          
                <div
                  className="col-lg-12 col-sm-8 col-12"
                 
                >
                          {!showBtn && (
                  <div className="offer-parent-container"  style={{ borderBottom: "2px solid #F6F7F2" }}>
                    <div>
                      <p
                        className="complimentary-price-text"
                        style={{ marginBottom: "0px" }}
                      >
                        ₹50,000
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#002211",
                          marginTop: "5px",
                        }}
                      >
                        Per Month Billed Monthly
                      </p>
                    </div>
                    <p>OR</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        flexDirection: "column",
                      }}
                    >
                      <div style={{ display: "flex", gap: "10px" }}>
                        <p
                          style={{
                            fontSize: "24px",
                            fontWeight: "500",
                            color: "#002211",
                            marginBottom: "0px",
                          }}
                        >
                          ₹40,000
                        </p>
                        <div className="offer-container">20% off</div>
                      </div>

                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#002211",
                          marginTop: "5px",
                          textAlign: "center",
                        }}
                      >
                        Per Month Billed Annually
                      </p>
                    </div>
                  </div>
                )}
                  <div className="pricing-card-f">
                    <h3>Everything in Starter, plus:</h3>
                    <ul>
                      <li>5 additional users</li>
                      <li>
                        Integration with your CRM, payments & communication
                        platform
                      </li>
                      <li>
                        Multi-channel collection follow-ups with customized
                        messaging & frequency
                      </li>
                      <li>
                        Customized dunning templates for different situations
                      </li>
                      {/* <li>Custom Workflows</li> */}
                      <li>3 additional custom workflows</li>

                      <li>Cash application with invoice-payment recon</li>
                      <li>
                        Advanced reporting & analytics - employee efficiency,
                        DSO improvement areas, etc
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* d-sm-none d-md-block */}
              {/* <div className="col-4 d-none d-lg-block">
          <div className="pricing-card-f ">
            3
          </div>
          </div> */}
              <div className="col-12 d-block d-sm-none d-lg-block">
                {/* <div className="pricing-card-btn-container"> */}
                {showBtn && (
                  <div className="pricing-card-btn">
                    <LinkButton
                      href={BookDemoRedirectLink}
                      openInNewTab={BookDemoRedirectInNewTab}
                      style={{ width: "100%" }}
                    >
                      Book A Demo
                    </LinkButton>
                  </div>
                )}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-12">
          {/* <div className="complimentary-offer-container"></div> */}
          <div className="pricing-card b" style={{border:"2px solid #F6F7F2"}}>
            <div className="row">
              <div className="row pric-card-disp">
                <div className="pricing-card-f-border col-lg-12 col-sm-4 col-12">
                  <div className="pricing-card-f">
                    <h2 style={{ fontWeight: "600" }}>Enterprise</h2>
                  </div>
                </div>
           
                <div className="col-lg-12 col-sm-8 col-12">
                <div className="offer-parent-container" style={{padding:"22px",borderBottom:"2px solid #F6F7F2"}}>
                  <h3>Get in touch</h3>
                  <p>
                    For a customised pricing plan that perfectly aligns with
                    your enterprise's unique requirements & complexities.
                  </p>
                </div>
                  <div className="pricing-card-f" >
                    
                    <h3 style={{fontFamily:"Satoshi"}}>Everything in Growth, plus:</h3>
                    <ul style={{ paddingBottom: "0px" }}>
                      <li>Unlimited users</li>
                      <li>Customized solutioning</li>
                      <li>Customized reporting & analytics</li>
                      <li>Predictive intelligence for cash forecasting</li>
                      {/* <li style={{ visibility: "hidden", marginBottom: 0 }}>
                          a
                        </li> */}
                      {/* <li>24X7 Support</li> */}
                      <li>
                        AI-Driven predictive intelligence for credit terms,
                        contracts & pricing
                      </li>
                      <li>
                        Support for multiple entities, geographies & currencies
                      </li>
                      <li>Early access to new features</li>
                      <li>Dedicated account manager</li>
                      <li>24x7 support</li>
                      {/* <li></li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 d-block d-sm-none d-lg-block">
                <div className="pricing-card-btn-container">
                  {showBtn && (
                    <div className="pricing-card-btn">
                      <LinkButton
                        type={LinkBtnType.SECONDARY}
                        theme={Theme.LIGHT}
                        href={BookDemoRedirectLink}
                        openInNewTab={BookDemoRedirectInNewTab}
                        style={{ width: "100%" }}
                      >
                        Book A Demo
                      </LinkButton>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;

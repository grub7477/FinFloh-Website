import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import aiAnimation from "../public/images/AIinFinFloh_v4.json";
import MainBanner from "../components/StartupAgencyTwo/MainBanner";
import FaqContent from "../components/Faq/FaqContent";
import ThanksPopup from "../components/Common/ThanksPopup";
import BookDemoButton from "../components/Common/BookDemoButton";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import { Theme } from "../utils/constants";
import { PRODUCT, PRODUCT_INFO_MAP } from "../components/Common/ProductArea";
import HeadComponent from "../components/Common/HeadComponent";
import { generatehomeUtmUrls } from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust.jsx";
import CommonButton from "../components/Common/CommonButton";
import { podcastData } from "../data/podcastData";
import PodcastSlider from "../components/Common/PodcastSlider.jsx";
import NewNewsLetter from "../components/Common/NewNewsLetter";
const utmURLs = generatehomeUtmUrls("homepage");
export const PRODUCT_INFO_MAP_homePage = {
  [PRODUCT.Integration]: {
    title: "Invoice Validation Automation",
    url_navbar: utmURLs.homePage_integrationsAndInvoiceVerification_navbar,
    url_footer: utmURLs.homePage_integrationsAndInvoiceVerification_footer,
  },
  [PRODUCT.CollaborativeCommunication]: {
    title: "Dispute Resolution",
    url_navbar: utmURLs.homePage_collaborativeCommunication_navbar,
    url_footer: utmURLs.homePage_collaborativeCommunication_footer,
  },
  [PRODUCT.AIDrivenCollections]: {
    title: "Collections",
    url_navbar: utmURLs.homePage_accountsReceivableCollections_navbar,
    url_footer: utmURLs.homePage_accountsReceivableCollections_footer,
  },
  [PRODUCT.BuyerIntelligence]: {
    title: "Credit Scoring & Decisions",
    url_navbar: utmURLs.homePage_creditdecisioning_navbar,
    url_footer: utmURLs.homePage_creditdecisioning_footer,
  },

  [PRODUCT.AutomatedCashApp]: {
    title: "Cash Application",
    url_navbar: utmURLs.homePage_automatedCashApplication_navbar,
    url_footer: utmURLs.homePage_automatedCashApplication_footer,
  },
};

const AR_MANAGEMENT = [
  { title: "40%", description: "Reduction in DSO" },
  { title: "250", description: "Man Hour Savings per Month" },
  { title: "50%", description: "Reduction in High-Aging Balance" },
  { title: "70%", description: "Reduction in Decision Making Time" },
];

const VERIFICATION_CONTENT = [
  {
    heading: "Easily Integrate & Verify Invoices",
    btnTxt: "Manage invoices",
    btnLink:
      "https://finfloh.com/invoice-validation-automation?utm_source=homepage_central&utm_medium=finfloh_website",
    data: [
      {
        title: "ERP/CRM integration",
        description:
          "Auto-fetch invoices from ERP/CRM with a native integration to resolve billing ID & cancellation issues",
      },
      {
        title: "Invoice-quote verification",
        description:
          "Verify & correct invoices by matching them with quotes/orders/contracts",
      },
      {
        title: "Invoice delivery & audit",
        description:
          "Send invoices into buyer inboxes & A/P portals and track timelines for audit",
      },
    ],

    imgSrc: [
      "/images/invoicing1.svg",
      "/images/invoicing2.svg",
      "/images/invoicing3.svg",
    ],
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",
  },
  {
    heading: "Close Disputes Faster",
    btnTxt: "Handle Disputes",
    btnLink:
      "https://finfloh.com/collaborative-communication?utm_source=homepage_central&utm_medium=finfloh_website",
    data: [
      {
        title: "Centralized seller-buyer communication",
        description:
          "Enable seamless communication between your sales/finance teams and buyers",
      },
      {
        title: "Customizable dispute workflows",
        description:
          "Implement customizable dispute resolution workflows with defined owners & TATs",
      },
      {
        title: "Predictive analytics",
        description: "Predict and eliminate root-cause of disputes & delays",
      },
    ],
    imgSrc: [
      "/images/disputes1.svg",
      "/images/dispute_2.svg",
      "/images/disputes3.svg",
    ],
    alt: "AI based Credit collaborative-communication FinFloh",
  },
  {
    heading: "Maximize Collection Efforts",
    btnTxt: "Automate Collections",
    btnLink:
      "https://finfloh.com/accounts-receivable-collections?utm_source=homepage_central&utm_medium=finfloh_website",
    data: [
      {
        title: "Automated collection workflows",
        description:
          "Schedule follow-ups with varying tonality and frequency as per buyer category",
      },
      {
        title: "Prioritized collections worklist",
        description:
          "Leverage dynamic and planned collector worklist with prioritization of action items",
      },
      {
        title: "Track responses to follow-ups",
        description:
          "Capture promise-to-pay, payment details & more, shared by buyers over follow-ups",
      },
    ],
    imgSrc: [
      "/images/collection1.png",
      "/images/collection2.png",
      "/images/collection3.png",
    ],
    alt: "AI based Credit Recommendations FinFloh",
  },
  {
    heading: "Eliminate Manual Cash Application",
    btnTxt: "Automate Cash Application",
    btnLink:
      "https://finfloh.com/automated-cash-application-software?utm_source=homepage_central&utm_medium=finfloh_website",
    data: [
      {
        title: "Auto-extract payment advices",
        description:
          "Auto-fetch invoices form ERP/CRM with a native integration to resolve billing ID & cancellation issues",
      },
      {
        title: "ML-based OCR engine",
        description:
          "Leverage ML-based OCR with multi format support for touchless matching",
      },
      {
        title: "Auto-post cash to ERP",
        description: "Auto-update invoice-payment matching information to ERP",
      },
    ],

    imgSrc: [
      "/images/manual1.svg",
      "/images/manual2.svg",
      "/images/manual3.svg",
    ],
    alt: "AI based Credit automated-cash-application FinFloh",
  },
  {
    heading: "Increase Credit Decisions Accuracy",
    btnTxt: "Fastrack Credit Decisions",
    btnLink:
      "https://finfloh.com/credit-decisioning?utm_source=homepage_central&utm_medium=finfloh_website",
    data: [
      {
        title: "ML-Driven Dynamic Credit Scoring Model",
        description:
          "Enhance credit reviews with ML-driven scoring based on buyer behavior & market intelligence",
      },
      {
        title: "AI-driven credit suggestions",
        description:
          "Leverage AI-driven credit onboarding suggestions for credit/payment terms",
      },
      {
        title: "Sync Contract/Credit Terms with CRMs",
        description:
          "Sync FinFloh & your CRM to keep account data updated in real time for improved decision making",
      },
    ],

    imgSrc: [
      "/images/accuracy1.svg",
      "/images/accuracy2.svg",
      // "/images/accuracy3.svg",
      "/images/accuracy4.svg",
    ],
    alt: "AI based credit-decisioning FinFloh",
  },
];

const INVOICE_TXT_CONTAINER = [
  {
    txt: [
      "Auto-fetch invoices form ERP/CRM with a native integration to resolve billing ID & cancellation issues",
      "Verify & correct invoices by matching them with quotes/orders/contracts",
      "Send invoices into buyer inboxes & A/P portals and track timelines for audit",
    ],
    imgSrc: "/images/invoicing1.svg",
  },
  {
    txt: [
      "Enable seamless communication between your sales/finance teams and buyers",
      "Implement customizable dispute resolution workflows with defined owners & TATs",
      "Predict and eliminate root-cause of disputes & delays",
    ],
    imgSrc: "/images/disputes1.svg",
  },
  {
    txt: [
      "Schedule follow-ups with varying tonality and frequency as per buyer category",
      "Leverage dynamic and planned collector worklist with prioritization of action items",
      "Capture promise-to-pay, payment details & more, shared by buyers over follow-ups",
    ],
    imgSrc: "/images/collection1.svg",
  },
  {
    txt: [
      "Auto-fetch invoices form ERP/CRM with a native integration to resolve billing ID & cancellation issues",
      "Leverage ML-based OCR with multi format support for touchless matching",
      "Auto-update invoice-payment matching information to ERP",
    ],
    imgSrc: "/images/manual1.svg",
  },
  {
    txt: [
      "Utilize a robust credit scoring model built with buyer behavior & market intelligence",
      "Leverage AI-driven credit onboarding suggestions for credit/payment terms",
      "Enable accurate cash forecasting with buyer data & analytics",
    ],
    imgSrc: "/images/accuracy1.svg",
  },
];

const Simple_Features_CONTENT = [
  {
    icon: "images/collect-icon.svg",
    text: "Floh <strong>Collect</strong> AI",
    title: "Reduce DSO by Automating A/R Collections",
    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "Automate collection reminders",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Aggressive reminders for overdue invoices",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Assign & audit collectors' worklists",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Accept & track Promise-to-Pay",
      },
    ],
    btnTxt: "Know More",
    btnLink:
      "https://finfloh.com/accounts-receivable-collections?utm_source=homepage_central&utm_medium=finfloh_website",
    imgSrc: "/images/Collect-home.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",
  },

  {
    icon: "images/credit-icon.svg",
    text: "Floh <strong>Credit</strong> AI",
    title: "Accelerate Onboarding with Smarter Credit Decisions",
    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "Automate credit scoring & onboarding",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Use market/historical data for credit intelligence",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Set credit/contract/pricing terms in CRM",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Get real-time credit risk alerts",
      },
    ],
    btnTxt: "Know More",
    btnLink:
      "https://finfloh.com/credit-decisioning?utm_source=homepage_central&utm_medium=finfloh_website",
    imgSrc: "/images/Credit-home.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",
  },
  {
    icon: "images/recon-icon.svg",
    text: "Floh <strong>Recon</strong> AI",
    title: "Optimize the timeliness and accuracy of Cash Application",
    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "Auto-capture payments info from banks, advices",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Extract remittance data from buyer emails/portals",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Smart payment application with invoice/customer",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Dynamic Cash Posting into ERP",
      },
    ],
    btnTxt: "Know More",
    btnLink:
      "https://finfloh.com/automated-cash-application-software?utm_source=homepage_central&utm_medium=finfloh_website",
    imgSrc: "/images/Recon-home.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",
  },
  {
    icon: "images/invoice-icon.svg",
    text: "Floh <strong>Invoice</strong> AI",
    title: "Cut Manual Overheads & Errors in Generating & Sending Invoices",
    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "Auto-Sync with CRM/Order/Contract for Invoicing",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Track invoice timelines and flag discrepancies",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Deliver invoices to buyer inboxes or AP portals",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Convert cancelled invoices into credit memos",
      },
    ],
    btnTxt: "Know More",
    btnLink:
      "https://finfloh.com/invoice-validation-automation?utm_source=homepage_central&utm_medium=finfloh_website",
    imgSrc: "/images/invoice-home.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",
  },
  // {
  //   icon: "images/dispute-icon.svg",
  //   text: "Floh <strong>Dispute</strong> AI",
  //   title: "Resolve Disputes Faster with Automated Resolution and Detection",

  //   featurePoints: [
  //     {
  //       icon: "images/CheckIcon.svg",
  //       description: "Automate dispute resolution workflows",
  //     },
  //     {
  //       icon: "images/CheckIcon.svg",
  //       description: "Spot disputes even before they happen",
  //     },
  //     {
  //       icon: "images/CheckIcon.svg",
  //       description: "Centralize buyer-seller communication",
  //     },
  //     {
  //       icon: "images/CheckIcon.svg",
  //       description: "Predict and eliminate root-cause of disputes",
  //     },
  //   ],
  //   btnTxt: "Know More",
  //   btnLink:
  //     "https://finfloh.com/integrations-and-invoice-verification?utm_source=homepage_central&utm_medium=finfloh_website",
  //   imgSrc: "/images/disputes1.svg",
  //   alt: "AI based Credit integrations-and-invoice-verification FinFloh",
  // },
];

const FinFlohHome = () => {
  const sectionRefs = useRef([]);
  const [success, setSuccess] = useState(false);

  const [currentProgressIndex, setCurrentProgressIndex] = useState(0);
  const [isComponentVisible, setComponentVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.dataset.index === 0) {
              setComponentVisible(false);
            }
            setCurrentSectionIndex(parseInt(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the section is visible
    );

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (index) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  function isScrollingUp() {
    // Previous scroll position tracck
    let lastScrollPosition = window.scrollY || window.pageYOffset;

    // Scroll event listener register
    window.addEventListener("scroll", function () {
      // Current scroll position
      let currentScrollPosition = window.scrollY || window.pageYOffset;

      // Scroll up direction checking
      if (currentScrollPosition < lastScrollPosition) {
        //  scroll up direction
        return true;
      } else {
        //  down direction
        return false;
      }
      lastScrollPosition = currentScrollPosition;
    });
  }

  // useEffect(() => {
  //   let timeoutId;

  //   const debounce = (func, delay) => {
  //     return (...args) => {
  //       clearTimeout(timeoutId);
  //       timeoutId = setTimeout(() => func(...args), delay);
  //     };
  //   };

  //   const handleScroll = () => {
  //     setIsScrolling(true);
  //     const component3 = document.getElementById("component");
  //     if (!component3) return;

  //     // Add some distance from the top
  //     const distanceFromTop = 100; // Adjust this value as needed
  //     const rect = component3.getBoundingClientRect();
  //     const isVisible =
  //       rect.top < window.innerHeight - distanceFromTop && rect.bottom >= 0;
  //     setComponentVisible(isVisible);
  //   };

  //   const debouncedHandleScroll = debounce(handleScroll, 50); // Adjust debounce time as needed

  //   window.addEventListener("scroll", debouncedHandleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", debouncedHandleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (currentSectionIndex === 0 && isScrollingUp()) {
      setComponentVisible(false);
    }
  }, [currentSectionIndex, isScrolling]);

  useEffect(() => {
    const component3 = document.getElementById("component");
    if (!component3) return;

    const observerOptions = {
      threshold: 1, // Intersection ratio threshold
    };
    if (currentSectionIndex === 0 && isScrollingUp()) {
      return setComponentVisible(false); // Set componentVisible to false only when currentSectionIndex is 0 and scrolling up
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setComponentVisible(true);
        } else {
          setComponentVisible(false);
        }
      });
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe the component
    observer.observe(component3);

    // Cleanup function
    return () => {
      observer.unobserve(component3);
    };
  }, []);

  useEffect(() => {
    const containers = document.querySelectorAll(".verification-container");

    containers.forEach((container) => {
      const bars = container.querySelectorAll(".progressBars");

      function startProgress(bars, index = 0) {
        const bar = bars[index];
        if (!bar) return;

        setTimeout(() => {
          if (index <= 2) {
            setCurrentProgressIndex(index);
          }
        }, 0);
        // Setting currentProgressIndex for the current container

        const id = setInterval(() => {
          if (bar.value < bar.max) {
            bar.value++;
          } else {
            clearInterval(id);
            if (index === bars.length - 1) {
              setTimeout(() => {
                bars.forEach((bar) => {
                  bar.value = 0; // Resetting progress bar value
                });
                startProgress(bars, 0); // Restarting from the first progress bar
              }, 3000); // 3 second delay before restart
            } else {
              startProgress(bars, index + 1); // Moving to the next progress bar
            }
          }
        }, 100); // Adjust the interval duration here (in milliseconds)
      }

      startProgress(bars);
    });

    return () => {
      containers.forEach((container) => {
        const bars = container.querySelectorAll(".progressBars");
        bars.forEach((bar) => {
          bar.value = 0;
        });
      });
    };
  }, []);

  const handleSectionClick = (index) => {
    setCurrentProgressIndex(index);
    // Reset progress width when a section is clicked
  };

  const handleButtonClick = () => {
    setPopupVisible(true);
    // setSuccess(true);
    // console.log('yy')
  };
  const handelclosefn = () => {
    setPopupVisible(false);
    setSuccess(false);
  };

  return (
    <>
      <HeadComponent
        title="AI Agents for A/R & Invoice-to-Cash Automation | FinFloh"
        description="Speed up A/R collections, automate cash application, make smarter credit decisions and resolve disputes faster — all with intelligent AI agents built for finance teams."
        canonicalUrl="https://finfloh.com/"
        includePublisher
        includeBreadcrumbs
      />

      <WebsiteLayout
        theme={Theme.DARK}
        showNavber={isComponentVisible}
        currentNavbar={currentSectionIndex}
        scrollToSection={scrollToSection}
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_homePage}
        showMainBannerTop={true}
      >
        {/* section 1 ->> main banner */}
        <MainBanner handleFn={handleButtonClick} utmURLs={utmURLs} />

        {/* section 2 ->> companies logo */}
        <div
          className="book-a-demo-container bg-container"
          style={{ marginTop: "86px" }}
        >
          <div className="container-main EnterpriseIcons">
            <CompaniesLogo />
          </div>
        </div>

        {/* section 2 ->> Invoice-to-Cash Journey section */}
        <div
          className="bg-container"
          style={{
            marginTop: "86px",
            background: "#090A09",
            padding: "80px 0px",
          }}
        >
          <div className="container-main">
            <div className="Invoice-to-Cash-container">
              <div className="features-heading">
                <h2 className="Invoice-to-Cash-heading">
                  From Siloed Data Chaos to Unified Data Warehouse
                </h2>
                <h2 className="feature-main-heading" style={{ color: "#fff" }}>
                  Autonomous & Connected AI Agents <br /> Powering up
                  Order-to-Cash Journey
                </h2>
              </div>
              <div>
                <Lottie
                  animationData={aiAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </div>
              <CommonButton
                text={"Talk to our Team"}
                type={"primary"}
                href={"https://finfloh.com/book-a-demo"}
                openInNewTab={true}
                iconSrc="images/ArrowRight.svg"
                iconPosition="right"
              />
            </div>
          </div>
        </div>

        {/* section 3 ->> new section added */}
        {/* <div className="bg-container" style={{ background: "#F6F7F2" }}>
          <div
            className="collection-cont lending-fold2"
            style={{ flexDirection: "column" }}
          >
            <p className="finfloh-AI-title">
              Applications of FinFloh AI in the Credit-to-Cash Process
            </p>

            <div
              className="container-main autoPilot"
              style={{ padding: "0px" }}
            >
              <div className="finfloh-AI-sections">
                <div className="finfloh-AI-section">
                  <img
                    src="/images/Rectangle 4.svg"
                    alt="Credit risk monitoring FinFloh"
                  />
                  <h2>
                    AI in
                    <br /> Credit Decisioning
                  </h2>
                  <p>
                    ML for credit-risk scoring using market/historical data and
                    AI decisions for credit, contract & pricing terms in CRMs
                    (e.g. Salesforce)
                  </p>
                </div>
                <div className="finfloh-AI-section">
                  <img
                    src="/images/Rectangle 2.svg"
                    alt="Notifications icon FinFloh"
                  />
                  <h2>
                    AI in <br />
                    Collections
                    <br />
                  </h2>
                  <p>
                    AI-powered collectors' worklist for maximum collections
                    efficiency & workflow assignment by risk, amount, and
                    priority
                  </p>
                </div>
                <div className="finfloh-AI-section">
                  <img
                    src="/images/Rectangle 5.svg"
                    alt="FinFloh settings icon"
                  />
                  <h2>
                    AI in
                    <br />
                    Disputes
                    <br />
                  </h2>
                  <p>
                    Predictive AI for advanced dispute intelligence and
                    diagnosis with automated dispute resolution
                  </p>
                </div>
                <div className="finfloh-AI-section">
                  <img
                    src="/images/Rectangle 3.svg"
                    alt="ML based OCR icon FinFloh"
                  />

                  <h2>
                    AI in <br />
                    Cash Application
                  </h2>
                  <p>
                    AI-driven remittance aggregation & capture with exception
                    handling, while capturing short payments & Promise-to-Pay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* section 4 ->> Accounts Receivable Management*/}
        {/* <div className="bg-container" style={{ background: "#F6F7F2" }}>
          <div
            className="collection-cont lending-fold2"
            style={{ flexDirection: "column" }}
          >
            <p
              className="titleStyle"
              style={{ maxWidth: "800px", fontFamily: "Satoshi" }}
            >
              With FinFloh, Accounts Receivable Management is a Breeze
            </p>

            <div
              className="container-main autoPilot"
              style={{ gap: "24px", padding: "0px" }}
            >
              {AR_MANAGEMENT?.map((data) => (
                <div
                  className="card-container"
                  style={{ background: "#FFFFFF" }}
                >
                  <p
                    style={{
                      color: "#00954A",
                      fontSize: "48px",
                      fontWeight: "600",
                    }}
                  >
                    {data?.title}
                  </p>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "20px",
                      fontWeight: "500",
                      maxWidth: "200px",
                    }}
                  >
                    {data?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* section 5 ->> Demo Video Section, dashboard walkthrough video */}
        <div className="bg-container" style={{ margin: "120px 0px" }}>
          <div className="video-wrapper container-main">
            <div className="video-container">
              <div className="iframe-wrapper">
                <iframe
                  className="responsive-iframe"
                  src="https://app.supademo.com/embed/cm7hjoqdj00o7zv0iwha4cj7g?embed_v=2"
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="sec-bg align-c animation-header"
          style={{ padding: "80px 0px" }}
        >
          <div className="section-title">
            <span className="Ar-title">
              Best-in-Class Order-to-Cash Solution Built for CFOs & B2B Finance
              Teams
            </span>
          </div>
        </div> */}

        {/* Commented out dynamic features component
        <div id="component">
          {VERIFICATION_CONTENT.map((data, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
            >
              <ProgressBar
                key={index}
                heading={data?.heading}
                btnTxt={data?.btnTxt}
                CONTENT={data?.data}
                handleSectionClick={handleSectionClick}
                currentProgressIndex={currentProgressIndex}
                imageSources={data?.imgSrc}
                btnLink={data?.btnLink}
                progressIndex={index} // Pass the index of the progress bar as a prop
              />
            </div>
          ))}
        </div>
        */}

        {/* section 6 ->> New simple features component */}
        <div className="bg-container">
          <div className="container-main">
            <div className="features-heading">
              <h2
                className="feature-main-heading"
                style={{ marginBottom: "86px" }}
              >
                Built for CFOs & B2B Finance Teams to Gain Complete Cash Flow
                Control
              </h2>
            </div>

            <div className="features-grid">
              {Simple_Features_CONTENT.map((feature, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-content">
                    <div className="feature-type">
                      <img src={feature.icon} alt={`${feature.text} icon`} />
                      <p dangerouslySetInnerHTML={{ __html: feature.text }} />
                    </div>

                    <h2 className="feature-title">{feature.title}</h2>

                    <div className="feature-points-list">
                      {feature.featurePoints.map((point, index) => (
                        <div key={index} className="feature-point">
                          <img src={point.icon} alt="" className="point-icon" />
                          <p>{point.description}</p>
                        </div>
                      ))}
                    </div>
                    <CommonButton
                      text={feature.btnTxt}
                      type={"primary"}
                      href={feature.btnLink}
                      openInNewTab={true}
                      iconSrc="images/ArrowRight.svg"
                      iconPosition="right"
                    />
                  </div>
                  <div className="feature-image">
                    <img
                      src={feature.imgSrc}
                      alt={feature.alt}
                      className="feature-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* section 7 New ->> Get Paid Faster with FinFloh */}
        <div
          className="bg-container"
          style={{
            margin: "120px 0px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container-main getPaidFaster-container">
            <div className="getPaidFaster">
              <div className="get-paid-faster-content">
                <h3>
                  Seize Every Dollar, Accelerate Every Decision with FinFloh
                </h3>
                <p>
                  Transform data chaos into streamlined cash flow – AI agents
                  designed specifically for the CFO's office that think and act
                  like your finance team.
                </p>
              </div>
              <div className="get-paid-faster-button">
                {" "}
                <BookDemoButton
                  handleFn={handleButtonClick}
                  utmURLs={utmURLs}
                  errorClassName={"homgpage_getPaidDemo_error"}
                />
              </div>
            </div>
          </div>
          <div />
        </div>
        {/* section 7 - old ->> Get Paid Faster with FinFloh */}
        {/* <div className="section-1 sec-bg get-paid-faster">
          <div className="sec-bg-inner fold5-lending">
            <h3>Get Paid Faster with&nbsp;FinFloh</h3>
            <p>Watch our product live in action</p>
            <BookDemoButton
              handleFn={handleButtonClick}
              utmURLs={utmURLs}
              errorClassName={"homgpage_getPaidDemo_error"}
            />
          </div>
        </div> */}

        {/* section 8 ->>  Why Top Businesses Trust FinFloh, awards section */}
        <div
          className="bg-container second-fold"
          style={{
            backgroundColor: "#FFF",
            flexDirection: "column",
            flexWrap: "wrap",
            marginBottom: "86px",
          }}
        >
          <div className="container-main">
            <TestimonialsWhyTrust />
          </div>
        </div>
        {/* section 13 ->> Podcast Heading Slider */}
        <div className="bg-container" style={{ marginTop: "120px" }}>
          <div className="container-main">
            <PodcastSlider podcastData={podcastData} />
          </div>
        </div>

        {/* section 9 ->> Integrate with your ERP/Accounting Software, Payments, CRM, Communications & other tools in just a few simple steps */}
        <section
          className="pt-100 grey_bg w-100 min-h100vh"
          style={{ backgroundColor: "#F6F7F2" }}
        >
          <div className="container w-100 integration_container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 d-flex w-100 justify-content-center align-items-center align-c">
                <div className="single-team content_box p-0 align-c">
                  <h3 className="sub_text_title">Get, set, go on Day 1 !</h3>
                  <h2
                    className="sub_text"
                    style={{ color: "#002211", textAlign: "center" }}
                  >
                    Out-Of-The-Box <br />
                    Seamless Integration
                  </h2>
                  <p className="small_text">
                    Integrate with your ERP/Accounting Software, Payments, CRM,
                    Communications & other tools in just a few simple steps
                    without any coding efforts and start managing your accounts
                    receivables with ease.
                  </p>
                  {/* <LinkButton
                    openInNewTab={true}
                    href={PRODUCT_INFO_MAP[PRODUCT.Integration].url}
                    type={LinkBtnType.PRIMARY}
                  >
                    Integrate now
                  </LinkButton> */}
                  <CommonButton
                    text={"Integrate now"}
                    type={"primary"}
                    href={PRODUCT_INFO_MAP[PRODUCT.Integration].url}
                    openInNewTab={true}
                    iconSrc="images/ArrowRight.svg"
                    iconPosition="right"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block container">
            <img
              src="/images/Platform_Integration_Logos.svg"
              alt="Logos of FinFloh's Integration Partners: Intuit Quickbooks, Zoho, Oracle Netsuite, Xero, Stripe"
              className="integration_img"
            />
          </div>
          <div className="d-md-none container">
            <img
              src="/images/Platform_Integration_Logos_mobile.svg"
              alt="Logos of FinFloh's Integration Partners: Intuit Quickbooks, Zoho, Oracle Netsuite, Xero, Stripe"
              className="platform_mob"
            />
          </div>
        </section>

        {/* section 10 ->> Your data is secure with us */}
        <div
          className="bg-container"
          style={{
            marginTop: "120px",
          }}
        >
          <div className="container-main">
            <div
              className="data-security-container"
              style={{
                backgroundImage: "url('/images/secureWithUsPattern.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="data-security-content">
                <img
                  src="/images/dataSecurity.svg"
                  alt="Data security icon FinFloh"
                />
                <div className="data-security-content-text">
                  <h2>Your data is secure with us</h2>
                  <p>FinFloh is SOC 2, GDPR & ISO compliant</p>
                </div>
              </div>
              <div className="data-security-logos">
                <img src="/images/SOC.svg" alt="SOC compliance badge FinFloh" />
                <img
                  src="/images/ISO.svg"
                  alt="ISO certification badge FinFloh"
                />
                <img
                  src="/images/GDPR.svg"
                  alt="GDPR compliance badge FinFloh"
                />
              </div>
            </div>
          </div>
        </div>

        {/* section 11 ->> FAQ section */}
        <FaqContent />

        {/* section 12 ->> Newsletter */}
        <NewNewsLetter
          type="email"
          onSuccess={handleButtonClick}
          utmURLs={utmURLs}
          heading={"Supercharge your A/R with FinFloh"}
          text={
            "Talk to our finance experts and begin your AR transformation journey today"
          }
        />

        {success && <ThanksPopup open={success} handleClose={handelclosefn} />}
      </WebsiteLayout>
    </>
  );
};

export default React.memo(FinFlohHome);

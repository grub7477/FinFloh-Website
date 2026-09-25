// import
import HeadComponent from "../../components/Common/HeadComponent";
import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import ButtonCommon from "../../components/UI/Button/Button";

import { caseStudies } from "../../data/customer.data";

import CustomerLogos from "../../components/Sections/CustomerLogos/CustomerLogos";

// const

// main
export default function YellowAICustomerPage() {
  return (
    <>
      <HeadComponent />
      <WebsiteLayout>
        <section>
          {caseStudies.map((index) => (
            <div className="container " key={index.slug}>
              <div className="caseStudy">
                <div className="leftSide_Layout">
                  <img src={index.pdfIllustration} alt="caseStudy_backgorund" />
                  {/* Add The sticky left side here, work on the illustration a bit more */}
                  <a href={index.pdfFile} download="yellowai-caseStudy.pdf">
                    <ButtonCommon label="Download PDF" />
                  </a>
                </div>

                <div className="rightSide_Layout">
                  {/* Content to be placed here */}
                  <p className="heading_xs newBrand-color">
                    Case Study / {index.customerName} 
                  </p>
                  <h1 className="h2">{index.hero.headline}</h1>

                  {/* Quote Container setup */}
                  <div className="quoteCard">
                    <p><b>"</b> {index.hero.quote} <b>"</b></p>
                    <span>
                      <p className="heading_md">{index.hero.quoteAuthor.name}</p>
                      <p>{index.hero.quoteAuthor.title}</p>
                    </span>
                  </div>

                  <div className="wrapper-valueProp">
                    {index.stats.map((item, key) => (
                      <div className="valueProp-customer" key={key}>
                        <h2 className="heading_xs newBrand-color">{item.value}</h2>
                        <p>{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="h4">{index.challengeSolutionSummary.challengeTitle}</h2>
                    <p>{index.challengeSolutionSummary.challengeBody}</p>
                  </div>
                  <div>
                    <h2 className="h4">{index.challengeSolutionSummary.solutionTitle}</h2>
                    <p>{index.challengeSolutionSummary.solutionBody}</p>
                  </div>

                  {/* Table To be added here */}
                  <div>
                    <table>
                      <thead>
                        <th className="headerTable">What are the challenges?</th>
                        <th className="headerTable">FinFloh Solution</th>
                      </thead>
                      {index.challengeSolutionTable.map((item, key) => (
                        <tbody key={key}>
                          <td className="itemTable para_sm">{item.challenge}</td>
                          <td className="itemTable para_sm">{item.solution}</td>
                        </tbody>
                      ))}
                    </table>
                  </div>

                  {/* Card Section Below */}
                  {/* <div className="card">
                    <h2 className="h4">{index.about.title}</h2>
                    <p>{index.about.body}</p>
                    <ButtonCommon
                      label={index.about.ctaLabel}
                      href={index.about.ctaLink}
                    />
                  </div> */}

                </div>
              </div>
<div className="logoButtonCombo">
  
                <CustomerLogos />
  
                {/* Logo of customer to added here */}
                <div className="card-customerContact">
                  <div className="">
                    <h3>{index.productBanner.heading}</h3>
                    <p>{index.productBanner.subheading}</p>
                  </div>
                  <ButtonCommon
                    label={index.productBanner.buttonLabel}
                    href={index.productBanner.buttonLink}
                  />
                </div>
</div>
            </div>
          ))}
        </section>
      </WebsiteLayout>
    </>
  );
}

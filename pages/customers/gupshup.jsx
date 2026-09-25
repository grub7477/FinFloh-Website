import HeadComponent from "../../components/Common/HeadComponent";
import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import ButtonCommon from "../../components/UI/Button/Button";
import { caseStudies } from "../../data/customer.data";
import CustomerLogos from "../../components/Sections/CustomerLogos/CustomerLogos";

export default function GupshupCustomerPage() {
  const index = caseStudies.find((c) => c.slug === "gupshup");
  if (!index) return null; // or a 404 fallback

  return (
    <>
      <HeadComponent />
      <WebsiteLayout>
        <section>
          <div className="container">
            <div className="caseStudy">
              <div className="leftSide_Layout">
                <img src={index.pdfIllustration} alt="caseStudy_backgorund" />
              </div>

              <div className="rightSide_Layout">
                <p className="heading_xs newBrand-color">
                  Case Study / {index.customerName}
                </p>
                <h1 className="h2">{index.hero.headline}</h1>

                {index.hero.quote && (
                  <div className="quoteCard">
                    <p>
                      <b>"</b> {index.hero.quote} <b>"</b>
                    </p>
                    <span>
                      <p className="heading_md">
                        {index.hero.quoteAuthor.name}
                      </p>
                      <p>{index.hero.quoteAuthor.title}</p>
                    </span>
                  </div>
                )}

                <div className="wrapper-valueProp">
                  {index.stats.map((item, key) => (
                    <div className="valueProp-customer" key={key}>
                      <h2 className="heading_xs newBrand-color">
                        {item.value}
                      </h2>
                      <p>{item.label}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className="h4">
                    {index.challengeSolutionSummary.challengeTitle}
                  </h2>
                  <p>{index.challengeSolutionSummary.challengeBody}</p>
                </div>
                <div>
                  <h2 className="h4">
                    {index.challengeSolutionSummary.solutionTitle}
                  </h2>
                  <p>{index.challengeSolutionSummary.solutionBody}</p>
                </div>

                <div>
                  <table>
                    <thead>
                      <tr>
                        <th className="headerTable">
                          What are the challenges?
                        </th>
                        <th className="headerTable">FinFloh Solution</th>
                      </tr>
                    </thead>
                    <tbody>
                      {index.challengeSolutionTable.map((item, key) => (
                        <tr key={key}>
                          <td className="itemTable para_sm">
                            {item.challenge}
                          </td>
                          <td className="itemTable para_sm">{item.solution}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="logoButtonCombo">
              <CustomerLogos />
              <div className="card-customerContact">
                <div>
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
        </section>
      </WebsiteLayout>
    </>
  );
}

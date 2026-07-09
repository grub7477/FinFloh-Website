import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "./productSection.module.scss";
import ButtonCommon from "../../UI/Button/Button";

const INITIAL_QUESTIONS = 6;

const ProductSectionNew = ({
  features = [],
  description,
  title,
  kicker,
  btnText,
  btnLink,
  icon,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [activeUuid, setActiveUuid] = useState(features[0]?.uuid);

  const visibleFeatures = features.slice(
    0,
    showAll ? undefined : INITIAL_QUESTIONS
  );

  // react-accessible-accordion calls onChange with an array of expanded uuids
  const handleAccordionChange = (expandedUuids) => {
    const newUuid = expandedUuids[expandedUuids.length - 1];
    if (newUuid) setActiveUuid(newUuid);
  };

  const activeFeature =
    features.find((item) => item.uuid === activeUuid) ?? features[0];

  return (
    <section className="section container">
      <div className="stack">
        {kicker && (
          <h3 className="heading_md highlight-text--gradient">{kicker}</h3>
        )}
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
      </div>

      <div className="section--sm grid--1by3">
        <div className="faq-accordion-container">
          <div className="faq-accordion stack stack--loose stack--spacebetween">
            <Accordion
              allowZeroExpanded
              preExpanded={[features[0]?.uuid]}
              onChange={handleAccordionChange}
            >
              {visibleFeatures.map((item, index) => (
                <AccordionItem
                  key={item.uuid ?? index}
                  uuid={item.uuid ?? String(index)}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="h5">
                      {item.title}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="para_sm margin-bottom">
                    {item.description}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>

            <ButtonCommon label={btnText} href={btnLink} variant="primary" endIcon={icon} />
          </div>
        </div>

        <div className={styles.illustrationPanel}>
          {features.map((item, index) => (
            <div
              key={item.uuid ?? index}
              className={`stack stack--loose ${styles.illustration} ${
                item.uuid === activeFeature?.uuid ? styles.isActive : ""
              }`}
            >
              <img src={item.icon} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSectionNew;
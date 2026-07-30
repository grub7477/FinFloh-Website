import ButtonCommon from "../../UI/Button/Button";
import style from "./HeroSection.module.scss";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { validateBusinessEmail } from "../../../utils/emailValidation";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import BookDemoButton from "../../Common/BookDemoButton";
// import Marquee from "../Common/Marque";

const HeroSectionNew = ({
  variant = "main",
  title,
  kicker,
  description,
  btnPrimaryText,
  btnPrimaryLink,
  btnVariant,
  image,
  utmURLs,
  icon,
}) => {
  const classes = [style.hero_section, style[`hero--${variant}`]]
    .filter(Boolean)
    .join(" ");

  return (
    <section>
      <div className={`container ${style.hero__container}`}>
        <div className={style.hero__contentWrapper}>
          <h2 className="heading_xs highlight-text--gradient ">{kicker}</h2>
          <h1>{title}</h1>
          {description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className={style.buttonWrapper}>
            <ButtonCommon
              label={btnPrimaryText}
              href={btnPrimaryLink}
              variant="primary"
              endIcon={icon}
            />
          </div>
        </div>
        <div className={`overflow-hidden ${style.imageWrapper}`}>
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;

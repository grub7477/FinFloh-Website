import ButtonCommon from "../../UI/Button/Button";
import style from "./HeroSection.module.scss";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { validateBusinessEmail } from "../../../utils/emailValidation";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import BookDemoButton from "../../Common/BookDemoButton";
// import Marquee from "../Common/Marque";

const HeroSection = ({
  variant = "main",
  title,
  kicker,
  description,
  btnText,
  btnLink,
  btnVariant,
  image,
  utmURLs,
}) => {
  const classes = [style.hero_section, style[`hero--${variant}`]]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.header}>
            <h2 style={{ display: "none" }}>{kicker}</h2>
            <h1 className={`ch30 ${style.heading}`}>{title}</h1>
          </div>
          <p className={style.para}>{description}</p>
          <BookDemoButton text={"Book A Demo"} utmURLs={utmURLs} />
          {/* <ButtonCommon label={btnText} href={btnLink} variant={btnVariant} /> */}
          <div className={style.offerBanner}>
            {/* <img src="/icons/flohsense-ai/offer_icon.svg" alt="Offer Icon" /> */}
            <div
              className="stack stack--extra-tight"
              style={{ alignItems: "flex-start" }}
            >
              {/* <h3 className="text-inverse heading_md">
                Start a 100-Email Pilot
              </h3> */}
              <p className="para_sm header">
                <b>Start a 100-Email Pilot:</b>
              </p>
              <p className="para_sm">
                Forward a customer email to flohsenseai@finfloh.com and see
                FlohSense AI Agent in action; no ERP or email integration
                needed.
              </p>
            </div>
          </div>
        </div>
        <img className={style.hero__image} src={image} alt={title} />
      </div>
    </section>
  );
};

export default HeroSection;

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
          <BookDemoButton text={"Submit"} utmURLs={utmURLs} />
          {/* <ButtonCommon label={btnText} href={btnLink} variant={btnVariant} /> */}
        </div>
        <img className={style.hero__image} src={image} alt={title} />
      </div>
    </section>
  );
};

export default HeroSection;

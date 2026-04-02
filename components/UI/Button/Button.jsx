import React from "react";
import style from "./Button.module.scss";

const ButtonCommon = ({
  target = "_self",
  label = "",
  href = "",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  Inverse = false,
  startIcon,
  endIcon,
  onClick = () => {},
}) => {
  const classes = [
    style.btn,
    style[`btn--${variant}`],
    fullWidth && style["btn--full"],
    disabled && style["btn--disabled"],
    Inverse && style["btn--inverse"],
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {startIcon && <span className={style["btn__icon"]}>{startIcon}</span>}
      <span className={style["btn__label"]}>{label}</span>
      {endIcon && <span className={style["btn__icon"]}>{endIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ButtonCommon;

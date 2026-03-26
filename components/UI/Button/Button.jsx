import React from "react";
import style from "./Button.module.scss";

const ButtonCommon = ({
  label = "Placeholder",
  href,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  leftIcon,
  rightIcon,
  target = "_self",
  onClick,
}) => {
  const classes = [
    style.btn,
    style[`btn--${variant}`],
    fullWidth && style["btn--full"],
    disabled && style["btn--disabled"],
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {leftIcon && <span className={style["btn--icon"]}>{leftIcon}</span>}
      <span className={style["btn--label"]}>{label}</span>
      {rightIcon && <span className={style["btn--icon"]}>{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
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

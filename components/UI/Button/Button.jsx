import React from "react";
import style from "./Button.module.scss";
import "./Button.module.scss";

const Button = ({
  children,
  variant = "primary",
  leftIcon,
  rightIcon,
  disabled = false,
  fullWidth = false,
  href,
  target = "_self",
  onClick,
  style = {},
}) => {
  const classes = [
    "btn",
    `btn--${variant}`,
    fullWidth && "btn--full",
    disabled && "btn--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {leftIcon && <span className="btn__icon">{leftIcon}</span>}
      <span className="btn__text">{children}</span>
      {rightIcon && <span className="btn__icon">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        style={style}
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
      className={variant}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {content}
    </button>
  );
};

export default Button;

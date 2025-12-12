import React, { useState } from 'react';

const buttonStyles = {
  primary: {
    background: '#00954A',
    color: '#FFFFFF',
    border: 'none',
  },
  secondary: {
    background: '#ffffff',
    color: '#111827',
    border: '1px solid #111827',
  },
};

const hoverStyles = {
  primary: {
    background: '#374151',
  },
  secondary: {
    background: '#374151',
    color: '#ffffff',
  },
};

const CommonButton = ({
  text = 'Button',
  type = 'primary',
  leftIcon,
  rightIcon,
  iconSrc,
  hoverIconSrc,
  iconPosition = 'left',
  isDisabled = false,
  width = 'auto',
  CustomWidth = 'auto',
  href,
  openInNewTab = false,
  onClick = () => {},
  className = '',
  style = {}, // <-- Add style prop
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseStyle = buttonStyles[type] || buttonStyles.primary;
  const hoverStyle = hoverStyles[type] || hoverStyles.primary;

  const iconElement = iconSrc ? (
    <img
      src={isHovered ? hoverIconSrc || iconSrc : iconSrc}
      alt="icon"
      style={{
        width: '20px',
        height: '20px',
        display: 'block',
        objectFit: 'contain',
      }}
    />
  ) : iconPosition === 'left' ? (
    <div style={{ display: 'flex', alignItems: 'center' }}>{leftIcon}</div>
  ) : (
    <div style={{ display: 'flex', alignItems: 'center' }}>{rightIcon}</div>
  );

  const buttonContent = (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '12px 16px',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.5',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        ...baseStyle,
        ...(isHovered && !isDisabled && hoverStyle),
        width,
        transition: 'all 0.3s ease-in-out',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={!isDisabled ? onClick : undefined}
      className={`common-button ${className}`}
    >
      {iconPosition === 'left' && iconElement}
      <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{text}</span>
      {iconPosition === 'right' && iconElement}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : ''}
        style={{ textDecoration: 'none', display: 'inline-block'}}
        className={`common-button-link ${className}`} // <-- add className here
      >
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default CommonButton; 
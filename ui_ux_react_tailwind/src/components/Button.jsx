import React from 'react';
import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className, px, href, onClick, children, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;
  const renderClass = () => (
    <button className={classes} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderHref = () => (
    <a className={classes} href={href}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderHref() : renderClass();
};

export default Button;

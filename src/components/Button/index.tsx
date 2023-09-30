import { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

function Button({
  children,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={`btn ${variant}-btn ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

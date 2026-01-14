import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  showArrow = false,
  className,
  disabled = false,
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm',
    secondary: 'bg-white text-navy-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-primary-500 shadow-sm',
    outline: 'bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    ghost: 'bg-transparent text-charcoal-700 hover:text-primary-600 hover:bg-gray-100 focus:ring-primary-500',
    white: 'bg-white text-navy-900 hover:bg-gray-100 focus:ring-white focus:ring-offset-navy-900 shadow-sm',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" />}
      {showArrow && <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(combinedClassName, 'group')}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(combinedClassName, 'group')}
    >
      {content}
    </button>
  );
}

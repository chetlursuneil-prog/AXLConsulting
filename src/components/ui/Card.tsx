import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface CardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  href?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'bordered' | 'dark' | 'gradient';
  className?: string;
  showArrow?: boolean;
}

export default function Card({
  title,
  description,
  icon: Icon,
  href,
  children,
  variant = 'default',
  className,
  showArrow = false,
}: CardProps) {
  const variantStyles = {
    default: 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-soft-lg',
    bordered: 'bg-white border-2 border-gray-200 hover:border-primary-500',
    dark: 'bg-navy-800 border border-navy-700 hover:border-navy-600',
    gradient: 'bg-gradient-to-br from-primary-600 to-primary-800 text-white',
  };

  const content = (
    <>
      {Icon && (
        <div
          className={clsx(
            'w-12 h-12 rounded-xl flex items-center justify-center mb-5',
            variant === 'gradient' || variant === 'dark'
              ? 'bg-white/10'
              : 'bg-primary-50'
          )}
        >
          <Icon
            className={clsx(
              'h-6 w-6',
              variant === 'gradient' || variant === 'dark'
                ? 'text-white'
                : 'text-primary-600'
            )}
          />
        </div>
      )}
      <h3
        className={clsx(
          'text-xl font-semibold mb-3',
          variant === 'gradient' || variant === 'dark' ? 'text-white' : 'text-navy-900'
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={clsx(
            'text-sm leading-relaxed',
            variant === 'gradient' || variant === 'dark'
              ? 'text-white/80'
              : 'text-charcoal-600'
          )}
        >
          {description}
        </p>
      )}
      {children}
      {showArrow && href && (
        <div
          className={clsx(
            'mt-5 flex items-center text-sm font-medium',
            variant === 'gradient' || variant === 'dark'
              ? 'text-white'
              : 'text-primary-600'
          )}
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </>
  );

  const cardClassName = clsx(
    'rounded-2xl p-6 transition-all duration-300 group',
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}

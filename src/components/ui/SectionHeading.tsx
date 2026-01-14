import { clsx } from 'clsx';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  theme?: 'light' | 'dark';
  size?: 'default' | 'large';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = 'center',
  theme = 'light',
  size = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'max-w-3xl',
        alignment === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            'text-sm font-semibold uppercase tracking-wider mb-3',
            theme === 'light' ? 'text-primary-600' : 'text-primary-400'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          'font-bold tracking-tight',
          theme === 'light' ? 'text-navy-900' : 'text-white',
          size === 'large' ? 'text-display-md md:text-display-lg' : 'text-display-sm md:text-display-md'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-4 text-lg leading-relaxed',
            theme === 'light' ? 'text-charcoal-600' : 'text-gray-300'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

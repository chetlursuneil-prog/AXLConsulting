import { clsx } from 'clsx';

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
  theme?: 'light' | 'dark';
}

export default function Stat({ value, label, suffix, theme = 'light' }: StatProps) {
  return (
    <div className="text-center">
      <div
        className={clsx(
          'text-4xl md:text-5xl font-bold',
          theme === 'light' ? 'text-primary-600' : 'text-white'
        )}
      >
        {value}
        {suffix && <span className="text-2xl md:text-3xl">{suffix}</span>}
      </div>
      <div
        className={clsx(
          'mt-2 text-sm font-medium uppercase tracking-wide',
          theme === 'light' ? 'text-charcoal-600' : 'text-gray-400'
        )}
      >
        {label}
      </div>
    </div>
  );
}

interface StatsGridProps {
  stats: StatProps[];
  columns?: 2 | 3 | 4;
  theme?: 'light' | 'dark';
  className?: string;
}

export function StatsGrid({ stats, columns = 4, theme = 'light', className }: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  return (
    <div className={clsx('grid gap-8 md:gap-12', gridCols[columns], className)}>
      {stats.map((stat, index) => (
        <Stat key={index} {...stat} theme={theme} />
      ))}
    </div>
  );
}

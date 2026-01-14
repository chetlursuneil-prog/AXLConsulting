'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation } from '@/data/site-config';
import { clsx } from 'clsx';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHomePage = pathname === '/';

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className={clsx(
              'text-2xl font-bold tracking-tight transition-colors',
              isScrolled || !isHomePage ? 'text-navy-900' : 'text-white'
            )}>
              AXL
              <span className={clsx(
                'font-light ml-1',
                isScrolled || !isHomePage ? 'text-primary-600' : 'text-primary-400'
              )}>
                Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.main.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              const hasDropdown = item.name === 'Services' || item.name === 'Industries';
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center',
                      isScrolled || !isHomePage
                        ? isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-charcoal-700 hover:text-primary-600 hover:bg-gray-100'
                        : isActive
                          ? 'text-white bg-white/10'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.name}
                    {hasDropdown && (
                      <ChevronDown className={clsx(
                        'ml-1 h-4 w-4 transition-transform',
                        activeDropdown === item.name && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2 w-64 z-50">
                      <div className="bg-white rounded-xl shadow-soft-lg border border-gray-100 py-2 animate-fade-in">
                        {(item.name === 'Services' ? navigation.services : navigation.industries).map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-charcoal-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={clsx(
                'px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200',
                isScrolled || !isHomePage
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white text-navy-900 hover:bg-gray-100'
              )}
            >
              Start a Conversation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={clsx(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled || !isHomePage
                ? 'text-navy-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in-down">
            <div className="py-4 space-y-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'block px-4 py-3 text-base font-medium rounded-lg transition-colors',
                    pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-charcoal-700 hover:text-primary-600 hover:bg-gray-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/contact"
                  className="block w-full py-3 text-center text-white bg-primary-600 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

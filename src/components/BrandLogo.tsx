import React, { useId } from 'react';

export type BrandLogoVariant = 'book-star' | 'pa-monogram' | 'shield-crest' | 'sunrise-70';

interface BrandLogoProps {
  /** Logo design variant */
  variant?: BrandLogoVariant;
  /** Icon size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Additional wrapper className */
  className?: string;
}

const SIZE_MAP = {
  sm: 'w-9 h-9',
  md: 'w-11 h-11',
  lg: 'w-14 h-14',
} as const;

/**
 * Custom SVG emblem logo for PA 2570 (โรงเรียนโพนงามพิทยานุกูล).
 * Supports 4 distinct visual concepts via the `variant` prop.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'pa-monogram',
  size = 'md',
  className = '',
}) => {
  const uid = useId().replace(/:/g, '');

  return (
    <div className={`${SIZE_MAP[size]} shrink-0 select-none ${className}`}>
      {variant === 'book-star' && <BookStarSvg uid={uid} />}
      {variant === 'pa-monogram' && <PaMonogramSvg uid={uid} />}
      {variant === 'shield-crest' && <ShieldCrestSvg uid={uid} />}
      {variant === 'sunrise-70' && <Sunrise70Svg uid={uid} />}
    </div>
  );
};

const BookStarSvg: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm" aria-label="PA 2570 Logo - Book & Star">
    <defs>
      <linearGradient id={`bs-bg-${uid}`} x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="55%" stopColor="#4f46e5" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.92" />
      </linearGradient>
      <linearGradient id={`bs-book-${uid}`} x1="16" y1="30" x2="48" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
      <linearGradient id={`bs-star-${uid}`} x1="26" y1="10" x2="38" y2="26" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="18" fill={`url(#bs-bg-${uid})`} />
    <rect x="3.5" y="3.5" width="57" height="57" rx="16.5" stroke="white" strokeOpacity="0.28" strokeWidth="1.5" />
    <circle cx="20" cy="14" r="14" fill="white" fillOpacity="0.1" />
    <path d="M32 11L34.4 17.6L41 20L34.4 22.4L32 29L29.6 22.4L23 20L29.6 17.6L32 11Z" fill={`url(#bs-star-${uid})`} />
    <path d="M21 34.5L32 25.5L43 34.5" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.95" />
    <path d="M15 38.5C20.5 35.8 27 36.6 32 41.2C37 36.6 43.5 35.8 49 38.5V47.5C43.5 44.8 37 45.6 32 50.2C27 45.6 20.5 44.8 15 47.5V38.5Z" fill={`url(#bs-book-${uid})`} />
    <path d="M32 41.2V50.2" stroke="#4f46e5" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PaMonogramSvg: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm" aria-label="PA 2570 Logo - Executive Monogram">
    <defs>
      <linearGradient id={`pm-bg-${uid}`} x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#082848" />
        <stop offset="55%" stopColor="#03589f" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
      <linearGradient id={`pm-gold-${uid}`} x1="16" y1="46" x2="48" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="18" fill={`url(#pm-bg-${uid})`} />
    <rect x="4" y="4" width="56" height="56" rx="16" stroke="#7cc7fb" strokeOpacity="0.35" strokeWidth="1.5" />
    {/* Letter P */}
    <path d="M16 40V18H25.5C30 18 33 20.8 33 25C33 29.2 30 32 25.5 32H21V40H16ZM21 27.5H25C27 27.5 28.2 26.5 28.2 25C28.2 23.5 27 22.5 25 22.5H21V27.5Z" fill="white" />
    {/* Letter A */}
    <path d="M31.5 40L38.8 18H44.2L51.5 40H46.3L44.9 35.4H38.1L36.7 40H31.5ZM39.3 31.2H43.7L41.5 23.8L39.3 31.2Z" fill="#bae6fd" />
    {/* Gold Bar & 2570 Accent */}
    <rect x="16" y="45" width="32" height="3.5" rx="1.75" fill={`url(#pm-gold-${uid})`} />
    <circle cx="49" cy="15" r="3" fill="#fbbf24" />
  </svg>
);

const ShieldCrestSvg: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm" aria-label="PA 2570 Logo - Shield Crest">
    <defs>
      <linearGradient id={`sc-bg-${uid}`} x1="10" y1="6" x2="54" y2="58" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#4338ca" />
      </linearGradient>
      <linearGradient id={`sc-gold-${uid}`} x1="24" y1="12" x2="40" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Modern Shield Silhouette */}
    <path d="M32 4L54 11.5V29.5C54 43.8 44.6 54.4 32 59.5C19.4 54.4 10 43.8 10 29.5V11.5L32 4Z" fill={`url(#sc-bg-${uid})`} />
    <path d="M32 6.8L51.2 13.4V29.5C51.2 42.2 42.9 51.6 32 56.4C21.1 51.6 12.8 42.2 12.8 29.5V13.4L32 6.8Z" stroke="white" strokeOpacity="0.28" strokeWidth="1.4" />
    {/* Laurel Wreath Left & Right */}
    <path d="M21 24C18 29 18.5 37 24 42.5C25.5 44 27.5 45 29.5 45.5" stroke="#bae6fd" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M43 24C46 29 45.5 37 40 42.5C38.5 44 36.5 45 34.5 45.5" stroke="#bae6fd" strokeWidth="2.4" strokeLinecap="round" />
    {/* Center Torch / Pillar */}
    <path d="M29 29H35L33.8 43H30.2L29 29Z" fill="white" />
    <rect x="27" y="26.5" width="10" height="2.8" rx="1.4" fill="white" />
    {/* Flame / Star */}
    <path d="M32 13C34.5 16.5 36.5 19 36.5 21.5C36.5 24 34.5 25.5 32 25.5C29.5 25.5 27.5 24 27.5 21.5C27.5 19 29.5 16.5 32 13Z" fill={`url(#sc-gold-${uid})`} />
  </svg>
);

const Sunrise70Svg: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm" aria-label="PA 2570 Logo - Rising Horizon">
    <defs>
      <linearGradient id={`sr-sky-${uid}`} x1="8" y1="4" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="60%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id={`sr-sun-${uid}`} x1="32" y1="14" x2="32" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#fb923c" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="30" fill={`url(#sr-sky-${uid})`} />
    <rect x="3.5" y="3.5" width="57" height="57" rx="28.5" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
    {/* Sun */}
    <circle cx="32" cy="27" r="10.5" fill={`url(#sr-sun-${uid})`} />
    {/* Sun Rays */}
    <path d="M32 11V13.5M20.5 15.5L22.3 17.3M43.5 15.5L41.7 17.3" stroke="#fef08a" strokeWidth="2.2" strokeLinecap="round" />
    {/* Horizon Wave 1 */}
    <path d="M8 38C15 32 23 32 32 37C41 42 49 40 56 35V46C49 52 41 56 32 56C20 56 11 48 8 38Z" fill="white" fillOpacity="0.92" />
    {/* Horizon Wave 2 */}
    <path d="M12 46C20 41 28 42 35 46C42 50 48 48 53 45C48 53 40 58 32 58C23 58 16 53 12 46Z" fill="#bae6fd" />
  </svg>
);

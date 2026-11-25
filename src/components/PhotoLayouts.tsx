import React, { useState } from 'react';
import { VisualPhotoItem } from '../data/slidesData';
import {
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Columns,
  Maximize2,
  Sparkles,
  GitCommitHorizontal,
  Layers,
  ArrowRight,
  PanelLeft,
  ListChecks,
  Copy,
  Film,
  SlidersHorizontal,
  Slash,
} from 'lucide-react';

export type QuadPhotoLayout =
  | 'bento'
  | 'magazine'
  | 'spotlight'
  | 'polaroid'
  | 'timeline'
  | 'accordion'
  | 'split-list'
  | 'deck'
  | 'filmstrip';

export type DuoPhotoLayout =
  | 'split-70-30'
  | 'stepped'
  | 'overlapping'
  | 'editorial-card'
  | 'compare-slider'
  | 'diagonal'
  | 'polaroid-duo';

interface QuadPhotoShowcaseProps {
  photos: VisualPhotoItem[];
  defaultLayout?: QuadPhotoLayout;
  onPhotoClick: (photo: VisualPhotoItem) => void;
  accentBadgeClass?: string;
}

const QUAD_LAYOUT_OPTIONS: { id: QuadPhotoLayout; label: string; icon: React.ElementType }[] = [
  { id: 'bento', label: 'Bento', icon: LayoutGrid },
  { id: 'magazine', label: 'Magazine', icon: Columns },
  { id: 'accordion', label: 'Accordion', icon: PanelLeft },
  { id: 'split-list', label: 'List+View', icon: ListChecks },
  { id: 'spotlight', label: 'Spotlight', icon: Maximize2 },
  { id: 'deck', label: 'Deck', icon: Copy },
  { id: 'polaroid', label: 'Polaroid', icon: Sparkles },
  { id: 'timeline', label: 'Timeline', icon: GitCommitHorizontal },
  { id: 'filmstrip', label: 'Filmstrip', icon: Film },
];

/**
 * Renders 4 photos with 9 selectable visual layouts and a compact layout switcher bar.
 */
export const QuadPhotoShowcase: React.FC<QuadPhotoShowcaseProps> = ({
  photos,
  defaultLayout = 'bento',
  onPhotoClick,
  accentBadgeClass = 'text-sky-800',
}) => {
  const [layout, setLayout] = useState<QuadPhotoLayout>(defaultLayout);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!photos || photos.length === 0) return null;

  const safeIdx = Math.min(activeIndex, photos.length - 1);
  const activePhoto = photos[safeIdx];

  const renderOverlayCard = (
    p: VisualPhotoItem,
    idx: number,
    heightClass: string,
    extraClass = ''
  ) => (
    <div
      key={idx}
      onClick={() => onPhotoClick(p)}
      className={`cursor-pointer group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${heightClass} ${extraClass}`}
    >
      <img
        src={p.imageUrl}
        alt={p.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

      <div className="absolute top-3 left-3">
        <span
          className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold bg-white/95 shadow-md border border-white ${accentBadgeClass}`}
        >
          {p.badge}
        </span>
      </div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="p-1.5 rounded-full bg-black/55 text-white backdrop-blur-sm">
          <ZoomIn className="w-4 h-4" />
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
        <h4 className="font-heading font-bold text-xs sm:text-sm lg:text-base text-white line-clamp-2 leading-snug">
          {p.title}
        </h4>
        {p.highlight && (
          <p className="text-[10px] sm:text-xs text-sky-200 line-clamp-1">{p.highlight}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-3">
      {/* Compact Layout Switcher */}
      <div className="flex items-center justify-end">
        <div className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-2xs max-w-full">
          <span className="text-[10px] font-semibold text-slate-400 px-2 hidden sm:inline">
            รูปแบบภาพ:
          </span>
          {QUAD_LAYOUT_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const active = layout === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setLayout(opt.id)}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                  active
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. BENTO HERO (1 Large Left + 3 Right) */}
      {layout === 'bento' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4">
          <div className="lg:col-span-6">
            {renderOverlayCard(photos[0], 0, 'h-64 sm:h-80 lg:h-[460px]')}
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {photos[1] && renderOverlayCard(photos[1], 1, 'h-52 sm:h-56 lg:h-[222px]', 'sm:col-span-2')}
            {photos[2] && renderOverlayCard(photos[2], 2, 'h-52 sm:h-52 lg:h-[222px]')}
            {photos[3] && renderOverlayCard(photos[3], 3, 'h-52 sm:h-52 lg:h-[222px]')}
          </div>
        </div>
      )}

      {/* 2. MAGAZINE EDITORIAL (Asymmetric 7/5 + 5/7) */}
      {layout === 'magazine' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {photos[0] && (
            <div className="lg:col-span-7">{renderOverlayCard(photos[0], 0, 'h-60 sm:h-72 lg:h-[280px]')}</div>
          )}
          {photos[1] && (
            <div className="lg:col-span-5">{renderOverlayCard(photos[1], 1, 'h-60 sm:h-72 lg:h-[280px]')}</div>
          )}
          {photos[2] && (
            <div className="lg:col-span-5">{renderOverlayCard(photos[2], 2, 'h-60 sm:h-72 lg:h-[280px]')}</div>
          )}
          {photos[3] && (
            <div className="lg:col-span-7">{renderOverlayCard(photos[3], 3, 'h-60 sm:h-72 lg:h-[280px]')}</div>
          )}
        </div>
      )}

      {/* 3. ACCORDION SLICES (Expanding vertical panels) */}
      {layout === 'accordion' && (
        <div className="flex flex-col lg:flex-row gap-3 lg:h-[440px]">
          {photos.map((p, idx) => {
            const isExpanded = idx === safeIdx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => (isExpanded ? onPhotoClick(p) : setActiveIndex(idx))}
                className={`cursor-pointer relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md transition-all duration-500 ease-out ${
                  isExpanded
                    ? 'h-72 sm:h-80 lg:h-full lg:flex-[3.2]'
                    : 'h-24 sm:h-28 lg:h-full lg:flex-[0.85] opacity-90 hover:opacity-100'
                }`}
              >
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold bg-white/95 shadow-md ${accentBadgeClass}`}
                  >
                    {isExpanded ? p.badge : `0${idx + 1}`}
                  </span>
                </div>

                {isExpanded && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPhotoClick(p);
                    }}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/55 text-white hover:bg-black/75 backdrop-blur-sm"
                    title="ขยายภาพ"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  {isExpanded ? (
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-sm sm:text-lg leading-snug">
                        {p.title}
                      </h4>
                      {p.highlight && (
                        <p className="text-xs text-sky-200 line-clamp-2">{p.highlight}</p>
                      )}
                    </div>
                  ) : (
                    <p className="font-heading font-bold text-xs text-white/95 line-clamp-1 lg:line-clamp-2">
                      {p.title}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. INTERACTIVE LIST + LIVE PREVIEW */}
      {layout === 'split-list' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {photos.map((p, idx) => {
              const isSelected = idx === safeIdx;
              return (
                <button
                  key={idx}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3 ${
                    isSelected
                      ? 'bg-white border-sky-400 shadow-lg ring-2 ring-sky-100'
                      : 'bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <span className={`text-[10px] font-bold block ${accentBadgeClass}`}>
                      {p.badge}
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 line-clamp-2 leading-snug">
                      {p.title}
                    </h4>
                    {p.highlight && (
                      <p className="text-[11px] text-slate-500 line-clamp-1">{p.highlight}</p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div
              onClick={() => onPhotoClick(activePhoto)}
              className="cursor-pointer group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl h-72 sm:h-96 lg:h-full min-h-[360px] bg-slate-900"
            >
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold bg-white/95 shadow-md ${accentBadgeClass}`}
                >
                  {activePhoto.badge}
                </span>
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/55 text-white backdrop-blur-sm">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <h4 className="font-heading font-bold text-base sm:text-xl leading-snug">
                  {activePhoto.title}
                </h4>
                {activePhoto.highlight && (
                  <p className="text-xs sm:text-sm text-sky-200">{activePhoto.highlight}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SPOTLIGHT STAGE + THUMBNAILS */}
      {layout === 'spotlight' && (
        <div className="space-y-3.5">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-900 h-72 sm:h-96 lg:h-[430px] group">
            <img
              src={activePhoto.imageUrl}
              alt={activePhoto.title}
              onClick={() => onPhotoClick(activePhoto)}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div
              onClick={() => onPhotoClick(activePhoto)}
              className="cursor-pointer absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"
            />

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold bg-white/95 shadow-md ${accentBadgeClass}`}
              >
                {activePhoto.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/55 text-white backdrop-blur-sm">
                {safeIdx + 1} / {photos.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onPhotoClick(activePhoto)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/55 text-white hover:bg-black/75 transition-colors backdrop-blur-sm"
              title="ขยายภาพ"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setActiveIndex((safeIdx - 1 + photos.length) % photos.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-slate-800 hover:bg-white shadow-lg transition-all"
              aria-label="ภาพก่อนหน้า"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setActiveIndex((safeIdx + 1) % photos.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-slate-800 hover:bg-white shadow-lg transition-all"
              aria-label="ภาพถัดไป"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1 pointer-events-none">
              <h4 className="font-heading font-bold text-base sm:text-xl leading-snug">
                {activePhoto.title}
              </h4>
              {activePhoto.highlight && (
                <p className="text-xs sm:text-sm text-sky-200">{activePhoto.highlight}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {photos.map((p, idx) => {
              const isCurrent = idx === safeIdx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left rounded-xl overflow-hidden border-2 transition-all bg-white p-1.5 flex items-center gap-2.5 ${
                    isCurrent
                      ? 'border-sky-500 shadow-md ring-2 ring-sky-200'
                      : 'border-slate-200/80 opacity-80 hover:opacity-100 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-sky-700 block truncate">
                      {p.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-800 line-clamp-2 leading-tight">
                      {p.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. CARD STACK / DECK */}
      {layout === 'deck' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-2">
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] flex items-center justify-center px-4">
            {photos.map((p, idx) => {
              const offset = (idx - safeIdx + photos.length) % photos.length;
              const isFront = offset === 0;
              const translateClasses =
                offset === 0
                  ? 'z-30 translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100'
                  : offset === 1
                  ? 'z-20 translate-x-4 sm:translate-x-7 translate-y-2 rotate-2 scale-95 opacity-85'
                  : offset === 2
                  ? 'z-10 translate-x-8 sm:translate-x-12 translate-y-4 rotate-4 scale-90 opacity-65'
                  : 'z-0 -translate-x-3 translate-y-3 -rotate-2 scale-90 opacity-40';

              return (
                <div
                  key={idx}
                  onClick={() =>
                    isFront ? onPhotoClick(p) : setActiveIndex(idx)
                  }
                  className={`cursor-pointer absolute inset-x-4 sm:inset-x-8 top-2 bottom-2 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 ${translateClasses}`}
                >
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold bg-white/95 shadow ${accentBadgeClass}`}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-heading font-bold text-sm sm:text-lg leading-snug">
                      {p.title}
                    </h4>
                    {p.highlight && (
                      <p className="text-xs text-sky-200 line-clamp-1 mt-0.5">{p.highlight}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 space-y-4 bg-white/90 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                การ์ดใบที่ {safeIdx + 1} จาก {photos.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveIndex((safeIdx - 1 + photos.length) % photos.length)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-sky-100 text-slate-700 transition-colors"
                  aria-label="การ์ดก่อนหน้า"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((safeIdx + 1) % photos.length)}
                  className="p-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white transition-colors"
                  aria-label="การ์ดถัดไป"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                {activePhoto.title}
              </h4>
              {activePhoto.highlight && (
                <p className="text-xs sm:text-sm text-slate-600">{activePhoto.highlight}</p>
              )}
            </div>

            <button
              type="button"
              onClick={() => onPhotoClick(activePhoto)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>คลิกเพื่อดูภาพขนาดเต็ม</span>
            </button>
          </div>
        </div>
      )}

      {/* 7. POLAROID / SCRAPBOOK COLLAGE */}
      {layout === 'polaroid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-2">
          {photos.map((p, idx) => {
            const tiltClass =
              idx % 2 === 0
                ? 'lg:-rotate-1 lg:hover:rotate-0'
                : 'lg:rotate-1 lg:mt-4 lg:hover:rotate-0';
            return (
              <div
                key={idx}
                onClick={() => onPhotoClick(p)}
                className={`cursor-pointer group bg-white p-3 pb-4 rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ${tiltClass}`}
              >
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/95 shadow-sm ${accentBadgeClass}`}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-1.5 rounded-full bg-black/55 text-white">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                <div className="pt-3 px-1 space-y-1">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 line-clamp-2 leading-snug">
                    {p.title}
                  </h4>
                  {p.highlight && (
                    <p className="text-[11px] text-slate-500 line-clamp-2">{p.highlight}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 8. TIMELINE / PROCESS STRIP */}
      {layout === 'timeline' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {photos.map((p, idx) => (
            <div
              key={idx}
              onClick={() => onPhotoClick(p)}
              className="cursor-pointer group bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    {idx + 1}
                  </span>
                  <span className={`text-[11px] font-bold ${accentBadgeClass}`}>{p.badge}</span>
                </div>
                {idx < photos.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 hidden lg:block" />
                )}
              </div>

              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 rounded-full bg-black/55 text-white">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 line-clamp-2 leading-snug group-hover:text-sky-700 transition-colors">
                  {p.title}
                </h4>
                {p.highlight && (
                  <p className="text-[11px] text-slate-500 line-clamp-2 pt-1">{p.highlight}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 9. CINEMA FILMSTRIP */}
      {layout === 'filmstrip' && (
        <div className="bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-800 shadow-2xl space-y-3">
          {/* Top sprocket holes */}
          <div className="flex items-center justify-between gap-2 px-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="w-3 h-2 rounded-xs bg-slate-700/80" />
            ))}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {photos.map((p, idx) => (
              <div
                key={idx}
                onClick={() => onPhotoClick(p)}
                className="cursor-pointer group snap-start shrink-0 w-[82%] sm:w-[46%] lg:w-[31%] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-sky-400 transition-all"
              >
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-bold">
                      FRAME 0{idx + 1} • {p.badge}
                    </span>
                  </div>
                </div>
                <div className="p-3.5 space-y-1">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-white line-clamp-1">
                    {p.title}
                  </h4>
                  {p.highlight && (
                    <p className="text-[11px] text-slate-300 line-clamp-1">{p.highlight}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom sprocket holes */}
          <div className="flex items-center justify-between gap-2 px-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="w-3 h-2 rounded-xs bg-slate-700/80" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface DuoPhotoShowcaseProps {
  photos: VisualPhotoItem[];
  defaultLayout?: DuoPhotoLayout;
  onPhotoClick: (photo: VisualPhotoItem) => void;
  conceptNote?: string;
}

const DUO_LAYOUT_OPTIONS: { id: DuoPhotoLayout; label: string; icon: React.ElementType }[] = [
  { id: 'overlapping', label: 'Overlap', icon: Layers },
  { id: 'compare-slider', label: 'Compare', icon: SlidersHorizontal },
  { id: 'diagonal', label: 'Diagonal', icon: Slash },
  { id: 'polaroid-duo', label: 'Polaroid', icon: Sparkles },
  { id: 'split-70-30', label: '70/30', icon: Columns },
  { id: 'stepped', label: 'Stepped', icon: ArrowRight },
  { id: 'editorial-card', label: 'Editorial', icon: LayoutGrid },
];

/**
 * Renders 2 photos (e.g. vocational showcase) with 7 selectable visual layouts.
 */
export const DuoPhotoShowcase: React.FC<DuoPhotoShowcaseProps> = ({
  photos,
  defaultLayout = 'overlapping',
  onPhotoClick,
  conceptNote,
}) => {
  const [layout, setLayout] = useState<DuoPhotoLayout>(defaultLayout);
  const [sliderPos, setSliderPos] = useState<number>(52);

  if (!photos || photos.length === 0) return null;
  const first = photos[0];
  const second = photos[1] || photos[0];

  const renderPhotoCard = (p: VisualPhotoItem, heightClass: string, extraClass = '') => (
    <div
      onClick={() => onPhotoClick(p)}
      className={`cursor-pointer group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${heightClass} ${extraClass}`}
    >
      <img
        src={p.imageUrl}
        alt={p.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

      <div className="absolute top-3.5 left-3.5">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow-md border border-white">
          {p.badge}
        </span>
      </div>

      <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="p-1.5 rounded-full bg-black/55 text-white backdrop-blur-sm">
          <ZoomIn className="w-4 h-4" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
        <h4 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-white leading-snug">
          {p.title}
        </h4>
        {p.highlight && (
          <p className="text-xs sm:text-sm text-amber-200 font-medium">{p.highlight}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-3">
      {/* Compact Layout Switcher */}
      <div className="flex items-center justify-end">
        <div className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-2xs max-w-full">
          <span className="text-[10px] font-semibold text-slate-400 px-2 hidden sm:inline">
            รูปแบบภาพ:
          </span>
          {DUO_LAYOUT_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const active = layout === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setLayout(opt.id)}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                  active
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. 70/30 FEATURE SPLIT */}
      {layout === 'split-70-30' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          <div className="md:col-span-8">
            {renderPhotoCard(first, 'h-64 sm:h-80 lg:h-[460px]')}
          </div>
          <div className="md:col-span-4">
            {renderPhotoCard(second, 'h-64 sm:h-80 lg:h-[460px]')}
          </div>
        </div>
      )}

      {/* 2. STEPPED OFFSET */}
      {layout === 'stepped' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 items-start">
          <div>{renderPhotoCard(first, 'h-64 sm:h-80 lg:h-[420px]')}</div>
          <div className="md:mt-12 space-y-3">
            {conceptNote && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-slate-200/80 shadow-xs text-xs text-slate-700 font-medium">
                💡 {conceptNote}
              </div>
            )}
            {renderPhotoCard(second, 'h-64 sm:h-80 lg:h-[380px]')}
          </div>
        </div>
      )}

      {/* 3. OVERLAPPING COLLAGE */}
      {layout === 'overlapping' && (
        <div className="relative pb-2">
          <div className="md:w-[82%]">{renderPhotoCard(first, 'h-64 sm:h-80 lg:h-[440px]')}</div>
          <div className="mt-4 md:mt-0 md:w-[46%] md:ml-auto md:-mt-40 relative z-10 rounded-2xl sm:rounded-3xl p-1.5 bg-white shadow-2xl">
            {renderPhotoCard(second, 'h-56 sm:h-64 lg:h-[270px]')}
          </div>
        </div>
      )}

      {/* 4. EDITORIAL CARD */}
      {layout === 'editorial-card' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {photos.map((p, idx) => (
            <div
              key={idx}
              onClick={() => onPhotoClick(p)}
              className="cursor-pointer group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 sm:h-72 lg:h-[340px] overflow-hidden bg-slate-100">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md">
                    {p.badge}
                  </span>
                </div>
                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 rounded-full bg-black/55 text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-1.5 bg-white">
                <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {p.title}
                </h4>
                {p.highlight && <p className="text-xs sm:text-sm text-slate-600">{p.highlight}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 5. INTERACTIVE COMPARE SLIDER */}
      {layout === 'compare-slider' && (
        <div className="space-y-3">
          <div className="relative h-72 sm:h-96 lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl select-none bg-slate-900">
            {/* Right / Background image */}
            <img
              src={second.imageUrl}
              alt={second.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Left / Clipped image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={first.imageUrl}
                alt={first.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-indigo-700 shadow-xl border-2 border-indigo-500 flex items-center justify-center">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Range input overlay for smooth drag */}
            <input
              type="range"
              min={5}
              max={95}
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="เลื่อนเปรียบเทียบภาพ"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />

            {/* Corner labels */}
            <button
              type="button"
              onClick={() => onPhotoClick(first)}
              className="absolute top-3.5 left-3.5 z-30 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md hover:bg-sky-50"
            >
              ◀ {first.badge}
            </button>
            <button
              type="button"
              onClick={() => onPhotoClick(second)}
              className="absolute top-3.5 right-3.5 z-30 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md hover:bg-indigo-50"
            >
              {second.badge} ▶
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <button
              type="button"
              onClick={() => onPhotoClick(first)}
              className="text-left bg-white/90 hover:bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs transition-all"
            >
              <span className="font-bold text-sky-700 block">ฝั่งซ้าย • {first.badge}</span>
              <span className="font-heading font-bold text-sm text-slate-900">{first.title}</span>
            </button>
            <button
              type="button"
              onClick={() => onPhotoClick(second)}
              className="text-left bg-white/90 hover:bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs transition-all"
            >
              <span className="font-bold text-indigo-700 block">ฝั่งขวา • {second.badge}</span>
              <span className="font-heading font-bold text-sm text-slate-900">{second.title}</span>
            </button>
          </div>
        </div>
      )}

      {/* 6. DIAGONAL SPLIT */}
      {layout === 'diagonal' && (
        <div className="relative h-72 sm:h-96 lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
          {/* Left diagonal */}
          <div
            onClick={() => onPhotoClick(first)}
            className="cursor-pointer group absolute inset-0"
            style={{ clipPath: 'polygon(0 0, 58% 0, 44% 100%, 0 100%)' }}
          >
            <img
              src={first.imageUrl}
              alt={first.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
          </div>

          {/* Right diagonal */}
          <div
            onClick={() => onPhotoClick(second)}
            className="cursor-pointer group absolute inset-0"
            style={{ clipPath: 'polygon(58% 0, 100% 0, 100% 100%, 44% 100%)' }}
          >
            <img
              src={second.imageUrl}
              alt={second.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
          </div>

          {/* Captions */}
          <div
            onClick={() => onPhotoClick(first)}
            className="cursor-pointer absolute bottom-4 left-4 max-w-[42%] text-white space-y-0.5 pointer-events-auto"
          >
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-900 mb-1">
              {first.badge}
            </span>
            <h4 className="font-heading font-bold text-xs sm:text-base leading-snug line-clamp-2">
              {first.title}
            </h4>
          </div>

          <div
            onClick={() => onPhotoClick(second)}
            className="cursor-pointer absolute bottom-4 right-4 max-w-[42%] text-right text-white space-y-0.5 pointer-events-auto"
          >
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-900 mb-1">
              {second.badge}
            </span>
            <h4 className="font-heading font-bold text-xs sm:text-base leading-snug line-clamp-2">
              {second.title}
            </h4>
          </div>
        </div>
      )}

      {/* 7. PINNED POLAROID DUO */}
      {layout === 'polaroid-duo' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 py-4 px-1 sm:px-4">
          {photos.map((p, idx) => (
            <div
              key={idx}
              onClick={() => onPhotoClick(p)}
              className={`cursor-pointer group relative bg-white p-3.5 pb-6 rounded-2xl border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                idx === 0 ? 'md:-rotate-2 hover:rotate-0' : 'md:rotate-2 md:mt-6 hover:rotate-0'
              }`}
            >
              {/* Masking tape accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-100/80 border border-amber-200/60 rotate-1 shadow-2xs rounded-xs pointer-events-none" />

              <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow">
                    {p.badge}
                  </span>
                </div>
              </div>

              <div className="pt-4 px-1 space-y-1">
                <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                  {p.title}
                </h4>
                {p.highlight && (
                  <p className="text-xs sm:text-sm text-slate-600">{p.highlight}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { SLIDES_DATA, SlideItem, VisualPhotoItem, RelatedLinkItem, ChallengeDetailInfo, CHALLENGE_2_OFFICIAL_INFO } from '../data/slidesData';
import { PA_DATA } from '../data/paData';
import { BrandLogo } from './BrandLogo';
import { QuadPhotoShowcase, DuoPhotoShowcase, QuadPhotoLayout, DuoPhotoLayout } from './PhotoLayouts';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Download, 
  Layers, 
  ZoomIn, 
  X, 
  ExternalLink, 
  Award, 
  Grid, 
  Camera, 
  Menu, 
  Link as LinkIcon,
  ArrowRight,
  GitBranch,
  FileText,
  ShieldCheck,
  Target,
  CheckCircle2
} from 'lucide-react';

export const VisualCanvaDeck: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'scroll' | 'deck'>('scroll');
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<VisualPhotoItem | null>(null);
  const [highlightSlideId, setHighlightSlideId] = useState<number | null>(null);

  // Touch swipe handling for mobile deck mode
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setMobileNavOpen(false);
    
    // Highlight target slide briefly
    const targetSlide = SLIDES_DATA[index];
    if (targetSlide) {
      setHighlightSlideId(targetSlide.id);
      setTimeout(() => setHighlightSlideId(null), 2000);
    }

    if (viewMode === 'scroll') {
      const el = document.getElementById(`slide-${index + 1}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const nextSlide = () => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxPhoto) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, lightboxPhoto, viewMode]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (viewMode !== 'deck') return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
  };

  const navItems = [
    {
      id: 'home',
      slideIndex: 0,
      label: 'หน้าหลัก',
      detail: '',
      tooltip: 'หน้าหลักและภาพรวม',
      isActive: (idx: number) => idx <= 1 || idx === 14,
      children: [
        { label: 'ปกหน้า PA', slideIndex: 0 },
        { label: 'สารบัญ', slideIndex: 1 },
        { label: 'สรุปผลงาน', slideIndex: 14 },
      ],
    },
    {
      id: 'part1',
      slideIndex: 2,
      label: 'ส่วนที่ 1',
      detail: 'มาตรฐานตำแหน่ง',
      tooltip: 'ส่วนที่ 1 : มาตรฐานตำแหน่ง 5 ด้าน',
      isActive: (idx: number) => idx >= 2 && idx <= 6,
      children: [
        { label: '1. ด้านการบริหารวิชาการ', slideIndex: 2 },
        { label: '2. ด้านการบริหารจัดการสถานศึกษา', slideIndex: 3 },
        { label: '3. ด้านการบริหารการเปลี่ยนแปลงฯ', slideIndex: 4 },
        { label: '4. ด้านการบริหารงานชุมชนและเครือข่าย', slideIndex: 5 },
        { label: '5. ด้านการพัฒนาตนเองและวิชาชีพ', slideIndex: 6 },
      ],
    },
    {
      id: 'part2',
      slideIndex: 7,
      label: 'ส่วนที่ 2',
      detail: 'ประเด็นท้าทาย',
      tooltip: 'ส่วนที่ 2 : ประเด็นท้าทายเชิงรุก',
      isActive: (idx: number) => idx >= 7 && idx <= 13,
      children: [
        { label: 'PPK Safe & Care Model', slideIndex: 7 },
        { label: 'ทักษะอาชีพ (ม.1 - ม.6)', slideIndex: 8 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-mesh-soft text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      
      {/* ========================================================= */}
      {/* ADAPTIVE TOP NAVBAR */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 glass-header py-2 sm:py-2.5 px-3 sm:px-5 xl:px-8 shadow-xs transition-all">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-2 sm:gap-3 xl:gap-4">
          
          {/* Logo & School Name */}
          <button
            type="button"
            onClick={() => goToSlide(0)}
            className="flex items-center gap-2 sm:gap-2.5 min-w-0 text-left group"
          >
            <BrandLogo
              variant="pa-monogram"
              size="sm"
              className="sm:w-10 sm:h-10 rounded-2xl shadow-md shadow-sky-200/60 group-hover:scale-105 transition-transform"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-heading font-bold text-xs sm:text-sm xl:text-base text-slate-900 tracking-tight truncate">
                  {PA_DATA.director.school}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-sky-100 text-sky-800 border border-sky-200 whitespace-nowrap shrink-0">
                  ปีงบ {PA_DATA.meta.fiscalYear}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 truncate hidden md:block">
                {PA_DATA.director.name} • {PA_DATA.director.academicStanding}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links (3 Main Sections + Hover Submenu) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/85 p-1 rounded-2xl border border-slate-200/80 shadow-2xs text-xs shrink-0">
            {navItems.map((item) => {
              const active = item.isActive(currentSlideIndex);
              return (
                <div key={item.id} className="relative group">
                  <button
                    type="button"
                    onClick={() => goToSlide(item.slideIndex)}
                    title={item.tooltip}
                    className={`px-3.5 xl:px-4 py-1.5 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                      active
                        ? 'bg-sky-500 text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.detail && (
                      <span className={`hidden xl:inline text-[11px] ${active ? 'text-sky-100' : 'text-slate-400'}`}>
                        ({item.detail})
                      </span>
                    )}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${active ? 'text-white/90' : 'text-slate-400'}`} />
                  </button>

                  {/* Submenu Dropdown */}
                  <div className="hidden group-hover:block absolute left-0 top-full pt-1.5 z-50 min-w-[230px]">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-lg p-1.5 space-y-0.5">
                      {item.children.map((sub) => {
                        const subActive = currentSlideIndex === sub.slideIndex;
                        return (
                          <button
                            key={sub.slideIndex}
                            type="button"
                            onClick={() => goToSlide(sub.slideIndex)}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors whitespace-nowrap flex items-center justify-between gap-2 ${
                              subActive
                                ? 'bg-sky-50 text-sky-700 font-semibold'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-sky-600'
                            }`}
                          >
                            <span>{sub.label}</span>
                            {subActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* View Mode Switcher */}
            <div className="flex items-center bg-white/90 p-0.5 sm:p-1 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs text-slate-600 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('scroll')}
                className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl flex items-center gap-1 whitespace-nowrap transition-all ${
                  viewMode === 'scroll'
                    ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-200 shadow-2xs'
                    : 'hover:text-sky-600'
                }`}
                title="เลื่อนดูต่อเนื่อง"
              >
                <Grid className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="hidden sm:inline">เลื่อนดู</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('deck')}
                className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl flex items-center gap-1 whitespace-nowrap transition-all ${
                  viewMode === 'deck'
                    ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-200 shadow-2xs'
                    : 'hover:text-sky-600'
                }`}
                title="โหมดสไลด์พรีเซนต์"
              >
                <Layers className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="hidden sm:inline">สไลด์</span>
              </button>
            </div>

            {/* Download Button */}
            <a
              href={PA_DATA.downloads.fullReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-600 hover:opacity-95 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-md shadow-sky-300/40"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden md:inline">โหลดเล่ม PA</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shrink-0"
              aria-label="Toggle navigation"
            >
              {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileNavOpen && (
          <div className="lg:hidden pt-3 pb-2 border-t border-slate-100 mt-2 space-y-2 animate-fadeIn">
            {navItems.map((item) => {
              const active = item.isActive(currentSlideIndex);
              return (
                <div key={item.id} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => goToSlide(item.slideIndex)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                      active
                        ? 'bg-sky-500 text-white'
                        : 'text-slate-800 bg-slate-50/80 hover:bg-sky-50 hover:text-sky-700'
                    }`}
                  >
                    <span>
                      {item.label}
                      {item.detail ? ` (${item.detail})` : ''}
                    </span>
                  </button>
                  <div className="pl-3 space-y-0.5">
                    {item.children.map((sub) => (
                      <button
                        key={sub.slideIndex}
                        type="button"
                        onClick={() => goToSlide(sub.slideIndex)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-[11px] transition-colors ${
                          currentSlideIndex === sub.slideIndex
                            ? 'text-sky-700 bg-sky-50 font-semibold'
                            : 'text-slate-500 hover:text-sky-600 hover:bg-slate-50'
                        }`}
                      >
                        • {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* VIEW MODE 1: CONTINUOUS SCROLL (WITH CROSS-LINKING) */}
      {/* ========================================================= */}
      {viewMode === 'scroll' && (
        <main className="max-w-[1700px] mx-auto px-2 sm:px-6 lg:px-12 py-6 sm:py-10 space-y-8 sm:space-y-12">
          {SLIDES_DATA.map((slide) => {
            const isHighlighted = highlightSlideId === slide.id;
            return (
              <div
                key={slide.id}
                id={`slide-${slide.id}`}
                className="scroll-mt-24 group relative"
              >
                {/* Slide Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-xs text-slate-500 px-2 sm:px-3 mb-2">
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <span className="font-heading font-bold text-sky-800 bg-sky-100/90 px-2.5 py-0.5 rounded-full border border-sky-200">
                      แผ่นสไลด์ {slide.id} / {SLIDES_DATA.length}
                    </span>
                    <span className="text-slate-700 font-semibold">{slide.category}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium">{slide.badge}</span>
                </div>

                {/* Adaptive Slide Canvas Card Frame */}
                <div
                  className={`w-full rounded-2xl sm:rounded-3xl overflow-hidden slide-canvas bg-white transition-all duration-500 ${
                    isHighlighted
                      ? 'ring-4 ring-indigo-400 shadow-2xl scale-[1.005]'
                      : 'hover:shadow-2xl'
                  }`}
                >
                  <SlideRenderer
                    slide={slide}
                    onPhotoClick={(photo) => setLightboxPhoto(photo)}
                    onNavigate={(targetIndex) => goToSlide(targetIndex)}
                  />
                </div>
              </div>
            );
          })}

          {/* Footer */}
          <div className="text-center py-6 sm:py-8 text-[11px] sm:text-xs text-slate-400 space-y-1">
            <p>© {PA_DATA.meta.fiscalYear} {PA_DATA.director.school} • สพม. มหาสารคาม</p>
            <p>รายงานผลการพัฒนางานตามข้อตกลงในการพัฒนางาน (PA) ผู้บริหารสถานศึกษา</p>
          </div>
        </main>
      )}

      {/* ========================================================= */}
      {/* VIEW MODE 2: PRESENTATION DECK (TOUCH SWIPE ADAPTIVE) */}
      {/* ========================================================= */}
      {viewMode === 'deck' && (
        <main
          className="max-w-[1700px] mx-auto px-2 sm:px-6 lg:px-12 py-4 sm:py-6 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card */}
          <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden slide-canvas bg-white shadow-2xl">
            <SlideRenderer
              slide={SLIDES_DATA[currentSlideIndex]}
              onPhotoClick={(photo) => setLightboxPhoto(photo)}
              onNavigate={(targetIndex) => goToSlide(targetIndex)}
            />

            {/* Desktop Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className={`hidden sm:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-slate-200 transition-all ${
                currentSlideIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-sky-700" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlideIndex === SLIDES_DATA.length - 1}
              className={`hidden sm:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-slate-200 transition-all ${
                currentSlideIndex === SLIDES_DATA.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-sky-700" />
            </button>
          </div>

          {/* Slide Deck Bottom Controls Bar */}
          <div className="flex flex-wrap items-center justify-between w-full mt-3 sm:mt-4 px-2 sm:px-3 text-slate-700 gap-2">
            <div className="text-[11px] sm:text-sm text-slate-500 truncate max-w-[200px] sm:max-w-none">
              สไลด์ <strong className="text-sky-700 font-bold">{currentSlideIndex + 1}</strong> จาก {SLIDES_DATA.length} : {SLIDES_DATA[currentSlideIndex].title}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlideIndex === 0}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-medium shadow-2xs disabled:opacity-40"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlideIndex === SLIDES_DATA.length - 1}
                className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-semibold shadow-xs disabled:opacity-40"
              >
                ถัดไป
              </button>
            </div>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="w-full mt-3 sm:mt-4 p-2 bg-white/85 rounded-2xl border border-slate-200/80 shadow-xs overflow-x-auto flex gap-2">
            {SLIDES_DATA.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goToSlide(i)}
                className={`shrink-0 w-20 sm:w-28 h-12 sm:h-16 rounded-xl overflow-hidden border-2 transition-all relative ${
                  i === currentSlideIndex
                    ? 'border-sky-500 scale-105 shadow-md shadow-sky-200 ring-2 ring-sky-300'
                    : 'border-slate-200 opacity-70 hover:opacity-100'
                }`}
              >
                {s.photos[0] ? (
                  <img
                    src={s.photos[0].imageUrl}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-500">
                    #{s.id}
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white drop-shadow">
                  {i + 1}
                </div>
              </button>
            ))}
          </div>

        </main>
      )}

      {/* ========================================================= */}
      {/* FULLSCREEN PHOTO LIGHTBOX MODAL */}
      {/* ========================================================= */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 sm:p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="max-h-[65vh] sm:max-h-[80vh] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={lightboxPhoto.imageUrl}
                alt={lightboxPhoto.title}
                className="w-full h-full object-contain max-h-[65vh] sm:max-h-[80vh]"
              />
            </div>

            <div className="p-4 sm:p-6 space-y-1 sm:space-y-1.5 bg-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                {lightboxPhoto.badge}
              </span>
              <h3 className="text-base sm:text-xl font-heading font-bold text-slate-900">
                {lightboxPhoto.title}
              </h3>
              {lightboxPhoto.highlight && (
                <p className="text-xs sm:text-sm text-slate-600">
                  {lightboxPhoto.highlight}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// =========================================================================
// CHALLENGE DETAILS EXPANDABLE BOX (ข้อมูลส่วนที่ 2 ตามแบบ ว.PA 2570)
// =========================================================================
interface ChallengeDetailsBoxProps {
  info: ChallengeDetailInfo;
  badgeLabel?: string;
}

const ChallengeDetailsBox: React.FC<ChallengeDetailsBoxProps> = ({
  info,
  badgeLabel = 'รายละเอียดข้อตกลงส่วนที่ ๒ (ว.PA)',
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-indigo-200/80 shadow-xs overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-3 text-left hover:bg-indigo-50/50 transition-colors"
      >
        <div className="flex items-start sm:items-center gap-2.5 min-w-0">
          <span className="p-1.5 rounded-xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5 sm:mt-0">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 mr-2">
              {badgeLabel}
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold text-slate-800 line-clamp-1">
              {info.officialTitle}
            </span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-xl border border-indigo-200 shrink-0">
          <span className="hidden sm:inline">{expanded ? 'ซ่อนรายละเอียด' : 'ดูสาระสำคัญ (PDCA & ผลลัพธ์)'}</span>
          <span className="sm:hidden">{expanded ? 'ซ่อน' : 'รายละเอียด'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </span>
      </button>

      {expanded && (
        <div className="px-4 sm:px-6 pb-5 pt-2 border-t border-indigo-100 space-y-4 text-xs sm:text-sm text-slate-700 animate-fadeIn">
          {/* 1. สภาพปัญหา */}
          <div className="bg-sky-50/60 rounded-2xl p-3.5 sm:p-4 border border-sky-100 space-y-1">
            <div className="font-heading font-bold text-sky-900 text-xs sm:text-sm">
              ๑. สภาพปัญหาการบริหารจัดการสถานศึกษาและคุณภาพการศึกษา
            </div>
            <p className="leading-relaxed text-slate-700 text-xs sm:text-[13px]">
              {info.problemSummary}
            </p>
          </div>

          {/* 2. วิธีการดำเนินการ PDCA */}
          <div className="space-y-2">
            <div className="font-heading font-bold text-indigo-900 text-xs sm:text-sm flex items-center gap-1.5">
              <Target className="w-4 h-4 text-indigo-600" />
              <span>๒. วิธีการดำเนินการให้บรรลุผล (วงจรคุณภาพ PDCA)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {info.methods.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-1"
                >
                  <div className="font-heading font-bold text-indigo-800 text-xs">{m.step}</div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. ผลลัพธ์ที่คาดหวัง */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-1.5">
              <div className="font-heading font-bold text-emerald-900 text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>๓.๑ ผลลัพธ์เชิงปริมาณ</span>
              </div>
              <ul className="space-y-1 text-[11px] sm:text-xs text-slate-700">
                {info.outcomesQuantitative.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-1.5">
              <div className="font-heading font-bold text-amber-900 text-xs flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>๓.๒ ผลลัพธ์เชิงคุณภาพ</span>
              </div>
              <ul className="space-y-1 text-[11px] sm:text-xs text-slate-700">
                {info.outcomesQualitative.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// =========================================================================
// SLIDE RENDERER WITH INTERACTIVE CROSS-LINKING BAR
// =========================================================================
interface SlideRendererProps {
  slide: SlideItem;
  onPhotoClick: (photo: VisualPhotoItem) => void;
  onNavigate: (targetSlideIndex: number) => void;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, onPhotoClick, onNavigate }) => {
  const { photos, director, vocational } = slide;

  // 1. COVER SLIDE
  if (slide.layout === 'cover' && director) {
    return (
      <div className={`p-5 sm:p-10 lg:p-14 bg-gradient-to-br ${slide.theme.bgGradient} relative overflow-hidden flex flex-col justify-between min-h-[460px] sm:min-h-[540px]`}>
        <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 sm:w-[400px] h-60 sm:h-[400px] bg-rose-200/35 rounded-full blur-3xl pointer-events-none" />
        
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-200/60 pb-3 sm:pb-4 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-sky-500 text-white shadow-xs">
              {slide.badge}
            </span>
            <span className="text-[11px] sm:text-xs text-slate-600 font-medium">{director.round}</span>
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-sky-800 bg-white/95 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-sky-200 shadow-2xs">
            {director.affiliation}
          </span>
        </div>

        {/* Center Grid */}
        <div className="grid md:grid-cols-12 gap-6 sm:gap-10 items-center my-4 sm:my-6 relative z-10">
          <div className="md:col-span-7 space-y-2.5 sm:space-y-4">
            <div className="inline-block px-3 py-0.5 sm:py-1 rounded-lg bg-sky-100 text-sky-800 font-semibold text-[10px] sm:text-xs tracking-wider uppercase">
              Performance Agreement (PA)
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
              {slide.title}
            </h1>
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 font-medium">
              {slide.tagline}
            </p>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-white/95 border border-sky-100 shadow-soft text-xs sm:text-sm text-slate-700 italic border-l-4 border-l-sky-500 max-w-2xl">
              "{PA_DATA.director.quote}"
            </div>
          </div>

          {/* Director Card Visual Frame */}
          <div className="md:col-span-5 flex justify-center">
            <div
              onClick={() => onPhotoClick(photos[0])}
              className="cursor-pointer group relative bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-sky-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 max-w-sm sm:max-w-md w-full"
            >
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-slate-100 mb-2 sm:mb-3">
                <img
                  src={photos[0].imageUrl}
                  alt={director.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/95 text-slate-800 shadow-md">
                    <ZoomIn className="w-4 h-4 text-sky-600" />
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-center">
                    <div className="font-heading font-bold text-sm sm:text-base">{director.name}</div>
                    <div className="text-[11px] sm:text-xs text-sky-300">{director.position}</div>
                  </div>
                </div>
              </div>

              <div className="text-center text-[11px] sm:text-xs text-slate-500 py-0.5">
                {director.academic} • {director.school}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-2.5 border-t border-sky-200/60 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-slate-500 relative z-10 gap-1">
          <span>{director.school} อำเภอวาปีปทุม จังหวัดมหาสารคาม</span>
          <span className="font-semibold text-sky-700">สพม. มหาสารคาม</span>
        </div>
      </div>
    );
  }

  // 2. TOC SLIDE (สารบัญรายงานผลการพัฒนางาน)
  if (slide.layout === 'toc') {
    const part1Items = [
      { idx: 2, num: 'ด้านที่ 1', slideNo: 'สไลด์ 3', title: 'การบริหารวิชาการและความเป็นผู้นำทางวิชาการ' },
      { idx: 3, num: 'ด้านที่ 2', slideNo: 'สไลด์ 4', title: 'การบริหารจัดการสถานศึกษา' },
      { idx: 4, num: 'ด้านที่ 3', slideNo: 'สไลด์ 5', title: 'การบริหารการเปลี่ยนแปลงเชิงกลยุทธ์และนวัตกรรม' },
      { idx: 5, num: 'ด้านที่ 4', slideNo: 'สไลด์ 6', title: 'การบริหารงานชุมชนและเครือข่าย' },
      { idx: 6, num: 'ด้านที่ 5', slideNo: 'สไลด์ 7', title: 'การพัฒนาตนเองและวิชาชีพ' },
    ];

    return (
      <div className={`p-6 sm:p-10 lg:p-12 bg-gradient-to-br ${slide.theme.bgGradient} space-y-6`}>
        {/* Header */}
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
            {slide.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900">
            {slide.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">{slide.tagline}</p>
        </div>

        {/* Two-Column Table of Contents */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch pt-2">
          {/* Left Column: ส่วนที่ 1 (มาตรฐานตำแหน่ง 5 ด้าน) */}
          <div className="bg-white/90 p-5 sm:p-6 rounded-3xl border border-sky-200/80 shadow-soft flex flex-col justify-between space-y-4">
            <div className="border-b border-sky-100 pb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800">
                ส่วนที่ 1
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mt-1.5">
                ข้อตกลงในการพัฒนางานตามมาตรฐานตำแหน่ง
              </h3>
            </div>

            <div className="space-y-2 flex-1">
              {part1Items.map((item) => (
                <button
                  key={item.idx}
                  type="button"
                  onClick={() => onNavigate(item.idx)}
                  className="w-full text-left p-3 rounded-2xl bg-sky-50/60 hover:bg-sky-100/80 border border-sky-100 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-sky-700">{item.num}</span>
                      <span className="text-[10px] text-slate-400">• {item.slideNo}</span>
                    </div>
                    <div className="font-heading font-semibold text-xs sm:text-sm text-slate-900 truncate">
                      {item.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: ส่วนที่ 2 (ประเด็นท้าทาย) + สรุปผลงาน */}
          <div className="bg-white/90 p-5 sm:p-6 rounded-3xl border border-indigo-200/80 shadow-soft flex flex-col justify-between space-y-4">
            <div className="border-b border-indigo-100 pb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                ส่วนที่ 2
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mt-1.5">
                ข้อตกลงในการพัฒนางานที่เป็นประเด็นท้าทาย
              </h3>
            </div>

            <div className="space-y-3 flex-1">
              {/* Challenge 1 */}
              <button
                type="button"
                onClick={() => onNavigate(7)}
                className="w-full text-left p-4 rounded-2xl bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200 transition-all group space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500 text-white">
                      ประเด็นท้าทายที่ 1
                    </span>
                    <span className="text-[10px] text-slate-500">• สไลด์ 8</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-heading font-bold text-sm text-slate-900">
                  PPK Safe & Care Model (สถานศึกษาปลอดภัยเชิงรุก)
                </div>
                <div className="text-[11px] text-slate-600">
                  การพัฒนารูปแบบการบริหารจัดการโรงเรียนส่งเสริมความปลอดภัยเชิงรุก บูรณาการร่วมกับระบบดูแลช่วยเหลือนักเรียน
                </div>
              </button>

              {/* Challenge 2 */}
              <button
                type="button"
                onClick={() => onNavigate(8)}
                className="w-full text-left p-4 rounded-2xl bg-amber-50/70 hover:bg-amber-100 border border-amber-200 transition-all group space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white">
                      ประเด็นท้าทายที่ 2
                    </span>
                    <span className="text-[10px] text-slate-500">• สไลด์ 9–14</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-heading font-bold text-sm text-slate-900">
                  ทักษะอาชีพนักเรียน ม.1 - ม.6 บูรณาการตามหลักปรัชญาของเศรษฐกิจพอเพียง
                </div>
                <div className="text-[11px] text-slate-600">
                  การจัดกิจกรรมการเรียนรู้ที่ส่งเสริมทักษะอาชีพของนักเรียนทุกชั้นปี (ม.1 – ม.6)
                </div>
              </button>

              {/* Closing / Summary */}
              <button
                type="button"
                onClick={() => onNavigate(14)}
                className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-[11px] font-bold text-slate-500">บทสรุป • สไลด์ 15</span>
                  <div className="font-heading font-semibold text-xs sm:text-sm text-slate-900">
                    สรุปผลสำเร็จและดาวน์โหลดเอกสาร PA
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. PHOTO-MOSAIC (มาตรฐานตำแหน่ง 5 ด้าน - พร้อมปุ่มลิงก์ข้ามไปส่วนที่ 2)
  if (slide.layout === 'photo-mosaic') {
    return (
      <div className={`p-4 sm:p-8 lg:p-10 bg-gradient-to-br ${slide.theme.bgGradient} space-y-4 sm:space-y-6`}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-200/80 pb-3">
          <div>
            <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${slide.theme.badgeColor}`}>
              {slide.badge}
            </span>
            <h3 className="text-base sm:text-2xl font-heading font-bold text-slate-900 mt-1">
              {slide.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">{slide.tagline}</p>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-sky-800 shadow-2xs shrink-0 flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>๔ ภาพหลักฐานเชิงประจักษ์</span>
          </span>
        </div>

        {/* Verbatim Original Content Text from Original Website */}
        {slide.originalContentText && slide.originalContentText.length > 0 && (
          <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-soft space-y-2.5">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-slate-800">
              <span className="p-1 sm:p-1.5 rounded-lg bg-sky-100 text-sky-700">
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
              <span>สาระสำคัญและผลการปฏิบัติงานตามมาตรฐานตำแหน่ง:</span>
            </div>
            <div className="text-xs sm:text-[13px] lg:text-sm text-slate-700 leading-relaxed space-y-2 pl-1 sm:pl-7">
              {slide.originalContentText.map((paragraph, pIdx) => {
                if (paragraph.startsWith('- ')) {
                  return (
                    <div key={pIdx} className="flex items-start gap-2.5 pl-3 text-slate-700 font-medium">
                      <span className="text-sky-500 font-bold">•</span>
                      <span>{paragraph.replace(/^- /, '')}</span>
                    </div>
                  );
                }
                return (
                  <p key={pIdx} className="text-justify font-normal">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {/* 4 Photos Showcase (Curated varied layout per slide + live switcher) */}
        <QuadPhotoShowcase
          photos={photos}
          defaultLayout={
            (
              {
                3: 'bento',
                4: 'magazine',
                5: 'accordion',
                6: 'polaroid',
                7: 'split-list',
              } as Record<number, QuadPhotoLayout>
            )[slide.id] ?? 'bento'
          }
          onPhotoClick={onPhotoClick}
          accentBadgeClass="text-slate-800"
        />
      </div>
    );
  }

  // 4. SAFE-MODEL SLIDE (PPK Safe & Care - พร้อมปุ่มลิงก์ย้อนกลับไปส่วนที่ 1)
  if (slide.layout === 'safe-model') {
    return (
      <div className={`p-4 sm:p-8 lg:p-10 bg-gradient-to-br ${slide.theme.bgGradient} space-y-4 sm:space-y-6`}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
          <div>
            <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${slide.theme.badgeColor}`}>
              {slide.badge}
            </span>
            <h3 className="text-base sm:text-2xl font-heading font-bold text-slate-900 mt-1">
              {slide.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">{slide.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-1 text-[10px] font-bold text-white shrink-0">
            <span className="px-2 py-0.5 rounded bg-sky-500">INPUT</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-indigo-500">PROCESS</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500">OUTPUT</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-amber-500">OUTCOME</span>
          </div>
        </div>

        {/* Official Part 2 Challenge 1 Details (Expandable) */}
        {slide.challengeInfo && (
          <ChallengeDetailsBox
            info={slide.challengeInfo}
            badgeLabel="ประเด็นท้าทายที่ ๑ • PPK Safe & Care"
          />
        )}

        {/* 4 Action Photos (Timeline Process Flow by default + live switcher) */}
        <QuadPhotoShowcase
          photos={photos}
          defaultLayout="timeline"
          onPhotoClick={onPhotoClick}
          accentBadgeClass="text-sky-800"
        />
      </div>
    );
  }

  // 5. VOCATIONAL SHOWCASE (ม.1 - ม.6 พร้อมปุ่มลิงก์ย้อนกลับไปส่วนที่ 1)
  if (slide.layout === 'vocational-showcase' && vocational) {
    return (
      <div className={`p-4 sm:p-8 lg:p-10 bg-gradient-to-br ${slide.theme.bgGradient} space-y-4 sm:space-y-6`}>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
          <div>
            <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${slide.theme.badgeColor}`}>
              {slide.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mt-1">
              {slide.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">{slide.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {vocational.tags.map((tg, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs bg-white border border-slate-200 text-slate-700 shadow-2xs font-semibold">
                {tg}
              </span>
            ))}
          </div>
        </div>

        {/* Official Part 2 Challenge 2 Details (Expandable) */}
        <ChallengeDetailsBox
          info={slide.challengeInfo ?? CHALLENGE_2_OFFICIAL_INFO}
          badgeLabel="ประเด็นท้าทายที่ ๒ • ทักษะอาชีพเศรษฐกิจพอเพียง"
        />

        {/* 2 Showcase Photos (Varied Duo Layout per grade + live switcher) */}
        <DuoPhotoShowcase
          photos={photos}
          defaultLayout={
            (
              {
                9: 'polaroid-duo',
                10: 'compare-slider',
                11: 'stepped',
                12: 'editorial-card',
                13: 'diagonal',
                14: 'overlapping',
              } as Record<number, DuoPhotoLayout>
            )[slide.id] ?? 'overlapping'
          }
          onPhotoClick={onPhotoClick}
          conceptNote={vocational.concept}
        />
      </div>
    );
  }

  // 6. CLOSING SLIDE
  if (slide.layout === 'closing') {
    return (
      <div className={`p-6 sm:p-14 lg:p-20 bg-gradient-to-br ${slide.theme.bgGradient} text-slate-800 text-center space-y-5 flex flex-col items-center justify-center min-h-[420px]`}>
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center mx-auto border border-sky-100">
          <Award className="w-8 h-8 sm:w-10 sm:h-10 text-sky-600" />
        </div>

        <div className="space-y-1.5 max-w-3xl">
          <span className="px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
            {slide.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900">
            {slide.title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600">
            {slide.tagline}
          </p>
        </div>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PA_DATA.downloads.fullReportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-heading font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md shadow-sky-300/40 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>ดาวน์โหลดเอกสาร PA ๒๕๗๐ (PDF)</span>
          </a>

          <a
            href={PA_DATA.downloads.spmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-heading font-semibold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all flex items-center gap-2"
          >
            <span>{PA_DATA.director.affiliationShort}</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>
    );
  }

  return null;
};

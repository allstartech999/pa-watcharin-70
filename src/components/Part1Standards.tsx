import React, { useState } from 'react';
import { PA_DATA, StandardAspect, AlbumPhoto } from '../data/paData';
import { 
  GraduationCap, 
  Building2, 
  Sparkles, 
  Users2, 
  Award, 
  CheckCircle2, 
  Camera, 
  ZoomIn, 
  X,
  ChevronRight,
  Layers,
  ChevronLeft,
  BookOpen
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  Sparkles,
  Users2,
  Award,
};

export const Part1Standards: React.FC = () => {
  const [selectedAspect, setSelectedAspect] = useState<number>(1);
  const [previewPhoto, setPreviewPhoto] = useState<AlbumPhoto | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const activeData: StandardAspect =
    PA_DATA.standards.find((s) => s.id === selectedAspect) || PA_DATA.standards[0];
  const ActiveIcon = iconMap[activeData.icon] || GraduationCap;

  return (
    <section id="standards" className="py-20 relative bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ส่วนที่ ๑ : การพัฒนางานตามมาตรฐานตำแหน่ง</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            แฟ้มภาพกิจกรรมมาตรฐานตำแหน่ง <br className="hidden sm:inline" />
            <span className="gradient-text-vibrant">๕ ด้าน ๑๕ ตัวชี้วัดเชิงประจักษ์</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            จัดแสดงในรูปแบบอัลบั้มภาพถ่ายกิจกรรมเชิงประจักษ์ สะท้อนการบริหารจัดการสถานศึกษาในทุกมิติ
          </p>
        </div>

        {/* 5 Aspects Selector Buttons (Pastel Album Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PA_DATA.standards.map((aspect) => {
            const Icon = iconMap[aspect.icon] || GraduationCap;
            const isSelected = selectedAspect === aspect.id;
            return (
              <button
                key={aspect.id}
                onClick={() => {
                  setSelectedAspect(aspect.id);
                  setActivePhotoIndex(0);
                }}
                className={`text-left p-4 rounded-2xl transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? `bg-white shadow-xl shadow-sky-200/50 border-2 ${aspect.themeColor.border} scale-[1.02]`
                    : 'bg-slate-50/90 hover:bg-white border border-slate-200/70 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${aspect.badgeColor}`}>
                      {aspect.number}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-xs ${
                        isSelected ? aspect.themeColor.iconBg : 'bg-white text-slate-500 border border-slate-100'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">
                    {aspect.title.replace(/^ด้าน/, '')}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-sky-600 font-medium">
                    <Camera className="w-3 h-3" />
                    <span>{aspect.photos.length} ภาพ</span>
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'text-sky-600 translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MAIN VISUAL ALBUM BOARD (Canva-style Slide Showcase) */}
        {/* ========================================================= */}
        <div className={`rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br ${activeData.themeColor.bg} border-2 ${activeData.themeColor.border} shadow-soft space-y-8`}>
          
          {/* Header of Active Aspect */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${activeData.themeColor.iconBg} shrink-0`}>
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${activeData.badgeColor}`}>
                    {activeData.number}
                  </span>
                  <span className="text-xs text-slate-400">| อัลบั้มภาพเชิงประจักษ์</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                  {activeData.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {activeData.subtitle}
                </p>
              </div>
            </div>

            {/* Quick stats badge */}
            <div className="flex items-center gap-2 shrink-0 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white shadow-xs">
              <Camera className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-semibold text-slate-700">
                ๔ ภาพหลักฐานสำคัญ
              </span>
            </div>
          </div>

          {/* Key Summary Pills */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {activeData.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-white/80 shadow-2xs text-xs text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>

          {/* ========================================================= */}
          {/* PHOTO ALBUM GRID (4 Featured Canvas-style Photo Cards) */}
          {/* ========================================================= */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-bold text-sm text-slate-800 flex items-center gap-2">
                <Camera className="w-4 h-4 text-sky-600" />
                <span>ภาพกิจกรรม การพัฒนางานตามมาตรฐานตำแหน่ง (คลิกเพื่อขยายดูภาพใหญ่)</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeData.photos.map((photo, pIdx) => (
                <div
                  key={photo.id}
                  onClick={() => setPreviewPhoto(photo)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Photo Frame */}
                  <div className="relative h-56 sm:h-48 overflow-hidden bg-slate-100">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-2.5 bg-white/95 text-slate-800 rounded-full shadow-md flex items-center gap-1.5 text-xs font-semibold">
                        <ZoomIn className="w-4 h-4 text-sky-600" />
                        <span>ขยายภาพ</span>
                      </div>
                    </div>

                    {/* Tag badge */}
                    {photo.tag && (
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 backdrop-blur-md text-sky-800 shadow-xs border border-white/80">
                          {photo.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Caption & Details */}
                  <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between bg-white">
                    <h5 className="font-heading font-bold text-xs text-slate-900 line-clamp-2 group-hover:text-sky-600 transition-colors">
                      {photo.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Photo Modal */}
      {previewPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setPreviewPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={previewPhoto.imageUrl}
                alt={previewPhoto.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="p-6 space-y-2 bg-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                  {previewPhoto.category}
                </span>
                {previewPhoto.tag && (
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    {previewPhoto.tag}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                {previewPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {previewPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

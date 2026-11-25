import React, { useState } from 'react';
import { PA_DATA, AlbumPhoto } from '../data/paData';
import { Image as ImageIcon, X, ZoomIn, Sparkles, Filter } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalImage, setActiveModalImage] = useState<AlbumPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'มาตรฐานตำแหน่ง', label: 'มาตรฐานตำแหน่ง (๕ ด้าน)' },
    { id: 'ประเด็นท้าทาย', label: 'ประเด็นท้าทาย' },
  ];

  const filteredGallery = PA_DATA.gallery.filter((item) => {
    if (filter === 'all') return true;
    return item.category.includes(filter);
  });

  return (
    <section id="gallery" className="py-20 relative bg-white/80 backdrop-blur-sm border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
            <ImageIcon className="w-3.5 h-3.5 text-rose-600" />
            <span>ภาพกิจกรรมและหลักฐานเชิงประจักษ์</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            ภาพกิจกรรมการพัฒนางาน <br className="hidden sm:inline" />
            <span className="gradient-text-vibrant">ประจำปีงบประมาณ {PA_DATA.meta.fiscalYear}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            หลักฐานเชิงประจักษ์ในการขับเคลื่อนการบริหารจัดการสถานศึกษาและการพัฒนาผู้เรียนรอบด้าน
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 gap-1">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  filter === c.id
                    ? 'bg-white text-sky-800 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 rounded-full text-slate-800 shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/90 backdrop-blur-md text-sky-800 border border-white/60 shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <h4 className="font-heading font-bold text-sm text-slate-900 line-clamp-1 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-slate-900">
              <img
                src={activeModalImage.imageUrl}
                alt={activeModalImage.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="p-6 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                {activeModalImage.category}
              </span>
              <h3 className="text-lg font-heading font-bold text-slate-900">
                {activeModalImage.title}
              </h3>
              <p className="text-sm text-slate-600">
                {activeModalImage.description || activeModalImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

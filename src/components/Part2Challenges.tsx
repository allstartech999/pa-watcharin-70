import React, { useState } from 'react';
import { PA_DATA, AlbumPhoto, VocationalGrade } from '../data/paData';
import { 
  ShieldCheck, 
  Briefcase, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Trophy, 
  Repeat, 
  Sparkles, 
  ArrowRight,
  Camera,
  ZoomIn,
  X,
  Tag
} from 'lucide-react';

const systemIconMap: Record<string, React.ElementType> = {
  Layers,
  Cpu,
  CheckCircle2,
  Trophy,
  Repeat,
};

export const Part2Challenges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'challenge1' | 'challenge2'>('challenge1');
  const [previewPhoto, setPreviewPhoto] = useState<AlbumPhoto | null>(null);

  const { challenge1, challenge2 } = PA_DATA.challenges;

  return (
    <section id="challenges" className="py-20 relative bg-gradient-to-b from-sky-50/40 via-white to-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 border border-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>ส่วนที่ ๒ : ข้อตกลงในการพัฒนางานที่เป็นประเด็นท้าทาย</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            แฟ้มภาพกิจกรรมประเด็นท้าทาย <br className="hidden sm:inline" />
            <span className="gradient-text-vibrant">นวัตกรรมการพัฒนาคุณภาพ ปีงบประมาณ {PA_DATA.meta.fiscalYear}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            ผลงานนวัตกรรมเชิงประจักษ์ PPK Safe & Care Model และกิจกรรมส่งเสริมทักษะอาชีพนักเรียน ม.๑ - ม.๖
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 backdrop-blur-md shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('challenge1')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === 'challenge1'
                  ? 'bg-white text-sky-800 shadow-md shadow-sky-200/50'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              <ShieldCheck className={`w-4 h-4 ${activeTab === 'challenge1' ? 'text-sky-600' : 'text-slate-400'}`} />
              <span>ประเด็นที่ ๑ : PPK Safe & Care Model</span>
            </button>

            <button
              onClick={() => setActiveTab('challenge2')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === 'challenge2'
                  ? 'bg-white text-indigo-800 shadow-md shadow-indigo-200/50'
                  : 'text-slate-600 hover:text-indigo-700'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeTab === 'challenge2' ? 'text-indigo-600' : 'text-slate-400'}`} />
              <span>ประเด็นที่ ๒ : อัลบั้มทักษะอาชีพ ม.๑ - ม.๖</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: PPK Safe & Care Model & Photo Album */}
        {/* ============================================================== */}
        {activeTab === 'challenge1' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Overview Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {challenge1.number}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold leading-tight">
                  {challenge1.title}
                </h3>
                <p className="text-xs sm:text-sm text-sky-100 font-light leading-relaxed">
                  {challenge1.objective}
                </p>
              </div>
            </div>

            {/* System Flow Diagram */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-sky-600" />
                  <span>โครงสร้างระบบเชิงระบบ (System Flow: INPUT ➔ PROCESS ➔ OUTPUT ➔ OUTCOME ➔ FEEDBACK)</span>
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {challenge1.systemFlow.map((node, idx) => {
                  const NodeIcon = systemIconMap[node.icon] || Layers;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2.5 py-0.5 rounded-lg text-xs font-heading font-bold ${node.color}`}>
                            {node.step}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                            <NodeIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <h5 className="font-heading font-bold text-sm text-slate-900 mb-2.5">
                          {node.title}
                        </h5>

                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {node.items.map((it, i) => (
                            <li key={i} className="flex items-start gap-1.5 leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ============================================================== */}
            {/* PHOTO ALBUM: PPK Safe & Care Model (4 Big Featured Photos) */}
            {/* ============================================================== */}
            <div className="p-6 sm:p-8 rounded-3xl bg-sky-50/70 border border-sky-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                    <Camera className="w-5 h-5 text-sky-600" />
                    <span>ภาพกิจกรรม ประเด็นท้าทายที่ ๑ (PPK Safe & Care Model)</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    หลักฐานเชิงประจักษ์การดำเนินงานสถานศึกษาปลอดภัยและการดูแลช่วยเหลือนักเรียน
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-800">
                  ๔ ภาพหลักฐาน
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {challenge1.photos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setPreviewPhoto(photo)}
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="p-2 bg-white/90 text-slate-800 rounded-full shadow-md flex items-center gap-1 text-xs font-semibold">
                          <ZoomIn className="w-4 h-4 text-sky-600" />
                          <span>ดูภาพขยาย</span>
                        </div>
                      </div>
                      {photo.tag && (
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/95 text-sky-800 border border-white/80 shadow-xs">
                            {photo.tag}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-3.5 space-y-1 flex-1 flex flex-col justify-between">
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
        )}

        {/* ============================================================== */}
        {/* TAB 2: Vocational Skills Grade 7 - 12 (Photo Album Showcase) */}
        {/* ============================================================== */}
        {activeTab === 'challenge2' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Overview Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {challenge2.number}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold leading-tight">
                  {challenge2.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-50 font-light leading-relaxed">
                  {challenge2.objective}
                </p>
              </div>
            </div>

            {/* Subheading */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Camera className="w-5 h-5 text-amber-600" />
                  <span>อัลบั้มภาพกิจกรรมทักษะอาชีพนักเรียน ม.๑ - ม.๖ (คลิกภาพเพื่อขยาย)</span>
                </h4>
                <p className="text-xs text-slate-500">
                  ภาพกิจกรรมการเรียนรู้แบบลงมือปฏิบัติจริง (Active Learning) บูรณาการเศรษฐกิจพอเพียง
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                ๖ ระดับชั้น
              </span>
            </div>

            {/* 6 Grades Vocational Album Cards (Canva Album Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenge2.grades.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  {/* Hero Photo with zoom on click */}
                  <div
                    onClick={() =>
                      setPreviewPhoto({
                        id: `voc-${idx}`,
                        title: item.title,
                        category: item.category,
                        caption: item.details,
                        imageUrl: item.mainPhoto,
                        tag: item.grade,
                      })
                    }
                    className="relative h-56 overflow-hidden bg-slate-100 cursor-pointer"
                  >
                    <img
                      src={item.mainPhoto}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${item.color.badge}`}>
                        {item.grade}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <div className="p-1.5 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/70 transition-colors">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] font-medium text-amber-300 flex items-center gap-1 mb-0.5">
                        <Tag className="w-3 h-3" />
                        <span>{item.category}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg sm:text-xl text-white tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Body Content & Details */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <p className="text-xs font-semibold text-slate-800 mb-1.5">
                        {item.tagline}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.details}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-[10px] text-slate-400 mb-1.5">ทักษะที่ได้รับการส่งเสริม:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

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

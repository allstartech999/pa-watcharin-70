import React from 'react';
import { PA_DATA } from '../data/paData';
import { FileText, ArrowRight, Award, ExternalLink, Calendar, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-mesh-soft">
      {/* Background Decorative Soft Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-amber-200/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-sky-200/80 shadow-sm text-sky-800 text-xs sm:text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>รอบการประเมิน ปีงบประมาณ พ.ศ. {PA_DATA.meta.fiscalYear}</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600 text-xs">{PA_DATA.meta.roundPeriod}</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 rounded-lg text-sky-700 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1">
                Performance Agreement (PA)
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
                รายงานผลการพัฒนางาน <br />
                <span className="gradient-text-vibrant">ตามข้อตกลงในการพัฒนางาน</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto lg:mx-0 pt-2">
                สำหรับข้าราชการครูและบุคลากรทางการศึกษา <strong className="font-semibold text-slate-800">ตำแหน่งผู้บริหารสถานศึกษา</strong>
                <br className="hidden sm:inline" /> วิทยฐานะชำนาญการพิเศษ ประจำปีงบประมาณ พ.ศ. {PA_DATA.meta.fiscalYear}
              </p>
            </div>

            {/* Quote / Vision */}
            <div className="p-4 sm:p-5 rounded-2xl glass-card border border-white/80 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-sky-400 via-indigo-400 to-rose-400" />
              <p className="text-sm sm:text-base text-slate-700 italic pl-2">
                "{PA_DATA.director.quote}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#standards"
                className="px-6 py-3 rounded-2xl font-medium text-sm sm:text-base text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-600 hover:from-sky-600 hover:to-indigo-700 shadow-md shadow-sky-300/40 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>ส่วนที่ ๑ มาตรฐานตำแหน่ง</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#challenges"
                className="px-6 py-3 rounded-2xl font-medium text-sm sm:text-base text-slate-700 bg-white/90 hover:bg-white hover:text-sky-600 border border-slate-200/80 shadow-soft hover:shadow-md transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>ส่วนที่ ๒ ประเด็นท้าทาย</span>
              </a>

              <a
                href={PA_DATA.downloads.fullReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl font-medium text-sm sm:text-base text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-sky-600" />
                <span>รูปเล่มเอกสาร PDF</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {PA_DATA.director.school}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                {PA_DATA.director.affiliation}
              </span>
            </div>
          </div>

          {/* Right Column: Director Profile Card & Highlights */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-300 via-indigo-300 to-rose-300 rounded-3xl blur-xl opacity-50 -z-10" />

              {/* Card Container */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white shadow-card space-y-6">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-4 ring-sky-100 shadow-md">
                      <img
                        src={PA_DATA.director.avatarUrl}
                        alt={PA_DATA.director.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-1 bg-gradient-to-tr from-sky-500 to-indigo-600 text-white rounded-lg shadow-sm">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                      ผู้บริหารสถานศึกษา
                    </span>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                      {PA_DATA.director.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-sky-700 font-medium">
                      {PA_DATA.director.position}
                    </p>
                    <p className="text-xs text-slate-500">
                      {PA_DATA.director.academicStanding}
                    </p>
                  </div>
                </div>

                {/* School & Affiliation Details */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-400">สถานศึกษา:</span>
                    <span className="font-semibold text-slate-700">{PA_DATA.director.school}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">สังกัด:</span>
                    <span className="font-medium text-slate-700">{PA_DATA.director.affiliationShort}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ปีงบประมาณ:</span>
                    <span className="font-bold text-sky-600">พ.ศ. {PA_DATA.meta.fiscalYear}</span>
                  </div>
                </div>

                {/* Stats Grid inside card */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {PA_DATA.stats.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-gradient-to-br from-white to-sky-50/50 border border-sky-100/80 shadow-xs text-center"
                    >
                      <div className="text-lg sm:text-xl font-heading font-bold text-sky-700">
                        {s.value}
                      </div>
                      <div className="text-xs font-medium text-slate-700">{s.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Direct Document View link */}
                <a
                  href={PA_DATA.downloads.fullReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-sky-800 bg-sky-100/70 hover:bg-sky-200/70 transition-colors"
                >
                  <FileText className="w-4 h-4 text-sky-700" />
                  <span>เปิดดูแบบข้อตกลง PA 1/ส (ออนไลน์)</span>
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

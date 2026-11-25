import React from 'react';
import { PA_DATA } from '../data/paData';
import { BrandLogo } from './BrandLogo';
import { ExternalLink, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" />
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-heading font-bold text-lg text-white">
                  {PA_DATA.director.school}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-950 text-sky-400 border border-sky-800">
                  PA {PA_DATA.meta.fiscalYear}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              {PA_DATA.director.name} • {PA_DATA.director.position}
            </p>
            <p className="text-xs text-slate-500">
              {PA_DATA.director.affiliation} ({PA_DATA.director.affiliationShort})
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 text-xs">
            <a
              href={PA_DATA.downloads.fullReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>ดาวน์โหลดเอกสาร PA (PDF)</span>
            </a>

            <a
              href={PA_DATA.downloads.spmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <span>{PA_DATA.director.affiliationShort}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>
            © {PA_DATA.meta.fiscalYear} {PA_DATA.director.school} • สพม. มหาสารคาม
          </p>
          <p className="flex items-center gap-1">
            <span>จัดทำเพื่อการประเมินวิทยฐานะตามข้อตกลงในการพัฒนางาน (ว.PA)</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { PA_DATA } from '../data/paData';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Download, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'หน้าหลัก', icon: BookOpen },
    { id: 'standards', label: 'ส่วนที่ ๑ มาตรฐานตำแหน่ง', icon: ShieldCheck },
    { id: 'challenges', label: 'ส่วนที่ ๒ ประเด็นท้าทาย', icon: Sparkles },
    { id: 'gallery', label: 'ภาพกิจกรรม', icon: Sparkles },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-sky-100/80 py-2.5'
          : 'bg-white/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <BrandLogo
              variant="pa-monogram"
              size="md"
              className="rounded-2xl shadow-md shadow-sky-200/60 group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-slate-800 text-base sm:text-lg tracking-tight">
                  {PA_DATA.director.school}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                  ปีงบ {PA_DATA.meta.fiscalYear}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {PA_DATA.director.name} • {PA_DATA.director.academicStanding}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-sm">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-sky-700 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-600' : 'text-slate-400'}`} />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Download Document */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={PA_DATA.downloads.fullReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-600 hover:opacity-95 shadow-md shadow-sky-300/40 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>ดาวน์โหลดเล่ม PA (PDF)</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-100 space-y-1.5 animate-fadeIn">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
                  activeSection === item.id
                    ? 'bg-sky-50 text-sky-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={PA_DATA.downloads.fullReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>ดาวน์โหลดเล่ม PA 2570</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

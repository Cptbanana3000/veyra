import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenApply }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Earnings", href: "#earnings" },
    { name: "Agency Benefits", href: "#benefits" },
    { name: "Process", href: "#process" },
    { name: "Standards", href: "#standards" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
      scrolled 
        ? 'bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800/80 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 font-semibold text-xs tracking-wider">
              V
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-zinc-100">VEYRA TALENT</span>
                <span className="text-[10px] text-zinc-400 font-normal px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">PARTNER</span>
              </div>
              <p className="text-[11px] text-zinc-500">Chamet Broadcaster Recruitment</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-normal text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Email & Apply */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="mailto:recruitment@veyra.agency"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-normal text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>recruitment@veyra.agency</span>
            </a>

            <button
              onClick={onOpenApply}
              className="px-4 py-1.5 rounded-md text-xs font-medium bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors"
            >
              Apply as Broadcaster
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenApply}
              className="px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-950 font-medium text-xs"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md border border-zinc-800 text-zinc-400 hover:text-zinc-200"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-4 space-y-3 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-400 hover:text-zinc-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href="mailto:recruitment@veyra.agency"
              className="flex items-center justify-center gap-2 py-2 rounded-md text-xs border border-zinc-800 text-zinc-300"
            >
              <Mail className="w-3.5 h-3.5" />
              recruitment@veyra.agency
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-2 rounded-md text-xs font-medium bg-zinc-100 text-zinc-950"
            >
              Apply as Broadcaster
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

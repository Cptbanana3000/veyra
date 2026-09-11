import React from 'react';
import { Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenApply, onOpenTerms, onOpenPrivacy, onOpenRules }) {
  return (
    <footer className="bg-[#070709] border-t border-zinc-800/80 pt-14 pb-12 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Brand & Partner Notice */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-black border border-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Veyra Agency Logo"
                  className="w-full h-full object-cover scale-[1.55]"
                />
              </div>
              <div>
                <span className="font-semibold text-sm tracking-tight text-zinc-100">VEYRA TALENT AGENCY</span>
                <p className="text-[11px] text-zinc-500">Authorized Talent Partner</p>
              </div>
            </div>

            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
              Authorized independent recruitment partner for the Chamet live interactive entertainment ecosystem. Facilitating broadcaster onboarding, compliance, and weekly settlements with 0% agency deductions.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" /> 18+ Verification Required
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                0% Agency Fee
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-zinc-200 font-medium text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li><a href="#overview" className="hover:text-zinc-200 transition-colors">Platform Overview</a></li>
              <li><a href="#earnings" className="hover:text-zinc-200 transition-colors">Earnings Calculator</a></li>
              <li><a href="#benefits" className="hover:text-zinc-200 transition-colors">Agency Representation</a></li>
              <li><a href="#process" className="hover:text-zinc-200 transition-colors">Onboarding Process</a></li>
              <li><a href="#standards" className="hover:text-zinc-200 transition-colors">Safety Standards</a></li>
              <li><a href="#faq" className="hover:text-zinc-200 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2.5">
            <h4 className="text-zinc-200 font-medium text-xs uppercase tracking-wider">Policies</h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <button onClick={onOpenTerms} className="hover:text-zinc-200 transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-zinc-200 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenRules} className="hover:text-zinc-200 transition-colors text-left">
                  Host Code of Conduct
                </button>
              </li>
              <li>
                <a 
                  href="https://www.chamet.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1 text-zinc-400"
                >
                  Official Chamet Site <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact (Email Only) */}
          <div className="space-y-2.5">
            <h4 className="text-zinc-200 font-medium text-xs uppercase tracking-wider">Contact Agency</h4>
            <div className="space-y-2">
              <a
                href="mailto:recruitment@veyra.agency"
                className="flex items-center gap-2 p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-200 hover:border-zinc-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-xs">recruitment@veyra.agency</span>
              </a>
              <p className="text-[11px] text-zinc-500 leading-normal">
                Direct talent management inquiries and onboarding support. Responses within 1–2 business hours.
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} Veyra Talent Agency. Authorized independent recruitment partner for Chamet (<a href="https://www.chamet.com/" target="_blank" rel="noreferrer" className="underline hover:text-zinc-400">chamet.com</a>).
          </p>
          <div className="text-zinc-500">
            Email-first talent management
          </div>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { ArrowRight, Mail, ExternalLink, ShieldCheck, Check } from 'lucide-react';

export default function Hero({ onOpenApply }) {
  return (
    <section className="pt-32 pb-20 border-b border-zinc-800/80 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-normal mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
          <span>Authorized Chamet Talent Partner</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">18+ Broadcaster Recruitment</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Headline & Facts */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 leading-[1.15]">
              Recruiting verified live streamers for Chamet.
            </h1>

            <p className="text-base text-zinc-400 font-normal leading-relaxed max-w-xl">
              Earn <span className="text-zinc-100 font-medium">up to ₹1,00,000+ per month</span> broadcasting on your own leisure. Connect with verified global viewers across 150+ countries with guaranteed <span className="text-zinc-100 font-medium">weekly direct payouts</span> and zero agency fees.
            </p>

            {/* Core Guardrails / Facts Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span>Zero registration fees (0% agency cut)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span>Broadcast on your own leisure & hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span>Interact with verified international fans</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span>Direct bank payout every Thursday</span>
              </div>
            </div>

            {/* Action Buttons: Email & Apply */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenApply}
                className="px-5 py-2.5 rounded-md bg-zinc-100 text-zinc-950 hover:bg-zinc-200 font-medium text-xs transition-colors flex items-center gap-2"
              >
                <span>Apply as Broadcaster</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="mailto:recruitment@veyra.agency"
                className="px-5 py-2.5 rounded-md border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 font-normal text-xs transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Agency Team</span>
              </a>

              <a
                href="https://www.chamet.com/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
              >
                <span>chamet.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-4 text-[11px] text-zinc-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                Strict 18+ Biometric Check
              </span>
              <span>•</span>
              <span>Regional Geo-Blocking Supported</span>
            </div>
          </div>

          {/* Right Column: Restrained Editorial Data Panel */}
          <div className="lg:col-span-5">
            <div className="card-neutral p-6 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs text-zinc-400 font-medium">Recruitment Benchmark</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  Weekly Settlements
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wider">Estimated Monthly Earnings</div>
                  <div className="text-3xl font-semibold tracking-tight text-zinc-100 mt-1">₹60,000 – ₹1,20,000+</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Based on 2–4 broadcast hours per day at leisure</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-md bg-zinc-900/50 border border-zinc-800/80">
                    <div className="text-[10px] text-zinc-500">Settlement Frequency</div>
                    <div className="text-sm font-medium text-zinc-200 mt-0.5">Every Thursday</div>
                  </div>
                  <div className="p-3 rounded-md bg-zinc-900/50 border border-zinc-800/80">
                    <div className="text-[10px] text-zinc-500">Agency Commission</div>
                    <div className="text-sm font-medium text-zinc-200 mt-0.5">0% (Platform Paid)</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 text-xs text-zinc-400 leading-relaxed">
                  Broadcasters retain full control over their camera, audience selection, and broadcast times. Full email guidance provided upon acceptance.
                </div>
              </div>

              <button
                onClick={onOpenApply}
                className="w-full py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-xs font-medium transition-colors text-center"
              >
                Submit Free Broadcaster Application
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

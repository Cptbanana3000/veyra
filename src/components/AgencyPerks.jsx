import React from 'react';
import { ShieldCheck, MailCheck, Trophy, Sparkles, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function AgencyPerks({ onOpenApply }) {
  const perks = [
    {
      icon: ShieldCheck,
      title: "0% Commission Deduction",
      desc: "Unlike unauthorized intermediaries who deduct 20% to 40% from your pay, Veyra takes 0% from your base host earnings. Chamet compensates our operations directly."
    },
    {
      icon: MailCheck,
      title: "Email & Manager Onboarding Support",
      desc: "Direct support to guide you through registration, profile setup, lighting, and platform navigation with responses within 1 to 2 business hours."
    },
    {
      icon: TrendingUp,
      title: "Audience & Gifter Engagement Strategy",
      desc: "Structured guidance on viewer retention, camera presence, respectful conversation, and converting one-time visitors into consistent supporters."
    },
    {
      icon: ShieldCheck,
      title: "Account Safety & Policy Escalation",
      desc: "Direct escalation channels with Chamet moderation if your account experiences false-positive automated flags or safety concerns."
    },
    {
      icon: Sparkles,
      title: "Direct Bank Payout Setup",
      desc: "Step-by-step assistance configuring Indian Bank Transfer (IMPS/NEFT), E-Wallets, or USDT to ensure weekly settlements arrive reliably."
    },
    {
      icon: Trophy,
      title: "Agency Leaderboard Incentives",
      desc: "Eligible broadcasters receive supplemental monthly bonus rewards based on broadcast hours and performance benchmarks."
    }
  ];

  return (
    <section id="benefits" className="py-20 border-b border-zinc-800/80 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Agency Representation</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-2">
            Why register through an authorized agency partner.
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed mt-2">
            Independent broadcasters without agency affiliation often lack dispute resolution, configuration assistance, or account protection. Veyra provides comprehensive onboarding support at zero cost.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div 
                key={idx}
                className="card-neutral card-neutral-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-zinc-500">
                  <CheckCircle className="w-3 h-3 text-zinc-400" />
                  <span>Provided at zero charge</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-12 p-6 rounded-md bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-medium text-zinc-200">Ready to join our roster of verified broadcasters?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Registration is free and takes approximately 2 minutes.</p>
          </div>
          <button
            onClick={onOpenApply}
            className="px-4 py-2 rounded-md bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

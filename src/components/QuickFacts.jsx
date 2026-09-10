import React from 'react';
import { DollarSign, Clock, Globe2, Wallet, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function QuickFacts() {
  const facts = [
    {
      icon: DollarSign,
      title: "Earn Up to ₹1,00,000+ / Month",
      desc: "Top and regular broadcasters generate ₹60,000 to ₹1,50,000+ monthly through direct call beans, virtual gifts, lucky multipliers, and platform incentive bonuses.",
      tag: "Earnings"
    },
    {
      icon: Clock,
      title: "Broadcast at Your Own Leisure",
      desc: "Zero mandatory shifts or minimum daily requirements. Broadcast from your living room, desk, or travel whenever your schedule permits.",
      tag: "Autonomy"
    },
    {
      icon: Globe2,
      title: "Interact with Global Viewers",
      desc: "Connect with verified audiences across 150+ countries. Build an international following, practice languages, and receive cross-border support.",
      tag: "Audience"
    },
    {
      icon: Wallet,
      title: "Weekly Direct Settlements",
      desc: "Verified earnings are settled weekly every Thursday via Bank Transfer (IMPS/NEFT), E-Wallets, Payoneer, or crypto USDT without platform delays.",
      tag: "Payouts"
    },
    {
      icon: HeartHandshake,
      title: "0% Agency Commission Deductions",
      desc: "100% of your validly earned host diamonds and beans remain yours. Agency representation is compensated directly by Chamet with zero deduction from your earnings.",
      tag: "Zero Fee"
    },
    {
      icon: ShieldCheck,
      title: "Regional Privacy Protection",
      desc: "Enable geo-blocking to exclude viewers from your home country, state, or region. Broadcast under your chosen pseudonym with built-in screen capture restrictions.",
      tag: "Privacy"
    }
  ];

  return (
    <section id="overview" className="py-20 border-b border-zinc-800/80 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Key Specifications</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-2">
            Broadcaster terms and platform expectations.
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed mt-2">
            Transparent operational standards designed to give independent creators maximum flexibility, verified payouts, and absolute schedule control.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div 
                key={index}
                className="card-neutral card-neutral-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      {fact.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-100 mb-2">
                    {fact.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {fact.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-500">
                  Standard Agency Benefit
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

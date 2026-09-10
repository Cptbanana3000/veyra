import React from 'react';
import { UserCheck, Shield, Video, Wallet, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenApply }) {
  const steps = [
    {
      num: "01",
      title: "Submit Application",
      desc: "Complete the recruitment form on this page or email our team. No upfront fees, registration charges, or contracts required.",
      icon: UserCheck
    },
    {
      num: "02",
      title: "Agency Code Issued",
      desc: "Our onboarding manager reviews your application and sends your official Chamet Agency Invitation Code with setup instructions via email within 1–2 hours.",
      icon: Shield
    },
    {
      num: "03",
      title: "Install & 18+ Verification",
      desc: "Download Chamet from Google Play or App Store, enter the agency code, and complete Chamet's mandatory 30-second biometric age and face check.",
      icon: Video
    },
    {
      num: "04",
      title: "Broadcast & Receive Payouts",
      desc: "Broadcast on your own leisure, interact with global audiences, and receive weekly payouts deposited directly to your bank account every Thursday.",
      icon: Wallet
    }
  ];

  return (
    <section id="process" className="py-20 border-b border-zinc-800/80 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Onboarding Workflow</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-2">
            Four simple steps from application to first settlement.
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed mt-2">
            A transparent, streamlined registration process designed to get you active within 24 hours.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="card-neutral p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-semibold text-zinc-500">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-100 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-500 font-mono">
                  {idx === 0 && "Time: ~2 minutes"}
                  {idx === 1 && "Turnaround: 1–2 hours"}
                  {idx === 2 && "Verification: 30 seconds"}
                  {idx === 3 && "Cycle: Weekly Thursday"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 rounded-md bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
          >
            <span>Begin Step 1 Application</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

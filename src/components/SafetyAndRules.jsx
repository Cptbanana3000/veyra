import React from 'react';
import { hostRules } from '../data/termsData';
import { ShieldAlert, EyeOff, Lock, Check } from 'lucide-react';

export default function SafetyAndRules({ onOpenTerms }) {
  return (
    <section id="standards" className="py-20 border-b border-zinc-800/80 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Compliance & Guidelines</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-2">
            Broadcaster safety and platform compliance standards.
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed mt-2">
            Chamet maintains automated computer-vision moderation alongside human review to ensure a safe, legal, and harassment-free broadcasting environment.
          </p>
        </div>

        {/* Highlight Banner: 18+ Verification */}
        <div className="mb-8 p-6 rounded-md bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-zinc-200 font-medium text-sm">
              <ShieldAlert className="w-4 h-4 text-zinc-400" />
              <span>Strict 18+ Biometric Age Verification</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              All broadcasters must be at least 18 years of age. Comprehensive platform compliance and conduct guidelines have been dispatched separately via email.
            </p>
          </div>
          <button
            onClick={onOpenTerms}
            className="px-3.5 py-1.5 rounded-md text-xs font-normal text-zinc-300 border border-zinc-700 hover:bg-zinc-800 whitespace-nowrap transition-colors"
          >
            Review Terms & Policies
          </button>
        </div>

        {/* 6 Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostRules.map((rule, idx) => (
            <div 
              key={idx}
              className="card-neutral p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    Rule 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {rule.severity}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-100 mb-2">{rule.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{rule.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-zinc-500">
                <Check className="w-3 h-3 text-zinc-400" />
                <span>Enforced 24/7 by Chamet System</span>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy & Control Cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card-neutral p-6">
            <div className="flex items-center gap-2.5 mb-2">
              <EyeOff className="w-4 h-4 text-zinc-400" />
              <h4 className="text-sm font-medium text-zinc-200">Regional Geo-Blocking</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Chamet includes regional privacy settings allowing broadcasters to hide their profile and live rooms from users in their home country, state, or province.
            </p>
          </div>

          <div className="card-neutral p-6">
            <div className="flex items-center gap-2.5 mb-2">
              <Lock className="w-4 h-4 text-zinc-400" />
              <h4 className="text-sm font-medium text-zinc-200">Broadcaster Authority</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Broadcasters have continuous control over their streams, including the ability to immediately end calls, mute, or permanently block any viewer engaging in discourteous behavior.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

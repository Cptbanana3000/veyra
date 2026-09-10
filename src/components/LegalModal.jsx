import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { termsOfService, privacyPolicy, hostRules } from '../data/termsData';

export default function LegalModal({ isOpen, onClose, initialTab = 'terms' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-lg p-6 sm:p-8 shadow-2xl my-8 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 flex-shrink-0">
          <div>
            <h3 className="font-semibold text-base text-zinc-100">
              Agency Documentation & Policies
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">Veyra Talent Agency — Chamet Partner</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 pt-4 pb-3 border-b border-zinc-800/80 flex-shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'terms'
                ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/50'
            }`}
          >
            Terms of Service & Host Agreement
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'privacy'
                ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/50'
            }`}
          >
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'rules'
                ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/50'
            }`}
          >
            Chamet Code of Conduct
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-6 space-y-6 pr-2 text-zinc-300 text-xs leading-relaxed">
          
          {/* TERMS */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-zinc-800/60 font-mono text-[11px]">
                <span>Document: {termsOfService.title}</span>
                <span>Updated: {termsOfService.lastUpdated}</span>
              </div>

              {termsOfService.sections.map((sec, i) => (
                <div key={i} className="space-y-1.5">
                  <h4 className="font-semibold text-zinc-200 text-xs">
                    {sec.heading}
                  </h4>
                  <div className="whitespace-pre-line text-zinc-400">
                    {sec.content}
                  </div>
                </div>
              ))}

              <div className="p-3 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-500">
                Official Chamet Platform Portal: <a href="https://www.chamet.com/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:underline inline-flex items-center gap-1">https://www.chamet.com/ <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          )}

          {/* PRIVACY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-zinc-800/60 font-mono text-[11px]">
                <span>Document: {privacyPolicy.title}</span>
                <span>Updated: {privacyPolicy.lastUpdated}</span>
              </div>

              {privacyPolicy.sections.map((sec, i) => (
                <div key={i} className="space-y-1.5">
                  <h4 className="font-semibold text-zinc-200 text-xs">
                    {sec.heading}
                  </h4>
                  <div className="whitespace-pre-line text-zinc-400">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* RULES */}
          {activeTab === 'rules' && (
            <div className="space-y-4">
              <div className="p-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">
                <strong>Broadcaster Compliance Standards:</strong> Chamet strictly enforces broadcaster quality, 18+ age verification, and account security. Detailed conduct guidelines are dispatched via email upon onboarding.
              </div>

              {hostRules.map((rule, i) => (
                <div key={i} className="p-3.5 rounded-md bg-zinc-900/40 border border-zinc-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-200 text-xs">{rule.title}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {rule.severity}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer Button */}
        <div className="pt-4 border-t border-zinc-800 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
}

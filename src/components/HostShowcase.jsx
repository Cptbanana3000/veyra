import React from 'react';
import { testimonials } from '../data/testimonials';
import { Check } from 'lucide-react';

export default function HostShowcase() {
  return (
    <section className="py-20 border-b border-zinc-800/80 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Case Studies</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-2">
            Broadcaster experiences and verified milestones.
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed mt-2">
            Insights from creators who integrated Chamet broadcasting into their daily schedules.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="card-neutral p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-xs text-zinc-300 font-medium">
                    {item.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-medium text-zinc-200 text-xs">{item.name}</h3>
                      <span className="inline-flex items-center text-emerald-400" title="Verified Chamet Broadcaster">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500">{item.location}</p>
                  </div>
                </div>

                <div className="p-3 rounded-md bg-zinc-900/50 border border-zinc-800/80 mb-4">
                  <div className="flex justify-between text-[10px] text-zinc-500 mb-1">
                    <span>{item.period}</span>
                    <span className="font-mono text-zinc-400">{item.streamTime}</span>
                  </div>
                  <div className="text-lg font-semibold text-zinc-100 font-mono">
                    {item.earnings}
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  {item.badge}
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

export default function EarningsCalculator({ onOpenApply }) {
  const [hoursPerDay, setHoursPerDay] = useState(3);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [hostLevel, setHostLevel] = useState("intermediate");
  const [currency, setCurrency] = useState("INR");

  const multipliers = {
    beginner: { inrRate: 260, usdRate: 3.1, label: "Beginner" },
    intermediate: { inrRate: 520, usdRate: 6.2, label: "Regular Broadcaster" },
    pro: { inrRate: 1150, usdRate: 13.8, label: "Top-Tier Host" }
  };

  const totalHoursMonthly = hoursPerDay * (daysPerWeek * 4.3);
  const currentMultiplier = multipliers[hostLevel];
  
  const estimatedMonthlyINR = Math.round(totalHoursMonthly * currentMultiplier.inrRate);
  const estimatedMonthlyUSD = Math.round(totalHoursMonthly * currentMultiplier.usdRate);
  
  const displayMonthly = currency === "INR" 
    ? `₹${estimatedMonthlyINR.toLocaleString('en-IN')}` 
    : `$${estimatedMonthlyUSD.toLocaleString('en-US')}`;
    
  const displayWeekly = currency === "INR" 
    ? `₹${Math.round(estimatedMonthlyINR / 4.3).toLocaleString('en-IN')}` 
    : `$${Math.round(estimatedMonthlyUSD / 4.3).toLocaleString('en-US')}`;

  const estimatedBeans = Math.round(totalHoursMonthly * (hostLevel === 'beginner' ? 25000 : hostLevel === 'intermediate' ? 55000 : 120000));

  return (
    <section id="earnings" className="py-20 border-b border-zinc-800/80 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Earnings Model</span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-2">
              Calculate projected broadcaster revenue.
            </h2>
            <p className="text-sm text-zinc-400 font-normal mt-2">
              Estimates derived from verified Chamet host performance data based on broadcast consistency and hours.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="inline-flex rounded-md p-1 bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                currency === "INR" 
                  ? "bg-zinc-800 text-zinc-100" 
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                currency === "USD" 
                  ? "bg-zinc-800 text-zinc-100" 
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className="card-neutral p-6 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Hours/Day */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-zinc-300">
                    Broadcast Hours Per Day
                  </label>
                  <span className="text-xs font-mono text-zinc-100 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                    {hoursPerDay} {hoursPerDay === 1 ? 'Hour' : 'Hours'} / day
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded appearance-none cursor-pointer accent-zinc-200"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1.5 font-mono">
                  <span>1h (Casual)</span>
                  <span>4h (Part-time)</span>
                  <span>8h (High Activity)</span>
                </div>
              </div>

              {/* Slider 2: Days/Week */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-zinc-300">
                    Active Days Per Week
                  </label>
                  <span className="text-xs font-mono text-zinc-100 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                    {daysPerWeek} Days / week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="7"
                  step="1"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded appearance-none cursor-pointer accent-zinc-200"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1.5 font-mono">
                  <span>2 Days (Weekends)</span>
                  <span>5 Days (Standard)</span>
                  <span>7 Days (Daily)</span>
                </div>
              </div>

              {/* Tier Selection */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-2">
                  Engagement Profile
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: "beginner", label: "Beginner", desc: "No prior base" },
                    { key: "intermediate", label: "Regular Host", desc: "Active callers" },
                    { key: "pro", label: "Top Broadcaster", desc: "VIP following" },
                  ].map((tier) => (
                    <button
                      key={tier.key}
                      onClick={() => setHostLevel(tier.key)}
                      className={`p-3 rounded-md text-left border text-xs transition-colors ${
                        hostLevel === tier.key
                          ? "bg-zinc-800/90 border-zinc-600 text-zinc-100"
                          : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <div className="font-medium text-zinc-200">{tier.label}</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Projected Output (Col 5) */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-md bg-zinc-900/60 border border-zinc-800 space-y-5">
                
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Projected Monthly Revenue
                  </span>
                  <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100 mt-1">
                    {displayMonthly}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    ≈ {displayWeekly} per weekly settlement
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-zinc-800 text-xs text-zinc-400">
                  <div className="flex justify-between">
                    <span>Monthly Broadcast Time:</span>
                    <span className="font-mono text-zinc-200">~{Math.round(totalHoursMonthly)} hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Platform Beans:</span>
                    <span className="font-mono text-zinc-200">{estimatedBeans.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Agency Fee:</span>
                    <span className="text-zinc-200 font-medium">0% (Zero Deduction)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Settlement Cycle:</span>
                    <span className="text-zinc-200 font-medium">Weekly (Thursday)</span>
                  </div>
                </div>

                <button
                  onClick={onOpenApply}
                  className="w-full py-2.5 rounded-md bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply with This Revenue Goal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  Estimates are performance-based and non-binding. Payouts are determined strictly by Chamet virtual gift and video call metrics.
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

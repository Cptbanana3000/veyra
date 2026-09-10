import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown, Mail } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-b border-zinc-800/80 bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Inquiries</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-2">
            Frequently asked questions.
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed mt-2">
            Essential operational details regarding Chamet live broadcasting, settlements, and agency support.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="card-neutral overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-medium text-zinc-200 text-sm">
                    {faq.question}
                  </span>
                  <div className={`text-zinc-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-zinc-200' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Email Support Box */}
        <div className="mt-12 p-6 rounded-md bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-medium text-zinc-200">Have a specific question not covered here?</h4>
            <p className="text-xs text-zinc-500 mt-0.5">Our agency manager team responds to all recruitment inquiries via email.</p>
          </div>
          <a
            href="mailto:recruitment@veyra.agency"
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 hover:bg-zinc-800 text-zinc-200 text-xs font-medium transition-colors whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>recruitment@veyra.agency</span>
          </a>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { X, Mail, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export default function ApplicationModal({ isOpen, onClose, onOpenTerms, onOpenPrivacy }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    city: '',
    country: 'India',
    chametStatus: 'new',
    chametId: '',
    hoursDaily: '2-4 hours',
    languages: 'Hindi, English',
    agreed: true
  });

  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const ageNum = parseInt(formData.age, 10);
    if (isNaN(ageNum) || ageNum < 18) {
      setError('You must be at least 18 years of age to apply as a Chamet broadcaster.');
      return;
    }

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setError('Please provide your full name and a valid email address.');
      return;
    }

    if (!formData.agreed) {
      setError('You must agree to the Terms of Service and 18+ policy.');
      return;
    }

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If an access key is configured in .env, submit via Web3Forms API
    if (accessKey && accessKey.trim() !== '' && accessKey !== 'your_web3forms_access_key_here') {
      try {
        const payload = {
          access_key: accessKey.trim(),
          subject: `New Chamet Broadcaster Application: ${formData.fullName}`,
          from_name: "Veyra Talent Recruitment Portal",
          name: formData.fullName,
          email: formData.email,
          age: formData.age,
          city: formData.city || 'N/A',
          country: formData.country,
          chamet_status: formData.chametStatus === 'existing' ? `Existing ID: ${formData.chametId}` : 'New Broadcaster (Needs Onboarding Code)',
          daily_hours: formData.hoursDaily,
          languages: formData.languages,
          botcheck: ""
        };

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (data.success) {
          setSubmitted(true);
        } else {
          setError(data.message || 'Error submitting application. Please use the "Send via Email Client" button below.');
        }
      } catch (err) {
        setError('Network error submitting form. Please use the "Send via Email Client" button below.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Local fallback / prototype mode: Access key not yet configured in .env
      // Simulate quick transmission and succeed
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
    }
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`Chamet Broadcaster Application - ${formData.fullName || 'New Host'}`);
    const body = encodeURIComponent(
`Full Legal Name: ${formData.fullName || 'N/A'}
Age: ${formData.age || '18+'}
Contact Email: ${formData.email || 'N/A'}
City/Country: ${formData.city || 'N/A'}, ${formData.country}
Chamet Account Status: ${formData.chametStatus === 'existing' ? 'Existing ID: ' + (formData.chametId || 'N/A') : 'New Broadcaster (Need Code)'}
Daily Availability: ${formData.hoursDaily}
Languages Spoken: ${formData.languages}

I request official agency onboarding and binding instructions for Chamet.`
    );
    window.location.href = `mailto:recruitment@veyra.agency?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-lg p-5 sm:p-8 shadow-2xl my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
              <CheckCircle2 className="w-6 h-6 text-zinc-300" />
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-zinc-100">
              Application Successfully Received
            </h3>

            <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-zinc-200 font-medium">{formData.fullName}</span>. Your details have been submitted to our talent team. An onboarding email containing your Chamet Agency Binding Code and step-by-step instructions will be sent to <span className="text-zinc-200 font-medium">{formData.email}</span> within 1–2 business hours.
            </p>

            <div className="p-4 rounded-md bg-zinc-900/60 border border-zinc-800 text-left max-w-md mx-auto mt-4 space-y-1 text-xs text-zinc-400">
              <div className="text-zinc-300 font-medium">Agency Point of Contact:</div>
              <div>Email: <a href="mailto:recruitment@veyra.agency" className="text-zinc-200 hover:underline">recruitment@veyra.agency</a></div>
              <div>Official Platform: <a href="https://www.chamet.com/" target="_blank" rel="noreferrer" className="text-zinc-200 hover:underline">chamet.com</a></div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-md text-xs font-medium bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                Done
              </button>
              <button
                onClick={handleDirectEmail}
                className="px-4 py-2 rounded-md border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-xs font-normal transition-colors flex items-center gap-1.5"
                title="Send a backup copy directly from your email client"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email Copy</span>
              </button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <div>
            <div className="pr-8 mb-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Broadcaster Onboarding</span>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-100 mt-1">
                Apply for Chamet Agency Representation
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Zero registration fees. 100% host earnings retained. Official response via email.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-md bg-rose-950/40 border border-rose-800/80 text-rose-300 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name and Age */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="First and Last Name"
                    className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Age (18+) *
                  </label>
                  <input
                    type="number"
                    name="age"
                    min="18"
                    max="65"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="18"
                    className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-zinc-600"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Contact Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.name@example.com"
                  className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-zinc-600"
                />
                <p className="text-[10px] text-zinc-500 mt-1">Your official Chamet agency binding code will be emailed here.</p>
              </div>

              {/* City and Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai / Delhi"
                    className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. India"
                    className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-xs focus:outline-none focus:border-zinc-600"
                  />
                </div>
              </div>

              {/* Chamet Account Status */}
              <div className="p-3 rounded-md bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                <label className="block text-xs font-medium text-zinc-300">
                  Chamet Registration Status
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer">
                    <input
                      type="radio"
                      name="chametStatus"
                      value="new"
                      checked={formData.chametStatus === 'new'}
                      onChange={handleChange}
                      className="accent-zinc-100"
                    />
                    <span>New (Need Account Code)</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer">
                    <input
                      type="radio"
                      name="chametStatus"
                      value="existing"
                      checked={formData.chametStatus === 'existing'}
                      onChange={handleChange}
                      className="accent-zinc-100"
                    />
                    <span>Already Have Chamet App</span>
                  </label>
                </div>

                {formData.chametStatus === 'existing' && (
                  <input
                    type="text"
                    name="chametId"
                    value={formData.chametId}
                    onChange={handleChange}
                    placeholder="Enter your existing Chamet User ID"
                    className="w-full px-3 py-1.5 rounded bg-zinc-950 border border-zinc-700 text-zinc-100 text-xs focus:outline-none mt-1"
                  />
                )}
              </div>

              {/* Streaming Availability & Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Daily Availability
                  </label>
                  <select
                    name="hoursDaily"
                    value={formData.hoursDaily}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs focus:outline-none"
                  >
                    <option value="1-2 hours">1–2 hours / day (Casual)</option>
                    <option value="2-4 hours">2–4 hours / day (Regular)</option>
                    <option value="4+ hours">4+ hours / day (Full-time)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Spoken Languages
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="Hindi, English, etc."
                    className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs focus:outline-none"
                  />
                </div>
              </div>

              {/* Agreement */}
              <div className="pt-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="mt-0.5 accent-zinc-100"
                  />
                  <span className="text-[11px] text-zinc-400 leading-normal">
                    I declare that I am at least 18 years old and agree to the{' '}
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="text-zinc-200 underline hover:text-white"
                    >
                      Terms of Service
                    </button>
                    {' '}and{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="text-zinc-200 underline hover:text-white"
                    >
                      Privacy Policy
                    </button>
                    .
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2 rounded-md bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDirectEmail}
                  className="px-4 py-2 rounded-md border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-xs font-normal transition-colors flex items-center justify-center gap-1.5"
                  title="Send via your default email client"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

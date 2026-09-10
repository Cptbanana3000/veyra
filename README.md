# Veyra Talent Agency — Chamet Live Streamer Recruitment Website

A clean, editorial talent recruitment agency website for onboarding live streamers and models to the **Chamet** interactive entertainment platform.

Official Platform Reference: [https://www.chamet.com/](https://www.chamet.com/)

---

## 📬 Direct Email Delivery Setup (No Backend Needed)

The application form is wired to **Web3Forms** for zero-maintenance direct email delivery to your inbox. Every time a candidate applies, all details (Name, Age, Email, City/Country, Chamet ID, Daily Hours, Languages) are delivered straight to your email.

### How to Activate Email Delivery in 30 Seconds:
1. Go to **[https://web3forms.com](https://web3forms.com)** (100% Free, no account/card required).
2. Enter the email address where you want to receive applications (e.g. `recruitment@veyra.agency` or your personal Gmail).
3. Check your email for your free **Access Key**.
4. Paste it into your `.env` file:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
5. If deploying to **Vercel**:
   - Go to your Vercel Project Settings → **Environment Variables**.
   - Add `VITE_WEB3FORMS_ACCESS_KEY` with your access key.

---

## 🏛️ Design & Anti-Slop Compliance

- **90/10 Rule**: 90% neutral zinc/charcoal surfaces with 10% high-contrast editorial actions.
- **No AI Clichés**: Zero saturated multi-stop gradients, zero neon violet/cyan glow effects, and zero blurry radial blobs.
- **Typographic Discipline**: Strict 3 font-size scale per viewport (`tracking-tight` for titles, `leading-relaxed` for prose).
- **Verified Status**: Broadcaster testimonials feature clean monospace initials and verified checkmark ticks (`✓`).
- **Safety & Compliance**: Focuses on mandatory **Strict 18+ Biometric Age Verification** and account integrity without redundant conduct notices.
- **Email-Only Communication**: All legacy WhatsApp widgets removed in favor of clean email communication (`recruitment@veyra.agency`).
- **Playwright MCP Validated**: Tested and visually verified using Playwright MCP on the local development server.

---

## 🚀 Getting Started

### 1. Development Server
```bash
npm run dev
```
Open `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied).

### 2. Production Build
```bash
npm run build
```
Generates a lightweight, production-ready build in `dist/`.

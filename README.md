# LKLabs Studios

Creative Technology Studio — web development, UI/UX design, branding & social media.

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion · Supabase · Radix UI

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

> ⚠️ Do NOT use VS Code Live Server — it can't process `.tsx` or Vite aliases. Always use `npm run dev`.

---

## Environment Variables

Create a `.env` file in the root (copy from `.env.example`):

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

The contact form requires these to save submissions. Without them it shows a friendly error — the rest of the site works fine.

---

## Deploy to Netlify (free)

### Option A — Netlify UI (easiest)

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables under **Site settings → Environment variables**
6. Click **Deploy** — you'll get a live URL like `https://lklabs-studios.netlify.app`

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## Build for Production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally at localhost:4173
```

---

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable primitives (Badge, Card, Input, etc.)
│   └── ...          # Page sections
├── hooks/           # useTheme, useToast, useIsMobile
├── integrations/
│   └── supabase/    # Client + generated types
├── pages/
│   ├── Index.tsx    # Main page
│   └── NotFound.tsx
└── lib/utils.ts
```

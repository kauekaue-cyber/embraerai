# embraer.ai — GPT-powered smart search (Starter Kit)

**What this delivers**
- Next.js 14 (or 13) frontend with a simple chat UI (React + Tailwind)
- Serverless API route that performs a Retrieval-Augmented Generation (RAG) query:
  - retrieves top docs from Pinecone (using OpenAI embeddings)
  - calls OpenAI Chat Completions for final answer
- `crawler/` script to fetch embraer.com pages (polite, respects robots.txt) and create embeddings
- Deployment instructions for Vercel + GitHub Actions CI
- .env.example with required environment variables

**Important**
- You must provide your own OpenAI API key and Pinecone credentials (or adapt to another vector DB).
- Do NOT scrape or republish copyrighted content from embraer.com without permission. Use this starter only to index allowed public data, press releases, and specs (or ask Embraer for permission).

## Quick start (local)

1. Install dependencies (run where you want to host the project):
   ```
   npm install
   ```
2. Copy `.env.example` to `.env.local` and fill the variables.
3. Run the crawler to fetch and index content (see `crawler/README.md`).
4. `npm run dev` to run the Next.js app locally.

## Deploy
- Recommended: Vercel (connect your repo, set environment variables).
- Add DNS A/CNAME records for `embraer.ai` pointing to Vercel as instructed by Vercel.

## Files included
- `package.json`, `next.config.js`, `tailwind.config.js`
- `app/` or `pages/` frontend with `Chat` UI
- `pages/api/chat.ts` — server API that handles queries
- `crawler/` — python crawler + embedder
- `infra/` — GitHub Actions workflow for deploy
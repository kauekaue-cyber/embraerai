## Deployment checklist

1. Create a GitHub repo, push this project.
2. Sign up for Vercel and import the GitHub repo.
3. Add environment variables in Vercel (OPENAI_API_KEY, PINECONE_*).
4. Configure DNS for embraer.ai: set the A or CNAME records per Vercel's instructions.
5. Run crawler (locally or in cloud) to populate vector index before broad usage.

## Legal
- Obtain permission from Embraer to index and republish large portions of their site.
- For press releases and public specs, quoting short excerpts and linking back is usually fine.
import OpenAI from "openai";

export async function POST(req) {
  const { message } = await req.json();
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const completion = await client.chat.completions.create({
    model:"gpt-4o-mini",
    messages:[{ role:"user", content: message }]
  });

  return new Response(JSON.stringify({ reply: completion.choices[0].message.content }), {
    headers:{ "Content-Type":"application/json" }
  });
}

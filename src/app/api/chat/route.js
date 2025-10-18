import OpenAI from "openai";

// Next.js App Router API Route (Edge-compatible Node runtime)
export const runtime = "nodejs";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.SITE_URL || "",
    "X-Title": process.env.SITE_NAME || "Arka Labs",
  },
});

const SYSTEM_PROMPT = `You are Arka AI Assistant for Arka Labs. Answer questions about our software development services.

SERVICES:
• MVP Development: $2,600 (21 days) - Complete SaaS with landing page, auth, security, database, SEO, AI integrations, 2-3 features, analytics, deployment
• Monthly Retainer: $1,500/month - Ongoing development, scaling, maintenance, new features

INSTRUCTIONS:
1. Keep answers SHORT (2-3 sentences max)
2. Use bullet points for lists
3. Bold important terms with **text**
4. NEVER repeat words or phrases
5. End with booking CTA if relevant

Example response:
"Our **MVP Development** service delivers a complete SaaS in 21 days for $2,600. This includes landing page, authentication, database, deployment, and 2-3 core features. Ready to start? [Book a call](https://calendly.com/arkalal-chakravarty/30min)"

CRITICAL: Write each word/phrase ONCE. No repetition.`;

export async function POST(req) {
  try {
    const body = await req.json();
    const { messages } = body || {};

    // Ensure messages array
    const chatMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(Array.isArray(messages) ? messages : []),
    ];

    // Create a streaming completion with anti-repetition parameters
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o",
      stream: true,
      messages: chatMessages,
      temperature: 0.5,
      max_tokens: 400,
      top_p: 0.85,
      frequency_penalty: 1.5,
      presence_penalty: 0.6,
    });

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const part of completion) {
            const choice = part?.choices?.[0];
            const delta = choice?.delta?.content ?? "";
            if (delta) {
              controller.enqueue(new TextEncoder().encode(delta));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    const msg = error?.message || "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

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

const SYSTEM_PROMPT = `You are Arka AI Assistant for Arka Labs.
Context about company:
- We build AI-powered SaaS MVPs in ≤ 21 days, fully go-to-market ready.
- Services: 1) MVP Development – $2,600 one-time. Includes landing page, auth, security, DB, SEO, AI integrations, 2–3 features, analytics, deployment on client's domain.
- 2) Monthly Retainer – $1,500/month. Ongoing partnership for scaling MVPs into production SaaS or multiple AI/internal tools, with continuous engineering, maintenance, and new features.
- Goal: convert visitors into clients; CTA: Book a Call.
- Tech: Next.js, MongoDB, OpenAI, modern, secure engineering best practices.
Instructions:
- Answer as a helpful, concise product specialist. Use friendly, confident tone. Offer to book a call when relevant.
- When asked for prices/timelines/process, provide the exact figures above and explain succinctly.
- Do not invent features or pricing.
- If user asks about building specifics, outline a clear next-step plan and propose a quick call.
Formatting:
- ALWAYS respond in clean Markdown with short sections and bullet lists.
- Bold short labels. Use code blocks for snippets. Use links only if asked.
- Keep answers compact and scannable.
`;

export async function POST(req) {
  try {
    const body = await req.json();
    const { messages } = body || {};

    // Ensure messages array
    const chatMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(Array.isArray(messages) ? messages : []),
    ];

    // Create a streaming completion
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      stream: true,
      messages: chatMessages,
      // You can add temperature/top_p if needed; default is usually fine for support
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

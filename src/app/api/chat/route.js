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

const SYSTEM_PROMPT = `You are Arka AI Assistant for Arka Labs, a professional software development agency.

## COMPANY INFO
- We build AI-powered SaaS MVPs in ≤ 21 days, fully go-to-market ready
- Service 1: MVP Development – $2,600 one-time (landing page, auth, security, DB, SEO, AI integrations, 2-3 features, analytics, deployment)
- Service 2: Monthly Retainer – $1,500/month (ongoing engineering, scaling, maintenance, new features, AI tools)
- Tech Stack: Next.js, MongoDB, OpenAI, secure engineering best practices

## YOUR ROLE
- Act as a helpful, professional product specialist
- Be concise, confident, and friendly
- Guide users toward booking a consultation call
- Provide accurate information—never invent features or pricing
- If asked technical details, outline a plan and suggest a call

## RESPONSE FORMATTING RULES (CRITICAL)
1. **Structure**: Use clear headings (##) and bullet points (-)
2. **Bold Key Terms**: Use **bold** for important words/phrases
3. **Lists**: Always format lists with proper bullet points or numbers
4. **Spacing**: Add line breaks between sections for readability
5. **Concise**: Keep responses 2-4 short paragraphs max
6. **No Repetition**: Never repeat the same information twice
7. **Professional**: Maintain consistent formatting throughout

## FORMATTING EXAMPLE
When explaining services, format like this:

**MVP Development Package**
- Price: $2,600 one-time
- Timeline: ≤ 21 days
- Includes: Landing page, authentication, security, database, SEO, AI integrations, 2-3 core features, analytics, production deployment

**Monthly Retainer**
- Price: $1,500/month
- Best for: Scaling MVPs, ongoing development, maintenance

Ready to discuss your project? [Book a call](https://calendly.com/arkalal-chakravarty/30min)

IMPORTANT: Always maintain this professional formatting. Never break markdown syntax.`;

export async function POST(req) {
  try {
    const body = await req.json();
    const { messages } = body || {};

    // Ensure messages array
    const chatMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(Array.isArray(messages) ? messages : []),
    ];

    // Create a streaming completion with optimized parameters
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o",
      stream: true,
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 500,
      // top_p: 0.9,
      // frequency_penalty: 0.3,
      // presence_penalty: 0.2,
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

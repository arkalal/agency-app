import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText, convertToModelMessages } from "ai";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are nixpexel AI Assistant for nixpexel.dev, a professional software development agency.

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
    const { messages } = body;

    // Validate messages array
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Initialize OpenRouter provider
    const openrouter = createOpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY,
      headers: {
        "HTTP-Referer": process.env.SITE_URL || "https://nixpexel.dev",
        "X-Title": "nixpexel.dev",
      },
    });

    // Convert UIMessages from useChat to ModelMessages for streamText
    const modelMessages = convertToModelMessages(messages);

    // Use Vercel AI SDK streamText
    const result = streamText({
      model: openrouter("openai/gpt-4o-mini"),
      system: SYSTEM_PROMPT,
      messages: modelMessages,
      temperature: 0.7,
      maxTokens: 500,
      topP: 0.9,
      frequencyPenalty: 0.3,
      presencePenalty: 0.2,
    });

    // Return the streaming response for useChat hook
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "An error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

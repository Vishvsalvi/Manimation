import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import { ENHANCE_PROMPT } from "@/lib/system/system";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await generateText({
    model: anthropic("claude-3-5-sonnet-20240620"),
    system: ENHANCE_PROMPT,
    prompt: prompt,
  });

  return new Response(result.text);
}

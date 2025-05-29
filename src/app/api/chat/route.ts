import { generateText } from "ai";
import { SYSTEM_PROMPT } from "@/lib/system/system";
import { anthropic } from "@ai-sdk/anthropic";

export async function POST(req: Request) {
  const { message } = await req.json();

  const result = await generateText({
    model: anthropic("claude-3-5-sonnet-20240620"),
    system: SYSTEM_PROMPT,
    prompt: message,
  });

  return new Response(result.text);
}

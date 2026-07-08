import { Hono } from "hono";

type Env = {
  OPENROUTER_API_KEY: string;
};

const app = new Hono<{ Bindings: Env }>();

// CORS settings
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Handle browser preflight request
app.options("*", (c) => {
  return c.body(null, 204, corsHeaders);
});

app.get("/", (c) => {
  return c.text("PollyGlot Worker Running", 200, corsHeaders);
});

app.post("/translate", async (c) => {
  const { text, language } = await c.req.json();

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${c.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: "gpt-oss-20b:free",

        temperature: 0.5,

        max_tokens: 200,

        messages: [
          {
            role: "user",

            content: `Translate this text into ${language}.

IMPORTANT:
- Return ONLY the translation
- Use Latin characters if possible
- Do NOT add explanation

Text: ${text}`,
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    const error = await response.json();

    console.log("OPENROUTER ERROR:", error);

    return c.json(
      {
        error: true,
        message: error,
      },
      500,
      corsHeaders,
    );
  }

  type OpenRouterResponse = {
    choices?: {
      message?: {
        content?: string;
      };
    }[];
  };

  const data = (await response.json()) as OpenRouterResponse;

  const translation =
    data?.choices?.[0]?.message?.content ?? "No translation found";

  return c.json(
    {
      original: text,
      translation,
      language,
    },
    200,
    corsHeaders,
  );
});

export default app;

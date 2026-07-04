import { Hono } from "hono";

type Env = {
  OPENROUTER_API_KEY: string;
};

type OpenRouterResponse = {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
};

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.text("Worker is running!");
});

app.post("/translate", async (c) => {
  const { text, language } = await c.req.json();

  console.log("API key exists:", !!c.env.OPENROUTER_API_KEY);
  console.log(
    "API key starts with:",
    c.env.OPENROUTER_API_KEY?.substring(0, 10),
  );

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${c.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.1-8b-instruct:free",
        messages: [
          {
            role: "user",
            content: `Translate this text to ${language}: ${text}`,
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
    );
  }

  const data = (await response.json()) as OpenRouterResponse;

  console.log("OPENROUTER RAW:", JSON.stringify(data, null, 2));

  return c.json({
    original: text,
    translation: data?.choices?.[0]?.message?.content || "No translation found",
    language,
  });
});

export default app;
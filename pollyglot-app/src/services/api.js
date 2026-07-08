const WORKER_URL = "https://worker-api.asma-samadi.workers.dev/translate";

export async function translateText(text, language) {
  try {
    const response = await fetch(WORKER_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        text: text,

        language: language,
      }),
    });

    const data = await response.json();

    return data.translation;
  } catch (error) {
    console.error("Translation error:", error);

    return "Translation failed";
  }
}

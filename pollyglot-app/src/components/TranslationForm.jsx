import { useState } from "react";

import LanguageSelector from "./LanguageSelector";

import TranslationButton from "./TranslationButton";

import { translateText } from "../services/api";

import "./styles/translationForm.css";

export default function TranslationForm({ setResult }) {
  const [text, setText] = useState("");

  const [language, setLanguage] = useState("French");

  async function handleTranslate() {
    const result = await translateText(
      text,

      language,
    );

    setResult({
      original: text,

      translation: result,

      language: language,
    });
  }

  return (
    <section className="translation-form">
      <label>Text to translate 👇</label>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you?"
      />

      <LanguageSelector language={language} setLanguage={setLanguage} />

      <TranslationButton onClick={handleTranslate} />
    </section>
  );
}

import StartOverButton from "./StartOverButton";
import "./styles/translationResult.css";

export default function TranslationResult({ result, setResult }) {
  return (
    <section className="translation-result">
      <h3>Original 👇</h3>

      <div className="result-box">
        <p>{result.original}</p>
      </div>

      <h3>Translation 👇</h3>

      <div className="result-box">
        <p>{result.translation}</p>
      </div>

      <StartOverButton onClick={() => setResult(null)} />
    </section>
  );
}

import StartOverButton from "./StartOverButton";
import "./styles/translationResult.css";

export default function TranslationResult({ result, setResult }) {
  return (
    <section className="translation-result">
      <h2>Translation Result</h2>

      <div className="result-box">
        <h3>Original:</h3>

        <p>{result.original}</p>

        <h3>Translation:</h3>

        <p>{result.translation}</p>
      </div>

      <StartOverButton onClick={() => setResult(null)} />
    </section>
  );
}

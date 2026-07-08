import "./styles/translationButton.css";

export default function TranslationButton({ onClick }) {
  return (
    <button className="translation-button" onClick={onClick}>
      Translate
    </button>
  );
}

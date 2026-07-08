import "./styles/startOverButton.css";

export default function StartOverButton({ onClick }) {
  return (
    <button className="start-button" onClick={onClick}>
      Start Over
    </button>
  );
}

import "./styles/languageSelector.css";
import frFlag from '../assets/images/fr-flag.png'
import spFlag from '../assets/images/sp-flag.png'
import jpnFlag from "../assets/images/jpn-flag.png";

export default function LanguageSelector({
  language,

  setLanguage,
}) {
  return (
    <div className="language-selector">
      <h3>Choose language:</h3>

      <label>
        <input
          type="radio"
          checked={language === "French"}
          onChange={() => setLanguage("French")}
        />
        French <img src={frFlag} alt="fr-flag" />
      </label>

      <label>
        <input
          type="radio"
          checked={language === "Spanish"}
          onChange={() => setLanguage("Spanish")}
        />
        Spanish <img src={spFlag} alt="sp-flag" />
      </label>

      <label>
        <input
          type="radio"
          checked={language === "Japanese"}
          onChange={() => setLanguage("Japanese")}
        />
        Japanese <img src={jpnFlag} alt="jpn-flag" />
      </label>
    </div>
  );
}

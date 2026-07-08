import pollyGlotLogo from "../assets/images/pollyglotLogo.png";
import './styles/header.css'
import background from "../assets/images/blueBackground.jpg";

export default function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${background})` }}>
      <img
        src={pollyGlotLogo}
        alt="PollyGlot logo"
      />

      <div className="header-text">
        <h1>PollyGlot</h1>

        <p>Perfect Translation Every Time</p>
      </div>
    </header>
  );
}

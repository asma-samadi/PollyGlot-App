import { useState } from "react";

import Header from "./components/Header";
import TranslationForm from "./components/TranslationForm";
import TranslationResult from "./components/TranslationResult";

import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <Header />

      {!result ? (
        <TranslationForm setResult={setResult} />
      ) : (
        <TranslationResult result={result} setResult={setResult} />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";


function Secret() {
  const [phrase, setPhrase] = useState("");

  if (phrase === "prince@111") {
    alert("You may pass!");
  }

  return (
    <div className="Secret">
      <h2>Password?</h2>

      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="write the pass key"
      />

      <p>
        Hint: It's <strong>prince@111</strong>
      </p>
    </div>
  );
}
export default Secret


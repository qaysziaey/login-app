import styles from "./Login.module.css";

export function User({ name, login, language }) {
  const enMsg = "Welcome to the React State website";
  const deMsg = "Willkommen auf deiner profile Seite";

  const message = (language) => {
    if (language === "de") {
      return `${deMsg}${login ? ` ${name}.` : "."}`;
    }
    if (language === "en") {
      return `${enMsg}${login ? ` ${name}.` : "."}`;
    }
  };

  const subMessage = () => {
    if (language === "de") {
      return login
        ? "Viel Spaß auf deiner Webseite!"
        : "Logge dich ein und sehe state in aktion!";
    }
    if (language === "en") {
      return login
        ? "Have fun with your Website!"
        : "Log in to see state in action!";
    }
  };

  return (
    <div>
      <p>{message(language)}</p>
      <h2>useState</h2>
      <p>{subMessage(language)}</p>
    </div>
  );
}

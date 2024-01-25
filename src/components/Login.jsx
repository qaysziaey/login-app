import { useState } from "react";
import styles from "./Login.module.css";
import navStyles from "./Nav.module.css";
import { User } from "./User";

export function Login({ name }) {
  const lang = "en";
  const userName = "Qais";

  const [language, setLanguage] = useState(lang);
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    if (login === true) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  const handleLang = () => {
    if (language === "en") {
      setLanguage("de");
    }
    if (language === "de") {
      setLanguage("en");
    }
  };
  return (
    <div className={styles["login-container"]}>
      <div className={styles.avatar}></div>
      <div className={styles["login-content"]}>
        <h1 className={styles["login-title"]}>React State Exercise</h1>

        <User name={userName} login={login} language={language} />

        <div className={styles["login-btn"]}>
          <button onClick={handleLang}>
            {language === "de" ? "Englisch" : "Deutsch"}
          </button>
          <button
            style={{
              backgroundColor: login ? "#2f3542" : "#5352ed",
              color: "white",
            }}
            onClick={handleLogin}
          >
            {login ? "Log out" : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
}

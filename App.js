import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      if (login === "admin" && password === "123456") {
        setErrorMessage("Login bem-sucedido!");
      } else {
        setErrorMessage("Login ou senha incorretos");
      }
      setIsSubmitted(false); // Resetar após a verificação
    }
  }, [isSubmitted, login, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles["form-container"]}>
          <form onSubmit={handleSubmit}>
            <div className={styles["input-container"]}>
              <label className={styles["input-label"]} htmlFor="login">Login</label>
              <input
                className={styles["input-field"]}
                type="text"
                id="login"
                placeholder="Login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className={styles["input-container"]}>
              <label className={styles["input-label"]} htmlFor="password">Senha</label>
              <input
                className={styles["input-field"]}
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles["button-container"]}>
              <button className={styles.button} type="submit">Entrar</button>
            </div>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

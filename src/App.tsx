import { Footer } from "./components/Footer";

import { Logo } from "./components/Logo";
import styles from "./App.module.css";
import { Main } from "./components/Main";

export function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

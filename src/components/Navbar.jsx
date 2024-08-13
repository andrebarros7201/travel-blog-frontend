import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { NAV_LINKS } from "../utils/contants.jsx";

export default function Navbar() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-logo"]}>
        <h2>My trip!</h2>
      </div>
      <nav className={styles["header-links"]}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link}
            to={`post/?continent=${link}`}
            className={styles["button-link"]}
          >
            {link}
          </Link>
        ))}
      </nav>
      <div className={styles["header-buttons-wrapper"]}>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </header>
  );
}

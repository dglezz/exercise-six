import styles from "../../styles/Header.module.css";
import Link from "next/link";

export default function Header({ isLoggedIn, logoutUserFunction }) {
  return (
    <header className={styles.header}>
      <div>
        <div>
          <h1> User & Auth </h1>
        </div>
        <nav>
          <ul>
            {isLoggedIn && (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <a onClick={logoutUserFunction}> Log Out </a>
                </li>
              </>
            )}

            {!isLoggedIn && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/create">Create User</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

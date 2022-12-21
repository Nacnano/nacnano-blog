import styles from "../components/layout.module.css";
import Link from "next/link";
export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found </h1>
      <div className={styles.backToHome}>
        <Link href="/">Back to home</Link>
      </div>
    </>
  );
}

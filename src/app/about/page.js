import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <p className={styles.aboutText}>
        This is the about page. You can add more information about your
        application here.
      </p>
    </div>
  );
}

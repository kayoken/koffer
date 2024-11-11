import styles from "./styles.module.css";

const LanguageSwitch = () => {
  return (
    <div className={styles.languageSwitch}>
      <span className={styles.active}>DE</span> | <span>EN</span>
    </div>
  );
};

export default LanguageSwitch;

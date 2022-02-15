import styles from "../styles/Head.module.css";

const Head = () => {
  return (
    <div>
      <header>
        <nav className={styles.nav}>
          <a
          // href="#home"
          >
            {/* 임시 */}{" "}
            <img
              className={styles.logo}
              // src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              src="/bucket.png"
              alt="logo"
            />
          </a>
          <button type="button" className={styles.btn}>
            로그아웃
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Head;

import styles from "../styles/Layout.module.css";
import { Heading } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.title}>
        <h1 className={styles.description}>Random Blog</h1>
      </header>
      <Heading className={styles.header} as="h1" size="lg" isTruncated>
        Random Blog for all the random posts you can think off!
      </Heading>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <a>
          <h2>Hello</h2>
        </a>
      </footer>
    </>
  );
};
export default Layout;

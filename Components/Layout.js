import styles from "../styles/Layout.module.css";
import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Github } from "react-bootstrap-icons";
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.title}>
        <Link href="/">
          <a>
            <h1 className={styles.description}>Random Blog</h1>
          </a>
        </Link>
      </header>
      <Box>
        <Image
          className={styles.header}
          alt="header-pic"
          src="https://images.unsplash.com/photo-1560415755-bd80d06eda60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80"
        />
      </Box>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <Text fontSize="lg"> &copy;Random Blog</Text>
        <a href="https://github.com/NadimRadjab">
          <Github />
        </a>
      </footer>
    </>
  );
};
export default Layout;

import styles from "../styles/Layout.module.css";
import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

import { Github } from "react-bootstrap-icons";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
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
          src={prefix + "/photo.jpeg"}
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

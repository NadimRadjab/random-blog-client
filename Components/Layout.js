import styles from "../styles/Layout.module.css";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import pic from "../public/photo.jpeg";
import { Github } from "react-bootstrap-icons";
const prefix = "/random-blog-client";
const Layout = ({ children }) => {
  console.log(pic);
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
        <img height="250px" width="100%" alt="header-pic" src={prefix + pic} />
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

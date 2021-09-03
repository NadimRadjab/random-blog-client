import { useState, useEffect } from "react";
import Head from "next/head";
import Card from "../Components/Card";
import axios from "axios";
import cardStyles from "../styles/Card.module.css";

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog Api</title>
        <meta name="description" content="Blog for reating andom posts." />
      </Head>
      <div className={cardStyles.grid}>
        {posts.map((post) => (
          <Card
            key={post._id}
            id={post._id}
            title={post.name}
            text={post.text}
            date={post.creationDate}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:5000/api/posts");
  const posts = res.data;
  return {
    props: {
      posts,
    },
  };
};
export default Home;

import Head from "next/head";
import Card from "../Components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog Api</title>
        <meta name="description" content="Blog for reating andom posts." />
      </Head>
      <Card />
    </div>
  );
}

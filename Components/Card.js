import cardStyles from "../styles/Card.module.css";
import Link from "next/link";

const Card = ({ title, text, id }) => {
  return (
    <Link href={`/posts/${id}`}>
      <a className={cardStyles.card}>
        <h2>{title}</h2>
        <h3>{}</h3>
        <p>{text}</p>
      </a>
    </Link>
  );
};

export default Card;

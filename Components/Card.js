import cardStyles from "../styles/Card.module.css";
import Link from "next/link";

const Card = ({ title, text, id, date }) => {
  return (
    <div>
      <Link href={`/posts/${id}`}>
        <a className={cardStyles.card}>
          <h2>{title}</h2>
          <h3>{text.substr(0, 20)}.....</h3>
          <p>{new Date(date).toUTCString().substr(0, 17)}</p>
        </a>
      </Link>
    </div>
  );
};

export default Card;

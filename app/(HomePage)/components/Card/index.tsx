import Link from "next/link";
import Image from "next/image";

import s from "./Card.module.scss";

type CardProps = {
  types: string;
  img: string;
  title: string;
  date: string;
};

const Card: React.FC<CardProps> = ({ types, img, title, date }) => {
  return (
    <article className={s.card} id={s[types]}>
      <Link href="#">
        <div className={s.card__imgWrapper} id={s[types]}>
          <Image
            src={img}
            alt="Полезные материалы"
            className={s.card__img}
            fill
          />
        </div>
        <div className={s.card__textBlock}>
          <h4 className={s.card__title}>{title}</h4>
          <time dateTime="2024-02-12" className="label">
            {date}
          </time>
        </div>
      </Link>
    </article>
  );
};

export default Card;

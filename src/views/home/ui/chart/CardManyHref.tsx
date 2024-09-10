import React from "react";
import styles from "../../css/homeView.module.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

export type TCards = {
  title: string;
  data: { title: string; icon: React.ReactNode; href: string }[];
};

type TProps = TCards;

const CardManyHref = (props: TProps) => {
  const { title, data } = props;

  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>
      <div className={styles.card__link}>
        {data.map((item, index) => (
          <Link
            to={item.href}
            className={styles.card__href}
            key={item.href + index}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
      <div className={`${styles.card__connect} ${styles['card__connect--right']}`}>
        <div className={styles.card__line}>
          <div className={`${styles.card__arrow} ${styles['card__arrow--right']}`}>
            <IoMdArrowDropright size={30} />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default CardManyHref;

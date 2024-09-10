import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "../../css/homeView.module.css";

export type TCards = {
  title: string;
  data: { title: string; icon: React.ReactNode; href: string }[];
};

type TProps = TCards;

const CardManyHrefArrowLeft = (props: TProps) => {
  const { title, data } = props;

  return (
    <div className={`${styles.card} ${styles['card--left']}`} >
      <h3 className={styles.card__title}>{title}</h3>
      <div className={styles.card__link} style={{gap: '.5rem'}}>
        {data.map((item, index) => (
          <Link
            to={item.href}
            className={styles.card__href}
            style={{gap: '1rem'}}
            key={item.href + index}
          >
            {item.icon}
            <span style={{width: '100%'}}>{item.title}</span>
          </Link>
        ))}
      </div>
      <div className={`${styles.card__connect} ${styles['card__connect--left']}`}>
        <div className={styles.card__line}>
          <div className={`${styles.card__arrow} ${styles['card__arrow--right']}`} >
            <IoMdArrowDropright size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardManyHrefArrowLeft;

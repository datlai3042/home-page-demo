import React from "react";
import styles from "../../css/homeView.module.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

export type TCard = {
  title: string; icon: React.ReactNode; href: string 
};

type TProps = TCard;

const CardOneHref = (props: TProps) => {
  const {  title,href,icon } = props;

  return (
    <div className={styles.card}>
      <div className={styles.card__link}>
          <Link to={href} className={styles.card__href}>
            {icon}
            <span className={styles.card__text}>{title}</span>
          </Link>
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

export default CardOneHref;

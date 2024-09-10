import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/homeView.module.css";


export type TCard = {
  title: string; icon: React.ReactNode; href: string 
};

type TProps = TCard;

const CardOneHrefColumn = (props: TProps) => {
  const {  title,href,icon } = props;

  return (
    <div className={styles.card} style={{width: '12rem'}}>
      <div className={styles.card__link}>
          <Link to={href} className={styles.card__href} style={{flexDirection: 'column'}}>
            {icon}
            <span className={styles.card__text}>{title}</span>
          </Link>
      </div>
    
    </div>
  );
};

export default CardOneHrefColumn;

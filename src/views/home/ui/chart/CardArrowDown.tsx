import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/homeView.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

export type TCard = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type TProps = TCard;

const CardArrowDown = (props: TProps) => {
  const { title, href, icon } = props;

  return (
    <div className={styles.center}>
      <div className="" style={{ position: "relative" }}>
        <div className={`${styles.card} `} style={{ width: "16rem" }}>
          <div className={styles.card__link}>
            <Link
              to={href}
              className={styles.card__href}
              style={{ flexDirection: "column" }}
            >
              {icon}
              <span className={styles.card__text}>{title}</span>
            </Link>
          </div>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate3d(-50%,100%,0)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--colorConnect)",
            
        }}
        >
          <div
            className=""
            style={{
                height: "4rem",
                width: ".3rem",
                backgroundColor: "var(--colorConnect)",
            }}
          ></div>
        <div style={{marginTop: '-.7rem'}}>
            <IoMdArrowDropdown size={24} color=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArrowDown;

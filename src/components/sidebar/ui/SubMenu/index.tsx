import { SetStateAction, useEffect, useState } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { SubMenuItemAnchor } from "../../../navigation/components/NavigationItem";
import styles from "../../css/sidebar.module.css";

type TProps = {
  content: string;
  subMenu: SubMenuItemAnchor[];
  menuActive: string;
  setMenuActive: React.Dispatch<SetStateAction<string>>;
};

const SIZE_ICON = 20

const ItemHasSubMenu = (props: TProps) => {
  const { content, subMenu, menuActive, setMenuActive } = props;

  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (content !== menuActive && showMenu) {
      setShowMenu(false);
    }
  }, [menuActive, setShowMenu, content, showMenu]);

  return (
    <div
      className={`${styles.sidebar__item} ${styles["sidebar__item--hasSubMenu"]}`}
    >
      <div
        className={`${styles["primary-menu"]} ${showMenu ? `${styles.isActive}` : ''}`}
        onClick={() => {
          setMenuActive(content);
          setShowMenu((prev) => !prev);
        }}
      >
        <p className={styles.child}>{content}</p>
        {showMenu ? <TiArrowSortedDown className={styles.icon} size={SIZE_ICON}/> : <RiArrowRightSFill className={styles.icon} size={SIZE_ICON}  />}
      </div>
      {showMenu && (
        <div
          className={`${styles.subMenu} ${
            showMenu ? styles["subMenu--show"] : ""
          }`}
        >
          {subMenu.map((item, index) => (
            <Link
              to={item.href}
              key={item.content + index}
              className={styles.subMenu__item}
            >
              <p>{item.content}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemHasSubMenu;

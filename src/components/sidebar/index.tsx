import { useContext, useEffect, useRef, useState } from "react";
import { FaKey, FaServer } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";
import {
  subMenuCategory,
  subMenuNghiepVu,
  subMenuSoDu,
  subMenuSystem,
} from "../../mock/navigation";
import styles from "./css/sidebar.module.css";
import ItemHasSubMenu from "./ui/SubMenu";

const timeUnmount = 0.5;
const SIZE_ICON = 14

const SidebarLayout = () => {

  //sidebar 
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const [animateHidden, setAnimateHidden] = useState<boolean>(false);
  const clearTime = useRef<NodeJS.Timeout | null>(null);

  //only open category
  const [singleTonActive, setSingleTonActive] = useState<string>("");


  

  //delay unmount 
  useEffect(() => {
    if (animateHidden) {
      clearTime.current = setTimeout(() => {
        setShowSidebar(false);
      }, timeUnmount * 1000);
    }

    return () => {
      clearTimeout(clearTime.current as NodeJS.Timeout);
    };
  }, [animateHidden, setShowSidebar]);

  return (
    <div className={styles.sidebar__container}>
      <div
        className="model"
        style={{ display: "block", backgroundColor: "rgba(0,0,0,.5)" }}
      >
        <div
          className="model__overlay"
          onClick={() => setAnimateHidden(true)}
        ></div>
        <div
          className={`${styles.sidebar__wrapper} ${
            !animateHidden && showSidebar
              ? styles["sidebar__wrapper--show"]
              : styles["sidebar__wrapper--hidden"]
          }`}
        >
          <Link to={"/"} className={styles.sidebar__home}>
            <IoHome
            size={24} />
            <span>Home</span>
          </Link>
          <div className={styles.sidebar__list}>
            <div className={styles.sidebar__item}>
              <p className={styles.child}>Trang chủ</p>
            </div>
            <ItemHasSubMenu
              content="Hệ thống"
              subMenu={subMenuSystem}
              menuActive={singleTonActive}
              setMenuActive={setSingleTonActive}
            />
            <ItemHasSubMenu
              content="Danh mục"
              subMenu={subMenuCategory}
              menuActive={singleTonActive}
              setMenuActive={setSingleTonActive}
            />
            <ItemHasSubMenu
              content="Số dư"
              subMenu={subMenuSoDu}
              menuActive={singleTonActive}
              setMenuActive={setSingleTonActive}
            />
            <ItemHasSubMenu
              content="Nghiệp vụ"
              subMenu={subMenuNghiepVu}
              menuActive={singleTonActive}
              setMenuActive={setSingleTonActive}
            />

            <div className={styles.sidebar__item}>
              <p className={styles.child}>Báo cáo</p>
            </div>
          </div>

          <div className={styles.sidebar__action}>
            <div className={styles.item}>
              <FaServer size={SIZE_ICON} />
              <span>Bảo trì dữ liệu</span>
            </div>

            <div className={styles.item}>
              <FaKey size={SIZE_ICON} />
              <span>Đổi mật khẩu</span>
            </div>

            <div className={styles.item}>
              <LuLogOut size={SIZE_ICON} />
              <span>Đăng xuất</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;

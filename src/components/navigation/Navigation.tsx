import { Link } from "react-router-dom";
import { subMenuCategory, subMenuNghiepVu, subMenuSoDu, subMenuSystem } from "../../mock/navigation";
import NavigationItem from "./components/NavigationItem";
import styles from "./css/navigation.module.css";




const Navigation = () => {
  return (
    <nav className={styles.nav__container} >
      <ul className={styles.nav__wrapper} >
        <li >
          <Link className="navItem" to={"/"} tabIndex={0}>Trang chủ</Link>
        </li>
        <li>
          <NavigationItem labelText="Hệ thống" subMenu={subMenuSystem} />
        </li>
        <li>
          <NavigationItem labelText="Danh mục" subMenu={subMenuCategory} />
        </li>
        <li>
        <NavigationItem labelText="Số dư" subMenu={subMenuSoDu} />
         
        </li>

        <li>
        <NavigationItem labelText="Nghiệp vụ" subMenu={subMenuNghiepVu} />
         
        </li>
        <li >
          <Link className="navItem" to={"/reports"}>Báo cáo</Link>
        </li>


      </ul>
    </nav>
  );
};

export default Navigation;

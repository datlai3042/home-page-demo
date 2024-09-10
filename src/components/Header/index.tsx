import { AlignJustify } from "lucide-react";
import { useContext } from "react";
import { IoMdHelpCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { SidebarContext } from "../../context/SidebarContext";
import { ModelTest } from "../model";
import NavigationItem, {
  SubMenu,
} from "../navigation/components/NavigationItem";
import styles from "./css/header.module.css";
import HeaderAction from "./ui/HeaderAction";
import HeaderUpdateYear from "./ui/HeaderUpdateYear";

const subMenu1: SubMenu[] = [
  {
    content: "Thông tin",
    href: "/company",
    type: "Anchor",
  },
  {
    content: "Chuyển đơn vị",
    type: "Model",
    model: <ModelTest />,
  },
];

const SIZE_ICON = 16;

const Header = () => {
  const navigate = useNavigate();

  const { setShowSidebar } = useContext(SidebarContext);

  return (
    <header className={styles.header__container}>
      <div className={styles.header__wrapper}>
        <div
          className={styles.header__logo}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} />
        </div>

        <div className={styles.header__navigation}>
          <NavigationItem
            labelText="Đạt lại"
            labelSubMenu="Công ty"
            subMenu={subMenu1}
          />
          <HeaderUpdateYear />
          <HeaderAction user={{ fullName: "Lại Huỳnh Phát Đạt" }} />

          <div
            className={"navItem__icon"}
           
          >
            <div className="" style={{ padding: "0rem calc(var(--paddingXHeader))" }}>
              <IoMdHelpCircle size={SIZE_ICON} />
            </div>
          </div>
        </div>

        <div className={styles.header__sidebar}>
          <span>Zen HKD - Phần mềm kế toán Hộ kinh doanh</span>
          <AlignJustify onClick={() => setShowSidebar((prev) => !prev)} />
        </div>
      </div>
    </header>
  );
};

export default Header;

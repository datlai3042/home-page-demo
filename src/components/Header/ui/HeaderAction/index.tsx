import { useEffect, useRef, useState } from "react";
import { FaKey, FaServer } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

type TProps = {
  user: {
    fullName: string;
  };
};

export const SIZE_ICON = 18;

const HeaderAction = (props: TProps) => {
  const {
    user: { fullName },
  } = props;

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listenOnClickGlobal = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", listenOnClickGlobal);

    return () => {
      window.removeEventListener("click", listenOnClickGlobal);
    };
  }, []);

  return (
    <div
      className={`navItem ${showMenu ? "navItem--isActive" : ""}`}
      onClick={() => setShowMenu((prev) => !prev)}
      ref={containerRef}
    >
      <p>{fullName}</p>
      <IoMdArrowDropdown size={SIZE_ICON}/>


      {showMenu && (
        <div className="subMenu">
          <div className="subMenu__content" style={{ gap: "1rem" }}>
            <FaServer size={SIZE_ICON} />

            <span>Bảo trì dữ liệu</span>
          </div>
          <div className="subMenu__content" style={{ gap: "1rem" }}>
            <FaKey size={SIZE_ICON}/>
            <span>Đổi mật khẩu</span>
          </div>
          <div className="subMenu__content" style={{ gap: "1rem" }}>
            <IoLogOut size={SIZE_ICON}/>

            <span>Đăng xuât</span>
          </div>

          
        </div>
      )}
    </div>
  );
};

export default HeaderAction;

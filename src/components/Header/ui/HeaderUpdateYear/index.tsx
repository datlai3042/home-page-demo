import { useEffect, useRef, useState } from "react";
import { FaCheck, FaTags } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const SIZE_ICON = 16;


const HeaderUpdateYear = () => {
  const [yearCurrent] = useState<number>(() => {
    const year = new Date().getFullYear();
    return year;
  });

  const listYear = [
    yearCurrent - 2,
    yearCurrent - 1,
    yearCurrent,
    yearCurrent + 1,
    yearCurrent + 2,
  ];

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
      <p>Năm {yearCurrent}</p>
      <IoMdArrowDropdown size={SIZE_ICON} />

      {showMenu && (
        <div className="subMenu">
          <>
            <div className="subMenu__header">
              <FaTags size={SIZE_ICON} />

              <span
                style={{
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  fontWeight: "800",
                }}
              >
                NĂM TÀI CHÍNH
              </span>
            </div>
            {listYear?.map((year, i) => (
              <div
                key={i}
                className="subMenu__content"
                onClick={(e) => {
                  setShowMenu(false)
                  e.stopPropagation();
                }}
              >
                {year === yearCurrent ? (
                  <FaCheck
                    color="green"
                    size={14}
                    style={{
                      marginRight: "1rem",
                      fontWeight: 800,
                      color: "green",
                    }}
                  />
                ) : (
                  ""
                )}
                {year}
              </div>
            ))}
          </>

          {}
        </div>
      )}
    </div>
  );
};

export default HeaderUpdateYear;

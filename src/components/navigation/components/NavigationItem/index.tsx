import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import NavigationAnchor from "../NavigationAnchor";
import NavigationModel from "../NavigationModel";
import { FaTags } from "react-icons/fa";


export type SubMenuItemAnchor = {
  type: "Anchor";
  content: string;
  href: string;
};

export type SubMenuItemModel = {
  type: "Model";
  content: string;
  model: React.ReactNode;
};

export type SubMenu = SubMenuItemAnchor | SubMenuItemModel;

type TProps = {
  labelText: string;
  labelSubMenu?: string;
  subMenu?: SubMenu[];
};

const SIZE_ICON = 16;

const NavigationItem = (props: TProps) => {
  const { labelText, subMenu, labelSubMenu } = props;

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
      <p>{labelText}</p>
      <IoMdArrowDropdown size={SIZE_ICON}/>


      {showMenu && (
        <div className="subMenu" onClick={(e) => e.stopPropagation()}>
          <>
            {labelSubMenu && (
              <div className="subMenu__header">
                <FaTags size={SIZE_ICON} />
                <span>{labelSubMenu}</span>
              </div>
            )}
            {subMenu?.map((subMenuItem, i) => (
              <div key={i} className="subMenu__href">
                {subMenuItem.type === "Anchor" && (
                  <NavigationAnchor
                    content={subMenuItem.content}
                    href={subMenuItem.href}
                  />
                )}

                {subMenuItem.type === "Model" && (
                  <NavigationModel
                    content={subMenuItem.content}
                    model={subMenuItem.model}
                  />
                )}
              </div>
            ))}
          </>

          {}
        </div>
      )}
    </div>
  );
};

export default NavigationItem;

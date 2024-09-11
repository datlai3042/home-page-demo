import { Link } from "react-router-dom";
import { SubMenuItemAnchor } from "../NavigationItem";
import { SetStateAction } from "react";

type TProps = {
  setShowMenu: React.Dispatch<SetStateAction<boolean>>
} & Omit<SubMenuItemAnchor, "type">

const NavigationAnchor = (props: TProps ) => {
  const { content, href, setShowMenu } = props;

  return (
    <Link to={href} onClick={() => setShowMenu(false)} className="" style={{ padding: ".8rem 2rem" }}>
      {content}
    </Link>
  );
};

export default NavigationAnchor;

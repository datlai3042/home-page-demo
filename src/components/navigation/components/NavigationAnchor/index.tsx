import { Link } from "react-router-dom";
import { SubMenuItemAnchor } from "../NavigationItem";

const NavigationAnchor = (props: Omit<SubMenuItemAnchor, "type">) => {
  const { content, href } = props;

  return (
    <Link to={href} className="" style={{ padding: ".8rem 2rem" }}>
      {content}
    </Link>
  );
};

export default NavigationAnchor;

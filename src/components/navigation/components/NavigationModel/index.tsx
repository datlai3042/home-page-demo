import { SetStateAction, useState } from "react";
import Model from "../../../model";
import { SubMenuItemModel } from "../NavigationItem";

type NavigationModelProps = Omit<SubMenuItemModel, "type"> & {
  setShowMenu: React.Dispatch<SetStateAction<boolean>>;
};

const NavigationModel = (props: NavigationModelProps) => {
  const { content, model, setShowMenu } = props;

  const [showModel, setShowModel] = useState<boolean>(false);

  return (
    <>
      <p
        style={{ padding: ".8rem 2rem" }}
        onClick={(e) => {
          e.stopPropagation();
          setShowModel(true);
        }}
      >
        {content}
      </p>
      {showModel && <Model setShowModel={setShowModel} setShowMenu={setShowMenu}>{model}</Model>}
    </>
  );
};

export default NavigationModel;

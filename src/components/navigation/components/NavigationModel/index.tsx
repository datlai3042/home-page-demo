import { useState } from "react";
import Model from "../../../model";
import { SubMenuItemModel } from "../NavigationItem";

type NavigationModelProps = Omit<SubMenuItemModel, "type">;

const NavigationModel = (props: NavigationModelProps) => {
  const { content, model } = props;

  const [showModel, setShowModel] = useState<boolean>(false);

  return (
    <>
      <p
      style={{padding: '.8rem 2rem'}}
        onClick={(e) => {
          e.stopPropagation();
          setShowModel(true);
        }}
      >
        {content}
      </p>
      {showModel && <Model setShowModel={setShowModel}>{model}</Model>}
    </>
  );
};

export default NavigationModel;

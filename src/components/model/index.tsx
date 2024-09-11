import { X } from "lucide-react";
import React, { SetStateAction } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: React.ReactNode }) => {
  return createPortal(children, document.body);
};

export const ModelTest = () => {
  return (
    <div
      style={{
        width: "30rem",
        height: "20rem",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        borderRadius: ".8rem",
      }}
    >
      Test Model
    </div>
  );
};

type ModelProps = {
  setShowModel: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  setShowMenu?: React.Dispatch<SetStateAction<boolean>>;
};

const Model = (props: ModelProps) => {
  const { children, setShowMenu, setShowModel } = props;

  return (
    <Portal>
      <div className={"model"}>
        <div className={"model__overlay"}></div>
        <div className={"model__close "}>
          <X
            onClick={() => {
              if (setShowMenu) {
                setShowMenu(false);
              }
              setShowModel(false);
            }}
          />
        </div>
        <div className={"model__wrapper"} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Model;

import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

type TSidebarContext = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<TSidebarContext>({
  setShowSidebar: () => {},
  showSidebar: false,
});

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const { pathname } = useLocation();


  useEffect(() => {
    setShowSidebar(false);
    window.scrollTo(0,0)
  }, [pathname]);

  useEffect(() => {
    if(showSidebar) {
      document.body.style.overflow = 'hidden'
    } else  {
      document.body.style.overflow = 'auto'

    }
  },[showSidebar])

  return (
    <SidebarContext.Provider value={{ setShowSidebar, showSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Header from "./components/Header";
import Navigation from "./components/navigation/Navigation";
import { useContext } from "react";
import { SidebarContext } from "./context/SidebarContext";
import SidebarLayout from "./components/sidebar";
// import HeaderMobile from "./components/Header/HeaderMobile";

const RouterWrapper = () => {

const {showSidebar} = useContext(SidebarContext)

  return (
    <div className="">
        <Header />
        <Navigation />
      {showSidebar && <SidebarLayout  />}


      {/* <div className={"header--mobile"}><HeaderMobile /></div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<p>test</p>} />
        <Route path="*" element ={<div style={{maxWidth: '100vw', height: 'calc(100vh - var(--heightHeader) * 2)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', backgroundColor: '#fff'}}>
          <p>Chức năng chưa được xây dựng</p>
        </div>
        }/>
      </Routes>
    </div>
  );
};

export default RouterWrapper;

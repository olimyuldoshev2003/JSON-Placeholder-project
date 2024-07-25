import {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getOnly5Albums, getOnly5Comments, getOnly5Photos, getOnly5Posts, getOnly5Todos, getOnly5Users } from "../api/homeApi";

import {useAppDispatch} from "../hooks/hooks.ts" 


const Layout = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getOnly5Posts());    
    dispatch(getOnly5Comments());    
    dispatch(getOnly5Albums());    
    dispatch(getOnly5Photos());    
    dispatch(getOnly5Todos());    
    dispatch(getOnly5Users());    
  }, [])

  return (
    <div className="dark:bg-[#000000] dark:text-[#fff]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

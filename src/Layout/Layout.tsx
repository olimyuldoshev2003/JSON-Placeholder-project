import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getOnly5Posts } from "../api/homeApi";

import {useAppDispatch} from "../hooks/hooks.ts" 


const Layout = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getOnly5Posts());    
  }, [])

  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;

import React, { ReactNode } from "react";
import Navbar from "./navbar";
import { LayoutWrapper } from "./index.style";
// import FirstHome from "@/features/first-home";
interface props {
  children: ReactNode;
}
const Layout = ({ children }: props) => {
  return (
    <LayoutWrapper>
      <Navbar />
    

      {children}
    </LayoutWrapper>
  );
};

export default Layout;

import React from "react";
import Header from "@/components/Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

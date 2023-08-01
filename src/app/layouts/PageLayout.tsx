import { FC, memo } from "react";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageLayout: FC = memo(() => {
  return (
/*
    <div className={"flex flex-col min-h-screen w-full overflow-hidden"}>
*/
    <div className={"flex flex-col min-h-screen w-full overflow-hidden"}>
      <Header />
      <div className="grow max-w-[1400px] ml-auto mr-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
});

import { FC, memo } from 'react'
import { Outlet } from 'react-router'
import {Footer} from "./Footer";
import {Header} from "./Header";

export const PageLayout: FC = memo(() => {
  return (
    <div className={'flex flex-col min-h-screen w-full children:grow'}>
        <Header/>
        <Outlet />
        <Footer/>
    </div>
  )
})

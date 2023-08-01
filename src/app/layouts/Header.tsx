import cls from "classnames";
import React, {useCallback, useState} from "react";
import { useLocation, useNavigate } from "react-router";


 export const Header=()=>{
     const [toggleBurger, setToggleBurger]=useState(false)

     const navigate = useNavigate();
     const location = useLocation();

     const toHome = useCallback(() => {
         navigate("/home");
     }, []);

     const toAbout = useCallback(() => {
         navigate("/about");
     }, []);

     const toTeam = useCallback(() => {
         navigate("/our-team");
     }, []);

     const toContact = useCallback(() => {
         navigate("/contact");
     }, []);

    return <>
        <div className={'z-10 mt-20 mx-100 flex items-center justify-between mobile:mt-20 mobile:mx-16 mobile:items-start'}>
            <div onClick={toHome} className={'flex items-center cursor-pointer z-10'}>
                <div className={'-rotate-90 text-20 font-bold tracking-widest -ml-15'}>PSC</div>
                <div className={'text-12'}>
                    <p>PSYCHOLOGICAL</p>
                    <p>SERVICES</p>
                    <p>CENTER</p>
                </div>
            </div>
            <div className={'mobile:hidden'}>
                <div className={'flex gap-x-30 text-16'}>

                    <div onClick={toAbout} className={cls("cursor-pointer", {" ": location.pathname.includes("about"),
                    })}>ABOUT</div>

                    <div onClick={toTeam} className={cls("cursor-pointer", {" ": location.pathname.includes("team"),
                    })}>OUR TEAM</div>

                    <div onClick={toContact} className={cls("cursor-pointer", {" ": location.pathname.includes("contact"),
                    })}>CONTACT</div>

                </div>
            </div>
            <div className={'desktop:hidden mobile:block'}>
                <img onClick={()=>setToggleBurger(!toggleBurger)} className={'absolute right-16'} src="./images/burger.svg" alt=""/>
                <div className={cls('bg-white text-12 absolute right-16 top-60 border-2 border-white p-20 rounded-8 shadow', toggleBurger && 'block' || 'hidden' )}>
                    <div onClick={()=>{toAbout(); setToggleBurger(false)}} className={cls("cursor-pointer", {" ": location.pathname.includes("about"),
                    })}>ABOUT</div>
                    <div onClick={()=>{toTeam(); setToggleBurger(false)}} className={cls("cursor-pointer my-8", {" ": location.pathname.includes("team"),
                    })}>OUR TEAM</div>
                    <div onClick={()=>{toContact(); setToggleBurger(false)}} className={cls("cursor-pointer", {" ": location.pathname.includes("contact"),
                    })}>CONTACT</div>
                </div>
            </div>
        </div>
    </>



}



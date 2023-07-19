import cls from "classnames";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";


 export const Header=()=>{

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



    return <div className={'mt-20 mx-100 flex items-center justify-between mobile:hidden'}>
                <div onClick={toHome} className={'flex items-center cursor-pointer'}>
                    <div className={'-rotate-90 text-20 font-bold tracking-widest -ml-15'}>PSC</div>
                    <div className={'text-12'}>
                          <p>PSYCHOLOGICAL</p>
                          <p>SERVICES</p>
                          <p>CENTER</p>
                    </div>
                </div>
                <div>
                    <div className={'flex gap-x-30 text-16'}>

                        <div onClick={toAbout} className={cls("cursor-pointer", {" ": location.pathname.includes("about"),
                          })}>ABOUT</div>

                        <div onClick={toTeam} className={cls("cursor-pointer", {" ": location.pathname.includes("team"),
                        })}>OUR TEAM</div>

                        <div onClick={toContact} className={cls("cursor-pointer", {" ": location.pathname.includes("contact"),
                        })}>CONTACT</div>

                    </div>
                </div>
             </div>
}



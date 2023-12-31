import cls from "classnames";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import {Icons} from "#static/svg/EXPORT";


 export const Footer=()=>{

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

    return (
        <>
            <div className={'mobile:hidden'}>
                <div className={'mt-20 mx-100'}>
                    <div className={'flex items-center justify-between'}>
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

                                <div onClick={()=>{toAbout(); window.scroll(0,0)}} className={cls("cursor-pointer", {" ": location.pathname.includes("about"),
                                })}>ABOUT</div>

                                <div onClick={()=>{toTeam(); window.scroll(0,0)}} className={cls("cursor-pointer", {" ": location.pathname.includes("team"),
                                })}>OUR TEAM</div>

                                <div onClick={()=>{toContact(); window.scroll(0,0)}} className={cls("cursor-pointer", {" ": location.pathname.includes("contact"),
                                })}>CONTACT</div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={'flex justify-between items-center mt-64 '}>
                            <div className={'flex gap-x-20 text-16'}>
                                <a className={'cursor-pointer'} href={'mailto:pschello@gmail.com'}>pschello@gmail.com</a>
                                <a className={'cursor-pointer'} href={'tel:+1 987 000-56-43'}>+1 987 000-56-43</a>
                            </div>

                            <div className={'flex gap-x-30'}>
                                <div className={'flex cursor-pointer'}>
                                    <Icons.Facebook/>
                                    <div>Facebook</div>
                                </div>
                                <div className={'flex cursor-pointer'}>
                                    <Icons.Instagram/>
                                    <div className={'ml-10'}>Instagram</div>
                                </div>
                                <div className={'flex cursor-pointer'}>
                                    <Icons.YouTube/>
                                    <div className={'ml-10'}>YouTube</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'flex gap-x-20 justify-between relative pointer-events-none mt-300'}>
                    <img className={'max-w-437 absolute bottom-0'} src={'./images/bushesFooterOne.png'} alt=""/>
                    <img className={'max-h-67 max-w-195 m-auto absolute bottom-0 left-0 right-0'} src={'./images/bushesFooterTwo.png'} alt=""/>
                    <img className={'max-w-437 absolute bottom-0 left-auto right-0'} src={'./images/bushesFooterTree.png'} alt=""/>
                </div>

            </div>

            <div className={'desktop:hidden tablet:hidden mobile:block mx-16'}>
                <div className={'flex justify-between'}>
                    <div onClick={toHome} className={'flex items-center cursor-pointer'}>
                        <div className={'-rotate-90 text-20 font-bold tracking-widest -ml-15'}>PSC</div>
                        <div className={'text-12'}>
                            <p>PSYCHOLOGICAL</p>
                            <p>SERVICES</p>
                            <p>CENTER</p>
                        </div>
                    </div>
                    <div className={'text-16 text-end'}>

                        <div onClick={()=>{toAbout(); window.scroll(0,0)}} className={cls("cursor-pointer", {" ": location.pathname.includes("about"),
                        })}>ABOUT</div>

                        <div onClick={()=>{toTeam(); window.scroll(0,0)}} className={cls("cursor-pointer my-8", {" ": location.pathname.includes("team"),
                        })}>OUR TEAM</div>

                        <div onClick={()=>{toContact(); window.scroll(0,0)}} className={cls("cursor-pointer", {" ": location.pathname.includes("contact"),
                        })}>CONTACT</div>
                    </div>
                </div>
                <div className={'flex justify-between text-16 mt-32'}>
                    <a className={'cursor-pointer'} href={'mailto:pschello@gmail.com'}>pschello@gmail.com</a>
                    <a className={'cursor-pointer'} href={'tel:+1 987 000-56-43'}>+1 987 000-56-43</a>
                </div>
                <div className={'flex justify-between mt-40'}>
                    <div className={'flex cursor-pointer'}>
                        <Icons.Facebook/>
                        <div>Facebook</div>
                    </div>
                    <div className={'flex cursor-pointer'}>
                        <Icons.Instagram/>
                        <div className={'ml-10'}>Instagram</div>
                    </div>
                    <div className={'flex cursor-pointer'}>
                        <Icons.YouTube/>
                        <div className={'ml-10'}>YouTube</div>
                    </div>
                </div>
                    <img className={'mt-32'} src={'./images/bushesFooterTree.png'} alt=""/>
            </div>
        </>




    )

}



import cls from "classnames";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";


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
            <div className={'mt-20 mx-100 '}>
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

                            <div onClick={toAbout} className={cls("cursor-pointer", {" ": location.pathname.includes("about"),
                            })}>ABOUT</div>

                            <div onClick={toTeam} className={cls("cursor-pointer", {" ": location.pathname.includes("team"),
                            })}>OUR TEAM</div>

                            <div onClick={toContact} className={cls("cursor-pointer", {" ": location.pathname.includes("contact"),
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2C16 1.44771 15.5523 1 15 1H13C11.6739 1 10.4021 1.50044 9.46447 2.39124C8.52678 3.28204 8 4.49022 8 5.75V7.6C8 8.15228 7.55228 8.6 7 8.6H6C5.44772 8.6 5 9.04772 5 9.6V11.4C5 11.9523 5.44772 12.4 6 12.4H7C7.55228 12.4 8 12.8477 8 13.4V19C8 19.5523 8.44772 20 9 20H11C11.5523 20 12 19.5523 12 19V13.4C12 12.8477 12.4477 12.4 13 12.4H14.2291C14.6834 12.4 15.0806 12.0938 15.1962 11.6545L15.6699 9.85449C15.8367 9.22041 15.3585 8.6 14.7028 8.6H13C12.4477 8.6 12 8.15228 12 7.6V5.75C12 5.49804 12.1054 5.25641 12.2929 5.07825C12.4804 4.90009 12.7348 4.8 13 4.8H15C15.5523 4.8 16 4.35228 16 3.8V2Z" fill="#B0BDFF"/>
                                    <path d="M16 4H13.2727C12.0672 4 10.911 4.47411 10.0586 5.31802C9.20617 6.16193 8.72727 7.30653 8.72727 8.5V11.2H6V14.8H8.72727V22H12.3636V14.8H15.0909L16 11.2H12.3636V8.5C12.3636 8.26131 12.4594 8.03239 12.6299 7.8636C12.8004 7.69482 13.0316 7.6 13.2727 7.6H16V4Z" stroke="#1E1E1E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div>Facebook</div>
                            </div>
                            <div className={'flex cursor-pointer'}>
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="19" height="19" rx="5" fill="#FDB0FF"/>
                                    <path d="M8.3 2.2H16.7C19.7895 2.2 22.3 4.71046 22.3 7.8V16.2C22.3 17.6852 21.71 19.1096 20.6598 20.1598C19.6096 21.21 18.1852 21.8 16.7 21.8H8.3C5.21046 21.8 2.7 19.2895 2.7 16.2V7.8C2.7 6.31479 3.29 4.89041 4.3402 3.8402C5.39041 2.79 6.81479 2.2 8.3 2.2ZM8.1 3.8C7.09218 3.8 6.12563 4.20036 5.41299 4.91299C4.70036 5.62563 4.3 6.59218 4.3 7.6V16.4C4.3 18.5005 5.99954 20.2 8.1 20.2H16.9C17.9078 20.2 18.8744 19.7996 19.587 19.087C20.2996 18.3744 20.7 17.4078 20.7 16.4V7.6C20.7 5.49954 19.0005 3.8 16.9 3.8H8.1ZM17.75 5.7C18.0285 5.7 18.2955 5.81062 18.4925 6.00754C18.6894 6.20445 18.8 6.47152 18.8 6.75C18.8 7.02848 18.6894 7.29555 18.4925 7.49246C18.2955 7.68937 18.0285 7.8 17.75 7.8C17.4715 7.8 17.2045 7.68937 17.0075 7.49246C16.8106 7.29555 16.7 7.02848 16.7 6.75C16.7 6.47152 16.8106 6.20445 17.0075 6.00754C17.2045 5.81062 17.4715 5.7 17.75 5.7ZM12.5 7.2C13.773 7.2 14.9939 7.70571 15.8941 8.60589C16.7943 9.50606 17.3 10.727 17.3 12C17.3 13.273 16.7943 14.4939 15.8941 15.3941C14.9939 16.2943 13.773 16.8 12.5 16.8C11.227 16.8 10.0061 16.2943 9.10589 15.3941C8.20571 14.4939 7.7 13.273 7.7 12C7.7 10.727 8.20571 9.50606 9.10589 8.60589C10.0061 7.70571 11.227 7.2 12.5 7.2ZM12.5 8.8C11.6513 8.8 10.8374 9.13714 10.2373 9.73726C9.63714 10.3374 9.3 11.1513 9.3 12C9.3 12.8487 9.63714 13.6626 10.2373 14.2627C10.8374 14.8629 11.6513 15.2 12.5 15.2C13.3487 15.2 14.1626 14.8629 14.7627 14.2627C15.3629 13.6626 15.7 12.8487 15.7 12C15.7 11.1513 15.3629 10.3374 14.7627 9.73726C14.1626 9.13714 13.3487 8.8 12.5 8.8Z" fill="#262626" stroke="#262626" stroke-width="0.4"/>
                                </svg>
                                <div className={'ml-10'}>Instagram</div>
                            </div>
                            <div className={'flex cursor-pointer'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5962 3.19499C12.2041 2.935 8.79653 2.935 5.40447 3.19499L3.13414 3.3697C2.4633 3.42094 1.82926 3.69065 1.333 4.13589C0.836736 4.58113 0.506803 5.17627 0.395751 5.82653C-0.131917 8.9207 -0.131917 12.0792 0.395751 15.1734C0.506803 15.8237 0.836736 16.4188 1.333 16.864C1.82926 17.3093 2.4633 17.579 3.13414 17.6302L5.40346 17.8049C8.7963 18.065 12.2043 18.065 15.5972 17.8049L17.8665 17.6302C18.5373 17.579 19.1714 17.3093 19.6677 16.864C20.1639 16.4188 20.4938 15.8237 20.6049 15.1734C21.1317 12.0793 21.1317 8.92065 20.6049 5.82653C20.4938 5.17627 20.1639 4.58113 19.6677 4.13589C19.1714 3.69065 18.5373 3.42094 17.8665 3.3697L15.5962 3.19499Z" fill="#FA8398"/>
                                    <path d="M9.95 9.69997V9.69996C9.95001 9.56571 9.99116 9.4344 10.0685 9.31949C10.1457 9.20467 10.2562 9.11051 10.3878 9.04593C10.5195 8.98135 10.6681 8.94839 10.8186 8.95006C10.9691 8.95173 11.1167 8.98796 11.2465 9.05547M9.95 9.69997L11.2465 9.05547M9.95 9.69997V15.3C9.95001 15.4343 9.99116 15.5656 10.0685 15.6805C10.1457 15.7953 10.2562 15.8895 10.3878 15.9541C10.5195 16.0187 10.6681 16.0516 10.8186 16.0499C10.9691 16.0483 11.1167 16.012 11.2465 15.9445C11.2465 15.9445 11.2465 15.9445 11.2465 15.9445M9.95 9.69997L11.2465 15.9445M11.2465 9.05547L16.6311 11.8555L16.6312 11.8555C16.7577 11.9214 16.8634 12.015 16.9371 12.1279C17.0109 12.2408 17.05 12.369 17.05 12.5C17.05 12.631 17.0109 12.7592 16.9371 12.8721C16.8634 12.985 16.7577 13.0786 16.6312 13.1445L16.6311 13.1445L11.2465 15.9445M11.2465 9.05547V15.9445M11.6654 11.019L14.5138 12.5L11.6654 13.981V11.019Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.1"/>
                                    <path d="M17.6 5.14514L17.6 5.14514C14.2054 4.88495 10.7952 4.88495 7.40065 5.14514L7.40064 5.14514L5.13033 5.31984C5.13032 5.31985 5.13031 5.31985 5.1303 5.31985C4.4486 5.37192 3.80414 5.64601 3.29961 6.09867C2.79505 6.55135 2.45944 7.15661 2.34646 7.81811L2.34646 7.81812C1.81785 10.9179 1.81785 14.0821 2.34646 17.1818L2.34646 17.1818C2.45944 17.8433 2.79505 18.4486 3.29961 18.9013C3.80415 19.3539 4.44862 19.628 5.13033 19.6801L7.39962 19.8548L7.39964 19.8548C10.795 20.1151 14.2056 20.1151 17.601 19.8548L17.601 19.8548L19.8703 19.6801C20.552 19.628 21.1965 19.3539 21.701 18.9013C22.2056 18.4486 22.5412 17.8433 22.6542 17.1818L22.6542 17.1818C23.1819 14.0821 23.1819 10.9178 22.6542 7.81814L22.6542 7.81811C22.5412 7.15661 22.2056 6.55135 21.701 6.09867C21.1965 5.64601 20.552 5.37192 19.8703 5.31985C19.8703 5.31985 19.8703 5.31985 19.8703 5.31984L17.6 5.14514ZM7.52682 6.72986L7.52683 6.72986C10.8381 6.47601 14.1646 6.47601 17.4758 6.72986L17.4797 6.68001L17.4758 6.72986L19.7452 6.90358C20.4078 6.95448 20.9487 7.44126 21.0572 8.08107L21.0572 8.08111C21.5561 11.0067 21.5561 13.9932 21.0572 16.9188L21.0572 16.9188C21.0043 17.2301 20.8465 17.5153 20.6087 17.7287C20.371 17.9422 20.067 18.0717 19.7452 18.0964L17.4758 18.2701L17.4797 18.3199L17.4758 18.2701C14.1646 18.524 10.8381 18.524 7.52683 18.2701L7.52301 18.3199L7.52682 18.2701L5.2575 18.0964C4.93567 18.0717 4.63168 17.9422 4.39392 17.7287C4.15619 17.5153 3.99839 17.2301 3.94543 16.9188L3.94543 16.9188C3.44659 13.9932 3.44659 11.0067 3.94543 8.08111L3.94543 8.08109C3.99839 7.76981 4.15619 7.48466 4.39392 7.27119C4.63168 7.05771 4.93567 6.92822 5.2575 6.90358L7.52682 6.72986Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.1"/>
                                </svg>
                                <div className={'ml-10'}>YouTube</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className={'flex justify-between'}>
                <img className={'max-h-180 max-w-437'} src={'./images/bushesFooterOne.png'} alt=""/>
                <img className={'max-h-180 max-w-239'} src={'./images/bushesFooterTwo.png'} alt=""/>
                <img className={'max-h-180 max-w-437'} src={'./images/bushesFooterTree.png'} alt=""/>
            </div>

        </>


    )

}



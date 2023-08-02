import React from "react";
import {Icons} from "#static/svg/EXPORT";


export const Contact =()=>{
    return(
        <div className={'my-160 ml-100 mobile:ml-16 mr-16'}>
        <img className={'pointer-events-none max-w-580 mobile:max-w-270'} src={'/images/get-in-touch.png'}/>
            <div className={'text-16 text-[#A8A29E] mt-20'}>Free Anonymous Phone Calls</div>
            <a className={''} href={'tel:+1 987 000-56-43'}>
                <img className={'my-20 mobile:max-w-220'} src={'/images/phone-number.svg'}/>
            </a>
        <div className={''}>
            <a className={''} href={'mailto:pschello@gmail.com'}>
                <img className={'mobile:max-w-270'} src={'/images/mail.svg'}/>
            </a>
        </div>

        <div className={'text-16 mb-16 mt-50'}>SOCIAL:</div>
        <div className={'flex gap-x-15'}>
            <div className={'flex cursor-pointer'}>
                <Icons.Instagram/>
                <div className={'ml-10'}>Instagram</div>
            </div>
            <div className={'flex cursor-pointer'}>
                <Icons.Facebook/>
                <div>Facebook</div>
            </div>
            <div className={'flex cursor-pointer'}>
                <Icons.YouTube/>
                <div className={'ml-10'}>YouTube</div>
            </div>
        </div>
    </div>)
}




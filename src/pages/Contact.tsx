import React from "react";
import {Icons} from "#static/svg/EXPORT";


export const Contact =()=>{
    return(
        <div className={'my-160 ml-100 mobile:ml-16 mr-16'}>
        <img className={'pointer-events-none'} src={'/images/get-in-touch.svg'}/>
        <div className={'my-20 pointer-events-none'}>
            <a className={''} href={'mailto:pschello@gmail.com'}>
                <img src={'/images/mail.svg'}/>
            </a>
        </div>
        <a className={'pointer-events-none'} href={'tel:+1 987 000-56-43'}>
            <img src={'/images/phone-number.svg'}/>
        </a>

        <div className={'text-16 mb-16 mt-30'}>SOCIAL:</div>
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




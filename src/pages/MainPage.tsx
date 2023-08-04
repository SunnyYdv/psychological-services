import React, {useRef, useState, useEffect, useCallback} from "react";
import { useIntersection } from 'react-use'
import cls from "classnames";
import {Frustration} from "./ForMain/Frustration";
import {TrueLove} from "./ForMain/TrueLove";
import {Meeting} from "./ForMain/Meeting";
import {WeHaveStory} from "./ForMain/WeHaveStory";
import {Chance} from "./ForMain/Chance";
import {Help} from "./ForMain/Help";
import {MainPageMobile} from "./ForMain/MainPageMobile";
import { useNavigate } from "react-router";




export const MainPage:React.FC=()=>{
    const navigate = useNavigate();

    const containerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const view = useIntersection(containerRef, { root: null })

    useEffect(() => {
        if (view?.isIntersecting) {
            setIsVisible(true)
        }
    }, [view])

    const toAbout = useCallback(() => {
        navigate("/about");
    }, []);

  return (
      <>
          <div className={'desktop:hidden mobile:block'}><MainPageMobile/></div>
          <div className={cls('mobile:hidden grow max-w-[1400px] ml-auto mr-auto')}>
              <img className={'z-0 absolute top-0 left-0 animatedCloudLeft'} src={'./images/header-cloud.svg'} alt=""/>
              <img className={cls('absolute top-50 left-50% right-50% animatedCloudRight mobile:mt-100')} src={'./images/header-cloud2.svg'} alt=""/>

              <div className={'mt-100 relative'}>
                  <div className={'flex justify-between '}>
                      <div  ref={containerRef} className={'max-w-590 ml-100 animatedText'}>
                          <div className={'text-16'}>MEET OUR NEW</div>
                          <div className={'text-64'}>PSYCHOLOGICAL SERVICES CENTER</div>
                          <div className={'text-16 mt-20'}>Our specialties include couples therapy, communication enhancement, navigating divorce, self-esteem building, and pre-marital counseling. addressing infidelity, adjusting to break-ups, relationship skill-building.</div>
                          <img onClick={toAbout} className={'m-auto mt-65 cursor-pointer'} src={'./images/home-learn-more.svg'} alt=""/>
                      </div>
                      <div className={''}>
                          <div className={''}>
                              <img className={'z-0 absolute left-50%  animatedCloudRight max-w-940'} src={'./images/home-big-cloud2.png'} alt=""/>
                          </div>
                          <div className={''}>
                              <img className={'z-1 animatedHeart max-w-575'} src={'./images/home-heart.png'} alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
              <WeHaveStory/>
              <Meeting/>
              <TrueLove/>
              <Frustration/>
              <Chance/>
              <Help/>
          </div>
      </>

  );
};





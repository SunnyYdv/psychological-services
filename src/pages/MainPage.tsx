import React, {useRef, useState, useEffect} from "react";
import { useIntersection } from 'react-use'
import cls from "classnames";
import {Frustration} from "./ForMain/Frustration";
import {TrueLove} from "./ForMain/TrueLove";
import {Meeting} from "./ForMain/Meeting";
import {WeHaveStory} from "./ForMain/WeHaveStory";
import {Chance} from "./ForMain/Chance";
import {Help} from "./ForMain/Help";
import {MainPageMobile} from "./ForMain/MainPageMobile";



export const MainPage:React.FC=()=>{

    const containerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const view = useIntersection(containerRef, { root: null })

    useEffect(() => {
        if (view?.isIntersecting) {
            setIsVisible(true)
        }
    }, [view])

  return (
      <>
          <div className={'desktop:hidden mobile:block'}><MainPageMobile/></div>
          <div className={cls('mobile:hidden grow max-w-[1400px] ml-auto mr-auto')}>
             <div className={'mt-100 relative'}>
                  <div className={'flex justify-between '}>
                      <div  ref={containerRef} className={'max-w-590 ml-100 animatedText'}>
                          <div className={'text-16'}>MEET OUR NEW</div>
                          <div className={'text-64'}>PSYCHOLOGICAL SERVICES CENTER</div>
                          <div className={'text-16 mt-20'}>Our specialties include couples therapy, communication enhancement, navigating divorce, self-esteem building, and pre-marital counseling. addressing infidelity, adjusting to break-ups, relationship skill-building.</div>
                          <img className={'m-auto mt-65'} src={'./images/home-learn-more.svg'} alt=""/>
                      </div>
                      <div className={''}>
                          <div className={''}>
                              <img className={'z-0 absolute left-50%  animatedCloudRight'} src={'./images/home-big-cloud2.svg'} alt=""/>
                          </div>
                          <div className={''}>
                              <img className={'z-1 animatedHeart'} src={'./images/home-heart.svg'} alt=""/>
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





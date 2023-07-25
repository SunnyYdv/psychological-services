import React, {useRef, useState, useEffect} from "react";
import { useIntersection } from 'react-use'
import cls from "classnames";

export const WeHaveStory:React.FC=()=>{

    const containerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const view = useIntersection(containerRef, { root: null })

    useEffect(() => {
        if (view?.isIntersecting) {
            setIsVisible(true)
            console.log(isVisible);
        }
    }, [view])

  return (
      <>
          <div className={'mb-300 mt-300 relative'}>
              <div ref={containerRef}>
                  <img className={cls('absolute  top-150', isVisible && 'animatedCloudOutBigLeft')} src={'./images/home-cloud-2part.svg'} alt=""/>
              </div>
              <div className={'flex justify-center'}>
                  <img className={''} src={'./images/we-have-story.svg'} alt=""/>
              </div>

              <div ref={containerRef} className={'flex '}>
                  <img className={cls('absolute left-100 ', isVisible && "animatedCloudOutLittle")} src={'./images/home-cloud-2part3.svg'} alt=""/>

                  <img className={cls('absolute -right-190 ', isVisible && 'animatedCloudOutRight')} src={'./images/home-cloud-2part2.svg'} alt=""/>
              </div>
          </div>

      </>
  );
};





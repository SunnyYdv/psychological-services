import React, {useRef, useState, useEffect} from "react";
import { useIntersection } from 'react-use'
import cls from "classnames";


export const Frustration:React.FC=()=>{

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
          <img className={'max-w-200'} src="./images/list2.svg" alt=""/>
          <div className={'flex justify-end'}>
              <img className={'max-w-200'} src="./images/stick.webp" alt=""/>
          </div>
          <div ref={containerRef} className={'ml-100 flex gap-x-60'}>
              <div className={'relative'}>
                  <img  className={cls(isVisible && 'animatedCircle3 max-w-600')} src="./images/circle3.png" alt=""/>
                  <img className={cls('absolute top-0', isVisible && "animatedCircle4")} src="./images/beer.png" alt=""/>
              </div>
              <div>
                  <div className={'flex gap-x-20 mb-40'}>
                      <img  className={cls(isVisible && 'animatedCircle2')} src="./images/circle2.svg" alt=""/>
                      <img  className={cls(isVisible && 'animatedCircle')} src="./images/circle.svg" alt=""/>
                  </div>
                  <img src={"./images/frustration.svg"} alt=""/>
                  <div className={'text-16 mt-20 max-w-400'}>But the course of true love never did run smooth. The Sarracenia becomes starving. More and more she looks at the fly as if it were food. The fly starts to worry about itself. It's not enough that they love each other. Is that the end of the love story?</div>
              </div>
          </div>
          <div className={'flex justify-end'}>
              <img className={'max-w-200 rotate-180 '} src="./images/list2.svg" alt=""/>
          </div>

      </>
  );
};





import React,{ useCallback } from "react";
import cls from "classnames";
import {useNavigate} from "react-router";



export const MainPageMobile:React.FC=()=>{

    const navigate = useNavigate();
    const toAbout = useCallback(() => {
        navigate("/about");
    }, []);

  return (
      <>
          <div className={'mt-150 ml-16 '}>
              <img className={'z-0 absolute top-0 right-120 '} src={'./images/header-cloud.svg'} alt=""/>
              <img className={cls('absolute top-50 left-50% right-50% mt-100')} src={'./images/header-cloud2.svg'} alt=""/>
              <div className={'text-16'}>MEET OUR NEW</div>
              <div className={'text-30 max-w-270'}>PSYCHOLOGICAL SERVICES CENTER</div>
              <div className={'text-16 mt-20'}>Our specialties include couples therapy, communication enhancement, navigating divorce, self-esteem building, and pre-marital counseling. addressing infidelity, adjusting to break-ups, relationship skill-building.</div>
              <img onClick={toAbout} className={'mt-20 ml-36 cursor-pointer'} src={"./images/home-learn-more.svg"} alt=""/>
              <div className={''}>
                  <img className={'ml-100'} src={"./images/cloud-mobile.svg"} alt=""/>
                  <img className={'-ml-70 max-w-200'} src={"./images/home-cloud-2part.svg"} alt=""/>
              </div>
          </div>

          <div className={''}>
              <div className={'flex justify-center mt-40'}>
                  <img className={''} src={'./images/we-have-story.png'} alt=""/>
              </div>
              <img className={cls('ml-200')} src={'./images/home-cloud-2part2.svg'} alt=""/>
              <img className={cls('-ml-100')} src={'./images/home-cloud-2part3.svg'} alt=""/>
          </div>


          <div className={'mx-16 mt-100'}>
              <div className={'text-30'}>A meeting</div>
              <div className={'text-16 my-20'}>One day the most ordinary fly saw the most charming flower in the world. This love wasn't supposed to happen, but it did. It was love at first sight, at last sight, at ever and ever sight. A fly and a Sarracenia fall in love.</div>
              <div className={'text-16'}>But they have a little trouble. Sarracenia, family of carnivorous pitcher plants in the order Ericales, native to North and South America.
                  These low growing perennial herbs are notable for their modified pitcherlike leaves, which serve as pitfall traps to ensnare and digest insects and other small prey.</div>
          </div>

          <div className={'flex justify-center mx-16'}>
              <img className={''} src="./images/meeting-photo.svg" alt=""/>
          </div>

          <div className={'flex justify-end -mr-40 mt-60'}>
              <img className={'rotate-180 max-w-220'} src={'./images/cloud-1.webp'} alt=""/>
          </div>
          <div className={'flex '}>
              <img src="./images/stick.webp" alt="" className="rotate-180 max-w-170"/>
          </div>

          <div className={'mx-16 mt-40'}>
              <div className={'flex gap-x-70'}>
                  <div className={'text-30'}>True love</div>
                  <img src={'./images/home-2hearts.svg'} alt=""/>
              </div>
              <div className={'text-16 mt-20'}>
                  The Sarracenia refuses to eat insects for them love. Now she drinks water and photosynthesis like all ordinary flowers. Their feelings are getting stronger every day. They have first date, long moonlight walks. Their love story is so romantic.
              </div>
          </div>


          <div className={'flex justify-center mx-16'}>
              <img className={''} src="./images/home-table.svg" alt=""/>
          </div>

          <div className={'flex justify-between'}>
              <div className={'-ml-20'}>
                  <img className={'max-w-115'} src="./images/list2.svg" alt=""/>
              </div>
              <div className={'-mr-10'}>
                  <img className={'max-w-179'} src="./images/stick.webp" alt=""/>
              </div>
          </div>

          <div className={'flex justify-center'}>
              <img className={cls('ml-140')} src={'./images/circle.svg'} alt=""/>
          </div>
          <div className={'flex justify-center'}>
              <img className={cls('')} src={'./images/circle2.svg'} alt=""/>
          </div>

          <div className={'flex justify-center mx-16'}>
              <img className={cls('')} src={'./images/circle3-mobile.svg'} alt=""/>
          </div>


          <div className={'mx-16 mt-60'}>
              <div className={'text-30'}>Frustration</div>
              <div className={'text-16'}>
                  But the course of true love never did run smooth. The Sarracenia becomes starving. More and more she looks at the fly as if it were food. The fly starts to worry about itself. It's not enough that they love each other. Is that the end of the love story?
              </div>
          </div>


          <div className={'flex justify-between'}>
              <img className={'max-w-150 mt-100'} src={'./images/violin.svg'} alt=""/>
              <img className={'rotate-180 max-w-120'} src="./images/list2.svg" alt=""/>
          </div>

          <div className={'ml-200 mt-50'}>
              <img src={"./images/watch-mobile.svg"} alt=""/>
          </div>


          <div className={'relative mt-110'}>
              <div className={'flex justify-center'}>
                  <img className={'max-w-400'} src={"./images/home-chance.svg"} alt=""/>
              </div>
              <img className={'absolute right-70  bottom-90 max-h-400'} src={"./images/home-lamp.svg"} alt=""/>
          </div>

          <div className={'mx-16'}>
              <div className={'text-30'}>The chance</div>
              <div className={'text-16 mt-20'}>Many couples have relationship problems. They'll get help from specialists in these situations. The success of therapy is impossible without support from each other. That's why the fly and the Sarracenia are always together and find a way out of the problem.</div>
          </div>

          <div className={'flex justify-start -ml-20 mt-40'}>
              <img className={'rotate-90 max-w-170'} src={"./images/stick.webp"} alt=""/>
          </div>


          <div className={'mt-150 relative'}>
              <img className={'max-w-175 absolute -left-20 -top-100'} src={"./images/home-cloud-2part2.svg"} alt=""/>
              <div className={'mx-16'}>
                  <img className={''} src={"./images/help-you.png"} alt=""/>
              </div>
              <div className={'flex justify-end -mr-60 '}>
                  <img className={'max-w-250'} src={"./images/home-cloud-2part2.svg"} alt=""/>
              </div>
              <div className={'-ml-30'}>
                  <img className={'max-w-200'} src={"./images/home-cloud-2part2.svg"} alt=""/>
              </div>
          </div>


          <div className={'justify-center flex mt-50 mb-80'}>
              <img src={"./images/house.svg"} alt=""/>
          </div>

      </>
  );
};





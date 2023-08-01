import React from "react";
export const Chance:React.FC=()=>{

  return (
      <>
          <div className={'flex'}>
              <img src={'./images/violin.svg'} alt=""/>
          </div>

          <div className={'mx-205'}>
              <div className={'relative ml-250'}>
                  <img className={''} src={'./images/watch.svg'} alt=""/>
                  <img className={'absolute top-48 left-46 watch origin-bottom-left'} src={'./images/vector.svg'} alt=""/>
              </div>

              <div className={'flex items-center gap-x-60'}>
                  <div>
                      <div className={'text-64'}>The chance</div>
                      <div className={'text-16 max-w-400'}>Many couples have relationship problems. They'll get help from specialists in these situations. The success of therapy is impossible without support from each other. That's why the fly and the Sarracenia are always together and find a way out of the problem.</div>
                  </div>
                  <div className={'relative'}>
                      <img className={''} src={"./images/home-chance.svg"} alt=""/>
                      <img className={'absolute -right-150 bottom-40'} src={"./images/home-lamp.svg"} alt=""/>
                  </div>

              </div>
          </div>

          <div className={'-ml-20'}>
              <img className={'rotate-90 max-w-200'} src="./images/stick.webp" alt=""/>
          </div>
      </>
  );
};





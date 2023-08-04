import React from "react";




export const Meeting:React.FC=()=>{
  return (
      <>
          <div className={'mx-100 flex justify-between'}>
              <img className={'max-w-715'} src={"./images/meeting-photo.png"} alt=""/>
              <div>
                  <img src={"./images/meeting.svg"} alt=""/>
                  <div className={'text-16 max-w-400 mt-20'}>One day the most ordinary fly saw the most charming flower in the world. This love wasn't supposed to happen, but it did. It was love at first sight, at last sight, at ever and ever sight. A fly and a Sarracenia fall in love.</div>
                  <div className={'text-16 max-w-400 mt-20'}>But they have a little trouble. Sarracenia, family of carnivorous pitcher plants in the order Ericales, native to North and South America.
                      These low growing perennial herbs are notable for their modified pitcherlike leaves, which serve as pitfall traps to ensnare and digest insects and other small prey.</div>
              </div>
          </div>
          <div className={'flex justify-end mx-100 mt-100'}>
              <img className={'rotate-180'} src="./images/home-cloud-2part2.svg" alt=""/>
          </div>
      </>
  );
};





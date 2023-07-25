import React from "react";


export const Help:React.FC=()=>{


  return (
      <>
          <div className={'mt-100 mb-170'}>
              <div className={'flex justify-center relative'}>
                  <img className={'max-w-240 absolute -left-70'} src={"./images/cloud-1.webp"} alt=""/>
                  <img src={"./images/help-you.svg"} alt=""/>
                  <img className={'max-w-400 absolute -right-150 top-20'} src={"./images/cloud-1.webp"} alt=""/>
              </div>
              <div className={'flex justify-center mt-80'}>
                  <img className={'max-w-240 absolute left-210'} src={"./images/cloud-1.webp"} alt=""/>
                  <img src={"./images/house.svg"} alt=""/>
              </div>
          </div>

      </>
  );
};





import {useRef} from "react";

export const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null)
  const scrollRef = () => teamRef?.current?.scrollIntoView()

  return (
    <div className={"max-w-1400 mx-auto px-100 mobile:px-20 py-50"}>
      <div className="flex mobile:flex-col mobile:items-center gap-80 mobile:gap-40 mb-40 mobile:mb-70">
        <div className="">
          <h2 className="mb-5">OUR TEAM</h2>
          <h1 className="text-64 mobile:text-30 leading-tight mobile:mb-20">
            MEET OUR COMPASSIONATE EXPERTS
          </h1>
          <div className="mobile:hidden w-290 bg-[#B19DFF] rounded-r-full h-4 -rotate-[4deg] -mt-8 mb-20" />
          <p className="mb-20">
            With diverse backgrounds and areas of expertise, each team member
            brings a unique perspective to our center. Together, we strive to
            create a welcoming environment where every individual can feel
            understood and supported.
          </p>

          <img
              onClick={scrollRef}
            src="/images/button-icon-down.webp"
            className="max-w-100 mx-auto cursor-pointer"
          />
        </div>
        <div className="relative">
          <img
            src="/images/expert.webp"
            className="max-w-544 mobile:max-w-325"
          />
          <div className="bg-white shadow-interactive-1 absolute bottom-100 -left-80 mobile:-bottom-50 mobile:left-20 rounded-15 p-10 pr-70">
            <div>Jane Martinez</div>
            <div className="text-stone mt-5">Clinical Director</div>
          </div>
        </div>
      </div>
      <h2 ref={teamRef} className="mb-40">TEAM MEMBERS</h2>
      <div className="flex justify-center flex-wrap gap-20 px-20">
        <div>
          <img
            src="/images/member-1.webp"
            className="max-w-375 mobile:w-350 mb-10"
          />
          <div>Dr. Kate Allen</div>
          <div className="text-stone mt-5">Neuropsychologist</div>
        </div>
        <div>
          <img
            src="/images/member-2.webp"
            className="max-w-375 mobile:w-350 mb-10"
          />
          <div>Dr. Kate Allen</div>
          <div className="text-stone mt-5">Neuropsychologist</div>
        </div>{" "}
        <div>
          <img
            src="/images/member-3.webp"
            className="max-w-375 mobile:w-350 mb-10"
          />
          <div>Dr. Samuel Thompson</div>
          <div className="text-stone mt-5">Senior Psychologist</div>
        </div>
        <div className="">
          <img
            src="/images/member-4.webp"
            className="max-w-375 mobile:w-350 mb-10"
          />
          <div>Helen Murphy</div>
          <div className="text-stone mt-5">Licensed Clinical Social Worker</div>
        </div>
      </div>
    </div>
  );
};

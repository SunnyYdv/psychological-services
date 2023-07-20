export const Team = () => {
  return (
    <div className={"max-w-1400 mx-auto px-100 py-30"}>
      <h2 className="mb-5">OUR TEAM</h2>
      <h1 className="text-64 mobile:text-30">MEET OUR COMPASSIONATE EXPERTS</h1>
      <h2 className="mb-40">TEAM MEMBERS</h2>
      <div className="flex justify-center flex-wrap gap-20">
        <div>
          <img src="/images/member-1.webp" className="max-w-375 mb-10" />
          <div>Dr. Kate Allen</div>
          <div className="text-stone mt-5">Neuropsychologist</div>
        </div>
        <div>
          <img src="/images/member-2.webp" className="max-w-375 mb-10" />
          <div>Dr. Kate Allen</div>
          <div className="text-stone mt-5">Neuropsychologist</div>
        </div>{" "}
        <div>
          <img src="/images/member-3.webp" className="max-w-375 mb-10" />
          <div>Dr. Samuel Thompson</div>
          <div className="text-stone mt-5">Senior Psychologist</div>
        </div>
        <div className="">
          <img src="/images/member-4.webp" className="max-w-375 mb-10" />
          <div>Helen Murphy</div>
          <div className="text-stone mt-5">Licensed Clinical Social Worker</div>
        </div>
      </div>
    </div>
  );
};

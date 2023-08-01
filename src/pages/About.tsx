export const About = () => {
  return (
    <div
      className={"mt-50 max-w-1400 relative py-30 pb-60 mx-auto px-100 tablet:px-26"}
    >
      <img onClick={()=>{window.scroll(0,10000000)}}
        src="/images/journey.webp"
        className="max-w-600 max-h-600 tablet:max-w-320 object-fit mx-auto mb-120 cursor-pointer"
      />
      <img src="/images/who-we-are.webp" className="mx-auto mb-50" />
      <div className="flex items-center space-x-300 tablet:space-x-0 tablet:flex-col tablet:items-end mb-160 tablet:mb-40">
        <div className="tablet:order-last">
          <h2 className="text-64 tablet:text-30 mb-20">History</h2>
          <p>
            Founded in 2008, we have a proud history of providing compassionate
            and comprehensive mental health services. We started with a small
            team of dedicated professionals, eager to change lives through our
            expertise in mental health care. Over the years, our center has
            grown to accommodate an expanding community, staying committed to
            our original vision of creating a safe space for healing. Today, we
            are a multidisciplinary team, continually building on our strong
            foundation and innovating in response to the changing needs of our
            patients.
          </p>
        </div>
        <img
          src="/images/hearts.webp"
          className="max-h-350 max-w-350 tablet:max-w-180 tablet:mb-30"
        />
      </div>

      <img src="/images/our-mission.webp" className="mx-auto mb-50" />

      <div className="mb-80 tablet:pt-180 relative">
        <img
          src="/images/cloud-1.webp"
          className="-z-10 -ml-80 absolute top-0 tablet:top-50 left-0 max-h-200 -ml-160 tablet:-ml-50 max-w-450 tablet:max-w-180"
        />
      <img
        src="/images/list.webp"
        className="-z-10 absolute right-0 top-0 -mr-120 tablet:-mr-30 -top-100 max-h-230 max-w-230 tablet:max-w-100 tablet:top-0"
      />
        <p className="max-w-50% tablet:max-w-full ml-auto">
          <h2 className="text-64 tablet:text-30 mb-20">
            Promoting Mental Health
          </h2>
          Our mission begins with promoting mental health as a critical part of
          overall wellness. We are dedicated to increasing awareness and
          understanding of mental health in our community, helping to break down
          the barriers of stigma and misinformation.
        </p>
      </div>
      <div className="mb-80 tablet:pt-200 relative">
        <img
          src="/images/cloud-2.webp"
          className="-z-10 absolute top-0 -mr-140 tablet:-mr-50 right-0 max-h-200 max-w-450 tablet:max-w-280"
        />
        <p className="max-w-50% tablet:max-w-full">
          <h2 className="text-64 tablet:text-30 mb-20">Early Identification</h2>
          We prioritize prevention and early identification of mental health
          issues. By catching potential problems early, we can provide effective
          interventions and prevent further complications.
        </p>
      </div>
      <div className="mb-80 tablet:pt-200 relative">
        <img
          src="/images/cloud-3.webp"
          className="-z-10 absolute  -ml-160 tablet:-ml-50 left-0 tablet:top-0 max-h-200 max-w-450 tablet:max-w-280"
        />
        <p className="max-w-50% tablet:max-w-full ml-auto ">
          <h2 className="text-64 tablet:text-30 mb-20">Personalized Care</h2>
          Our commitment is to provide personalized and comprehensive care to
          individuals at all stages of their mental health journey. We
          understand that every person's experience is unique, and we tailor our
          approach accordingly.
        </p>
      </div>
      <div className="mb-80 tablet:mb-50 relative">
        <p className="max-w-50% tablet:max-w-full tablet:pb-200">
          <h2 className="text-64 tablet:text-30 mb-20">
            Supportive Environment
          </h2>
          Above all, we strive to create a supportive environment that respects
          individual needs. We believe in the potential for growth and wellbeing
          in each person, and we are here to nurture that potential every step
          of the way.
        </p>
        <img
          src="/images/stick.webp"
          className="-z-10 absolute right-0 -mr-100 max-h-280 max-w-280 tablet:max-w-180 tablet:max-h-180 bottom-0 tablet:-mr-30"
        />
      </div>
      <img src="/images/our-services.webp" className="mx-auto my-120 tablet:my-40" />
      <div className="flex gap-20 flex-wrap justify-center mx-auto">
        <div className="bg-services-green max-w-380 rounded-30 relative p-40">
          <div className="w-full h-full  border absolute top-8 bottom-0 left-8 right-0 border-neutral rounded-30" />
          <h2 className="mb-100 tablet:mb-50 text-40">1</h2>
          <h3 className="text-24 mb-10">Individual Therapy</h3>
          <p>
            One-on-one sessions tailored to meet the unique needs of each
            client. Our therapists use evidence-based practices to help
            individuals navigate life's challenges and achieve their personal
            goals.
          </p>
        </div>
        <div className="bg-services-orange max-w-380 rounded-30 relative p-40">
          <div className="w-full h-full border absolute top-8 bottom-0 left-8 right-0 border-neutral rounded-30" />
          <h2 className="mb-100 tablet:mb-50 text-40">2</h2>
          <h3 className="text-24 mb-10">Group Therapy</h3>
          <p>
            A supportive environment where individuals can learn from and
            connect with others experiencing similar struggles. Group therapy
            provides a unique opportunity for shared healing and growth.
          </p>
        </div>
        <div className="bg-services-blue max-w-380 rounded-30 relative p-40">
          <div className="w-full h-full border absolute top-8 bottom-0 left-8 right-0 border-neutral rounded-30" />
          <h2 className="mb-100 tablet:mb-50 text-40">3</h2>
          <h3 className="text-24 mb-10">Familie Therapy</h3>
          <p>
          Designed to nurture change and development within families. Our therapists work with families to foster understanding, resolve conflicts, and strengthen relationships.
          </p>
        </div>
        <div className="bg-services-violet max-w-380 rounded-30 relative p-40">
          <div className="w-full h-full border absolute top-8 bottom-0 left-8 right-0 border-neutral rounded-30" />
          <h2 className="mb-100 tablet:mb-50 text-40">4</h2>
          <h3 className="text-24 mb-10">Psychiatric Evaluation</h3>
          <p>
          Comprehensive assessments to accurately diagnose mental health conditions and, if necessary, a plan for medication management is made under the careful supervision of our psychiatric professionals.
          </p>
        </div>
        <div className="bg-services-pink max-w-380 rounded-30 relative p-40">
          <div className="w-full h-full border absolute top-8 bottom-0 left-8 right-0 border-neutral rounded-30" />
          <h2 className="mb-100 tablet:mb-50 text-40">5</h2>
          <h3 className="text-24 mb-10">Wellness Workshops</h3>
          <p>
          Regularly scheduled sessions focusing on stress management, mindfulness, self-care strategies, and other topics related to mental health and wellbeing.
          </p>
        </div>
      </div>
    </div>
  );
};

export const About = () => {

  return (
    <div className={"max-w-1400 py-30 mx-auto px-100 mobile:px-16 pb-300"}>
      <img
        src="/images/journey.webp"
        className="max-w-600 max-h-600 mx-auto mb-120"
      />
      <img src="/images/who-we-are.webp" className="mx-auto mb-50" />
      <div className="flex items-center space-x-300 mobile:space-x-0 mobile:flex-col mb-160 mobile:mb-40">
        <div className="mobile:order-last">
          <h2 className="text-64 mobile:text-30 mb-20">History</h2>
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
          className="max-h-350 max-w-350 mobile:mb-30"
        />
      </div>
      <img src="/images/our-mission.webp" className="mx-auto mb-50" />
      <div className="mb-40">
        <img
          src="/images/cloud-1.webp"
          className="-z-10 absolute left-0 max-h-200 max-w-450"
        />

        <p className="max-w-50% ml-auto">
          <h2 className="text-64 mobile:text-30 mb-20">
            Promoting Mental Health
          </h2>
          Our mission begins with promoting mental health as a critical part of
          overall wellness. We are dedicated to increasing awareness and
          understanding of mental health in our community, helping to break down
          the barriers of stigma and misinformation.
        </p>
      </div>
      <div>
        <img
          src="/images/cloud-2.webp"
          className="-z-10 absolute right-0 max-h-200 max-w-450"
        />
        <p className="max-w-50% ">
          <h2 className="text-64 mobile:text-30 mb-20">
            Early Identification
          </h2>
          We prioritize prevention and early identification of mental health
          issues. By catching potential problems early, we can provide effective
          interventions and prevent further complications.
        </p>
      </div>
    </div>
  );
};

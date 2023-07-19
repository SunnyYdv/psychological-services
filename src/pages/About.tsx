export const About = () => {
  return (
    <div className={"max-w-1400 py-30 mx-auto px-100 mobile:px-16"}>
      <img
        src="/images/journey.webp"
        className="max-w-600 max-h-600 mx-auto mb-120"
      />
      <img src="/images/who-we-are.webp" className="mx-auto mb-50" />
      <div className="flex items-center space-x-300 mobile:space-x-0 mobile:flex-col ">
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
          <img src="/images/hearts.webp" className="max-h-350 max-w-350 mobile:mb-30" />
      </div>
    </div>
  );
};

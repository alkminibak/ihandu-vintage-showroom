import heroImage from "../assets/images/hero2.jpg";

const Hero = () => {
  return (
    <section className="relative h-40 overflow-hidden sm:h-auto sm:max-h-[520px]">
      <img
        src={heroImage}
        alt="Three vintage outfits from the I Hand U collection"
        className="block h-full w-full object-cover object-[80%_center] sm:h-auto sm:object-center"
      />

      <div className="absolute bottom-6 left-4 md:bottom-8 md:left-6 lg:bottom-26">
        <h2 className="max-w-[220px] text-base leading-tight text-background md:max-w-xs md:text-lg lg:max-w-md lg:text-3xl">
          Handpicked vintage pieces,
          <br />
          ready for their next wardrobe
        </h2>
      </div>
    </section>
  );
};

export default Hero;

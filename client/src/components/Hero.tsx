import heroImage from "../assets/images/hero2.jpg";

const Hero = () => {
  return (
    <section className="relative max-h-[520px] overflow-hidden">
        <img
            src={heroImage}
            alt="Three vintage outfits from the I Hand U collection"
            className="block h-full w-full object-cove"
        /> 

        <div className="absolute bottom-26 left-6">
            <h2 className="max-w-md text-3xl leading-tight text-background">
                Handpicked vintage pieces,
                <br />
                ready for their next wardrobe
            </h2>
        </div>
    </section>
  );
};

export default Hero;
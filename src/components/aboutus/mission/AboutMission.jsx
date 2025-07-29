import React from "react";

const AboutMission = () => {
  return (
    <React.Fragment>
      <div className="bg-[#FFFFFF]">
        <section className=" flex flex-col justify-center items-center gap-16 py-16 px-4 lg:flex-row max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-1 lg:gap-4 lg:items-start">
            <h1 className="text-[#e35452] lg:text-[2rem] text-[1.5rem]">
              Mission
            </h1>
            <p className="text-[1rem] text-center lg:text-start">
              Hayamart is your one-stop destination for exquisite luxury wear,
              offering a curated collection that blends tradition and elegance.
              From stylish native outfits to timeless adire boubous and
              sophisticated abayas, each piece is crafted to elevate your style,
              exude confidence, and make every occasion truly unforgettable.
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 lg:gap-4 lg:items-start">
            <h1 className="text-[#e35452] lg:text-[2rem] text-[1.5rem]">
              Vision
            </h1>
            <p className="text-[1rem] text-center lg:text-start">
              Hayamart envisions becoming Africa’s leading destination for
              exquisite luxury fashion, blending cultural heritage with timeless
              elegance. We aspire to empower individuals through style, offering
              premium-quality natives, adire boubous, and abayas that inspire
              confidence, celebrate diversity, and redefine global standards of
              sophistication and class.
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 lg:gap-4 lg:items-start">
            <h1 className="text-[#e35452] lg:text-[2rem] text-[1.5rem]">
              Values
            </h1>
            <p className="text-[1rem] text-center lg:text-start">
              Our mission at Hayamart is to curate and deliver exceptional
              luxury wear that honors tradition while embracing modern design.
              We are committed to craftsmanship, quality, and customer
              satisfaction, ensuring every piece reflects elegance, comfort, and
              exclusivity for the discerning fashion-forward individual.
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutMission;

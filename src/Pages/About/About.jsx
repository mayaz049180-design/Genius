import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();
  const programsInfo = [
    {
      title: "Starstruck Program ",
      para: "Our Starstruck Program is designed to make learning engaging and fun. Students earn stars by completing activities in subjects like math, reading, and science, which they can then exchange for exciting prizes in our Starfall store. This program not only motivates students to excel academically but also teaches valuable life skills such as goal-setting and perseverance.",
    },
    {
      title: "Nebula ",
      para: "We integrate Social Emotional Learning into our curriculum to help students develop crucial skills such as empathy, resilience, and effective communication. Our SEL lessons are crafted to build a strong emotional foundation, enabling students to thrive both inside and outside the classroom.",
    },
    {
      title: "Parent Engagement ",
      para: "We believe that parent involvement is key to student success. Our workshops and strategy sessions equip parents with the tools and knowledge to support their children's educational journey. By fostering a collaborative environment, we help create a cohesive support system for our students.",
    },
  ];
  return (
    <>
      <div className="bg-[#d9d9d9] relative z-1  p-5 sm:p-6 rounded-t-[25px]">
        <div className="mb-5">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="h-8 w-8 sm:w-10 sm:h-10 flex border-[#012331] cursor-pointer border-2 justify-center items-center rounded-full "
          >
            <FaArrowLeft className="text-lg sm:text-xl text-[#012331]" />
          </button>
        </div>
        <span className="font-semibold  border-b-4 ogg text-[25px] md:text-[30px] border-[#FED302] kg:text-[40px] ">
          About Us
        </span>
        <p className="text-black/43 mt-4 text-lg md:text-xl">
          Welcome to Genius! We are a dedicated non-profit organization
          committed to empowering elementary students and their families through
          academic support and Social Emotional Learning (SEL). Our mission is
          to inspire a love for learning and foster the growth of resilient,
          well-rounded individuals who are prepared to navigate life's
          challenges with confidence.
        </p>
        <div className="mt-3">
          <p className="text-lg  font-semibold md:text-xl">Our Vision</p>
          <p className="text-black/43  text-lg md:text-xl">
            Our VisionAt Genius, we envision a world where every child has the
            tools, support, and environment they need to reach their fullest
            potential. We believe that with the right resources and
            encouragement, every student can achieve greatness.
          </p>
        </div>
        <div className="mt-3">
          <p className="text-lg mb-3  font-semibold md:text-xl">Our Programs</p>
          <div className="space-y-2">
            {programsInfo.map((item, index) => (
              <div>
                <p className="text-lg  font-semibold md:text-xl">
                  {item.title}
                </p>
                <p className="text-black/43  text-lg md:text-xl">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

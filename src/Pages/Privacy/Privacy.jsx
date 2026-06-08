import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Privacy = () => {
  const navigate = useNavigate();
  const programsInfo = [
    {
      title: "Sharing Your Information ",
      para: "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third parties who assist us in operating our website, conducting business, or servicing you, as long as those parties agree to keep this information confidential.",
    },
    {
      title: "Cookies",
      para: "We use cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.",
    },
    {
      title: "Your Choices",
      para: "You can choose to opt-out of receiving promotional emails from us by following the instructions provided in each email. You may also contact us to update or delete your personal information from our records.",
    },
    {
      title: "Changes to This Policy",
      para: "We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website.",
    },
  ];
  return (
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
        Privacy Policy
      </span>
      <p className="text-black/43 mt-4 text-lg md:text-xl">
        At Genius, we are committed to protecting your privacy and ensuring the
        security of your personal information. This Privacy Policy outlines the
        types of information we collect, how we use it, and the measures we take
        to safeguard your data.Safety and Security
      </p>
      <div className="mt-3">
        <p className="text-black/43  text-lg md:text-xl">
          Your safety and security are important to us. We employ
          industry-standard security measures to protect your personal
          information from unauthorized access, alteration, or disclosure.
        </p>
      </div>
      <div className="mt-3">
        <div className="space-y-2">
          {programsInfo.map((item, index) => (
            <div>
              <p className="text-lg  font-semibold md:text-xl">{item.title}</p>
              <p className="text-black/43  text-lg md:text-xl">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;

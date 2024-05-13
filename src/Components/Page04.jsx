import "../roboto-font.css";
import img0400 from "../assets/04-00_s.webp";
import img0401 from "../assets/04-01_s.webp";
import img0402 from "../assets/04-02_s.webp";

const Page04 = () => {
  return (
    <div className="relative w-full flex flex-col items-start pb-5">
      <div className="flex items-end w-full">
        <div className="sm:ml-0 pl-4 lg:pl-32 2xl:pl-64 flex-grow">
          <h1 className="text-6xl roboto-regular mt-16">Best selling</h1>
          <h2 className="text-9xl roboto-regular text-custom-green">Indoor plants</h2>
          <p className="text-3xl roboto-light w-3/4 pt-12">
            Low-maintenance houseplants
            <br /> that are easy to care for
          </p>
        </div>
        <div className="mt-4 lg:mr-44 roboto-regular bg-custom-dark-green text-white font-bold uppercase px-2 py-1 text-xs sm:text-sm md:text-base">
          <p>Online only</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-start md:gap-x-4 lg:gap-x-8 w-full mt-4 2xl:px-40">
        <div className="w-full sm:w-full md:w-1/3 lg:w-full 2xl:w-4/5">
          <img className="w-full" src={img0400} alt="Plant 1" />
        </div>
        <div className="w-full sm:w-full md:w-1/3 lg:w-full 2xl:w-4/5">
          <img className="w-full" src={img0401} alt="Plant 2" />
        </div>
        <div className="w-full sm:w-full md:w-1/3 lg:w-full 2xl:w-4/5">
          <img className="w-full" src={img0402} alt="Plant 3" />
        </div>
      </div>
    </div>
  );
};

export default Page04;

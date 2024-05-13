import img03 from "../assets/03.webp";
import "../roboto-font.css";

const Page03 = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute right-2/3 transform w-1/6 h-3/5 bg-white flex flex-col items-start justify-between p-4 z-10 overflow-auto break-words">
        <div className="w-full">
          <p className="ml-4 py-2 text-4xl sm:text-5xl md:text-6xl roboto-bold uppercase">New Arrivals</p>
          <hr className="ml-4 border-t-2 border-black w-11/12 my-2" />
          <p className="ml-4 py-2 text-2xl sm:text-3xl md:text-3xl roboto-regular">Agave</p>
          <p className="ml-4 py-2 text-xl sm:text-2xl md:text-2xl roboto-light">☀️ full sun</p>
          <p className="ml-4 py-2 text-xl sm:text-2xl md:text-2xl roboto-light">💧 water every 7 days</p>
        </div>
        <div className="w-full">
          <p className="ml-4 py-2 text-xl sm:text-2xl md:text-2xl roboto-light">15-25 inches</p>
          <hr className="ml-4 border-t-2 border-black w-11/12 my-2" />
          <p className="ml-4 py-2 text-xl sm:text-2xl md:text-2xl roboto-light">Agave, century plant</p>
        </div>
      </div>
      <div className="absolute w-full h-1/2 bg-custom-gray"></div>
      <div className="absolute w-full h-1/2 bottom-0 bg-white"></div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <img className="w-full h-auto" src={img03} alt="Centered" />
        <p className="absolute bottom-14 right-64 text-2xl">@myplantmymuse 📸</p>
      </div>
    </div>
  );
};

export default Page03;

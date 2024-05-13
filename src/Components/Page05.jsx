import "../roboto-font.css";

const Page05 = () => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: "100svw",
        height: "80svh",
        backgroundImage: `url('src/assets/05.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute top-20 sm:left-20 left-4 flex flex-col items-start mt-10 sm:pt-10 sm:pl-4 pt-0 pl-0">
        <h1 className="text-9xl roboto-regular sm:text-custom-black md:text-custom-black text-white">
          Indoor
          <br /> plants
        </h1>
        <p className="text-3xl roboto-light sm:text-custom-black md:text-custom-black lg:text-custom-black text-white mt-20 sm:w-1/2 md:w-full">
          Invite the nature into your home <br /> with these beautiful finds
        </p>
      </div>
    </div>
  );
};

export default Page05;

import img7 from "../assets/07.webp"; // Correct the path to the image

const ComponentSeven = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          backgroundImage: `url(${img7})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh", // Set height to 100vh
        }}>
        <div className="flex flex-col justify-center items-end h-screen text-end pr-12">
          <div className="text-5xl font-main font-bold mb-8 text-white text-center">
            <h1>
              Keep your plants <br />
              healthy and happy
            </h1>
          </div>
          <div className="">
            <h2 className="text-white text-3xl font-semibold mb-4">With these 7 tips</h2>
            <p className="text-white text-end text-3xl font-thin">
              You never know what will change the way
              <br />
              you care for your plants forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentSeven;

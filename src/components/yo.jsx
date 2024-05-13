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
        }}
      >
        <div className="">
          <div className="text-3xl font-main font-bold mb-4 text-white text-center flex justify-end content-center">
            <h1>
              Keep your plants <br />
              healthy and happy
            </h1>
          </div>
          <div className="">
            <h2 className="flex justify-end text-white text-3xl font-bold mb-4">
              With these 7 tips
            </h2>{" "}
            {/* Fixed typo in "With these" */}
            <p className="flex justify-end items-end text-white">
              You never know what will change the way you care for your plants
              forever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentSeven;

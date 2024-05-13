import third from "../assets/06-all.webp"; // Correct the path to the image

const PageSix = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          backgroundImage: `url(${third})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh", // Set height to 100vh
        }}>
        <div className="text-8xl pl-10 font-semibold pt-56 pb-10">
          <h1>
            Bedroom
            <br />
            plants
          </h1>
        </div>
        <div className="pt-8 text-4xl pl-8 pb-10">
          <h2>
            Your bedroom is your sanctuary
            <br />
            incorporate some of these plants to
            <br />
            influence a good night sleep.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageSix;

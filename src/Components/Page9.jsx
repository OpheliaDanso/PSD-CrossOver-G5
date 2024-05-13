import BG_P9 from "../assets/09.webp";

function Page9() {
  return (
    <div
      style={{
        backgroundImage: `url(${BG_P9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen flex"
    >
      <div className="m-auto w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Life is too short,
          <br />
          buy more & more
          <br />
          houseplants
        </h1>
      </div>
    </div>
  );
}

export default Page9;

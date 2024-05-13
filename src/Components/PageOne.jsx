import first from "../assets/01.webp";

export default function PageOne() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${first})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: 1000,
      }}>
      <h2 className="flex justify-center text-white pt-28 text-4xl items-start">plants lover & co.</h2>
      <h2 className="flex justify-center text-white font-bold text-8xl items-start">
        HOUSE
        <br />
        PLANTS
      </h2>
      <h2 className="flex justify-center text-white text-5xl items-start">care guide</h2>
      <h2 className="text-white pl-20 pt-40 text-3xl">
        Easy, hassle-free, steps to ensure that your
        <br />
        beloved plants stay happy and
        <br />
        evergreen indoors.
      </h2>
    </div>
  );
}

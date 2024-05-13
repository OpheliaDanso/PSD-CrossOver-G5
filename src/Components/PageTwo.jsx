import second from "../assets/02.webp";

export default function PageTwo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${second})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "flex-end",
          paddingLeft: "20px",
        }}>
        <h1 className="text-8xl">Monstera</h1>
      </div>
      <div className="grid grid-cols-4 mb-10">
        <h2 className=" text-4xl text-right">plant care</h2>
        <div>
          <h2 className="flex justify-center font-semibold pt-10">LIGHT</h2>
          <h3 className="flex justify-center">
            I love light! Give some
            <br />
            light but not too bright
            <br />
            or too strong.
          </h3>
        </div>
        <div>
          <h2 className="flex justify-center font-semibold pt-10">WATER</h2>
          <h3 className="flex justify-center">
            I love water
            <br />
            but once a week
            <br />
            is enough
          </h3>
        </div>
        <div>
          <h2 className=" flex justify-center font-semibold pt-10">FOOD</h2>
          <h3 className="flex justify-center">
            I&apos;m not greedy, so once
            <br />
            a month is plentiful and
            <br />
            will keep me growing.
          </h3>
        </div>
      </div>
    </div>
  );
}

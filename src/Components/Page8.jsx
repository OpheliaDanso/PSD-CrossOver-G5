import rubberPlantImage from "../assets/08-00.png";
import monsteraPeruImage from "../assets/08-01.png";
import plantPotImage from "../assets/08-02.png";
import indianFigCactusImage from "../assets/08-03.png";
import plantPotImage1 from "../assets/08-04.png";
import calatheaPinstripeImage from "../assets/08-05.png";
import basketImage from "../assets/08-06.png";
import peaceLilyImage from "../assets/08-07.png";

const Page8 = () => {
  const plants = [
    { name: "Rubber plant", price: 39.95, image: rubberPlantImage, link: "#" },
    {
      name: "Monstera Peru",
      price: 27.99,
      image: monsteraPeruImage,
      link: "#",
    },
    { name: "Plant pot", price: 8, image: plantPotImage, link: "#" },
    {
      name: "Indian Fig Cactus",
      price: 37,
      image: indianFigCactusImage,
      link: "#",
    },
    { name: "Plant pot", price: 9.53, image: plantPotImage1, link: "#" },
    {
      name: "Calathea Pinstripe",
      price: 32,
      image: calatheaPinstripeImage,
      link: "#",
    },
    { name: "Basket", price: 34, image: basketImage, link: "#" },
    { name: "Peace lily", price: 49.99, image: peaceLilyImage, link: "#" },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <a
        href="#"
        className="bg-green-500 text-white py-1 inline-block ml-2 absolute top-3 right-3"
        style={{
          backgroundColor: "#486138",
          width: "3rem",
          height: "5rem",
          lineHeight: "6rem",
          borderRadius: 0,
          textAlign: "center",
          verticalAlign: "bottom",
          bottom: 0,
          borderBottom: "2px solid white",
          textDecoration: "underline",
          textUnderlineOffset: "0.5rem",
        }}>
        Shop <br />
      </a>
      <div style={{ width: "100%" }} className="mx-auto">
        <h1 className="text-7xl font-italic text-center mb-4 my-8">Plant & Pot</h1>

        <p className="text-2xl text-center mb-8 text-attic">Take one of these babies home</p>
        <div className="flex items-center justify-center">
          <div className="container mx-auto max-w-screen-xl">
            <div className="flex flex-wrap">
              <div className="flex flex-wrap md:flex-nowrap">
                {plants.slice(0, 4).map((plant, index) => (
                  <div key={index} className="bg-white p-4 m-6 w-full hover:opacity-75 transition duration-300 ease-in-out transform hover:scale-110">
                    <img src={plant.image} alt={plant.name} className="w-full h-60 object-cover mb-2" />
                    <div className="flex items-center justify-between">
                      <a href={plant.link} className="text-xl  text-gray-800">
                        <span style={{ color: "#486138" }}>{plant.name}</span>
                      </a>
                      <p className="text-lg text-gray-600">${plant.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap md:flex-nowrap">
                {plants.slice(4).map((plant, index) => (
                  <div key={index} className="bg-white p-4 m-6 w-full hover:opacity-75 transition duration-300 ease-in-out transform hover:scale-110">
                    <img src={plant.image} alt={plant.name} className="w-full h-60 object-cover mb-2" />
                    <div className="flex items-center justify-between">
                      <a href={plant.link} className="text-xl  text-gray-800">
                        <span style={{ color: "#486138" }}>{plant.name}</span>
                      </a>
                      <p className="text-lg text-gray-600">${plant.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page8;

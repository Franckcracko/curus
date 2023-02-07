import { useState } from "react";

const CarruselProducto = () => {
  const stylesImg = 'transition-all bg-white object-cover object-center w-[90px] h-[70px] bg-gray-purple rounded-sm box-shadow';
  const stylesDirection = 'cursor-pointer grid place-content-center absolute top-[45%] mx-1 z-10 rounded-full w-9 h-9 bg-white hover:bg-[#D9D9D9]'
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/imagen_prueba.jpeg", alt: "Image 1" },
    { src: "/feminismo.png", alt: "Image 2" },
    { src: "/imagen_prueba.jpeg", alt: "Image 3" },
  ];

  const Image = ({ src, alt }) => {
    return <img className="w-[350px] h-[250px] object-fit " src={src} alt={alt} />;
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const handlePrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 2);
  };
  return (
    <section className="flex flex-col items-center justify-center">
      {/* example */}
      <div className="relative w-[350px] h-[250px]">
        {
          Image(images[currentIndex])
        }
        <button onClick={handlePrevious} className={` ${stylesDirection} left-0 scale-[-1]`}>
            <img width={'15px'} src="/arrow-direction.svg" alt="arrow-left" />
        </button>
        <button onClick={handleNext} className={`${stylesDirection} right-0`}>
            <img width={'15px'} src="/arrow-direction.svg" alt="arrow-right" />
        </button>
      </div>
      <div className="flex gap-4 my-3">
        {images.map((el, index) => (
          <img key={index} {...el} className={index === currentIndex ? `shadow-xl border p-1 ${stylesImg}` : stylesImg } />
        ))}
      </div>
    </section>
  )
}
export default CarruselProducto
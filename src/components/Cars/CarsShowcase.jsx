import { useState } from "react";
import { GalleryWithCarousel } from "./GalleryWithCarousel";

const CarsShowcase = () => {
  const cars = [
    {
      id: 1,
      name: 'BMW 5 Series',
      image: 'src/Images/BMW/bmw1.png',
      specs: ' Engineered for superior performance with a range of powerful engines and advanced technological features, delivering a refined driving experience with precision handling and luxury comfort',
      achievements: 'Recognized for setting benchmarks in the luxury sedan segment, boasting innovative technology, exceptional performance, and enduring popularity, making it a symbol of automotive excellence worldwide.',
      gallery: ['src/Images/BMW/bmw2.png', 'src/Images/BMW/bmw3.png', 'src/Images/BMW/bmw4.png','src/Images/BMW/bmw5.png','src/Images/BMW/bmw6.png','src/Images/BMW/bmw7.png','src/Images/BMW/bmw8.png','src/Images/BMW/bmw9.png'],
    },
    {
      id: 2,
      name: 'TATA Harrier',
      image: 'src/Images/TATA/tata3.jpg',
      specs: 'SUV featuring a powerful engine, advanced safety features, and spacious interior, offering a comfortable ride with impressive fuel efficiency.',
      achievements: 'Lauded for its robust build, striking design, and advanced features, earning accolades for redefining the SUV segment and offering a compelling blend of style, performance, and value.',
      gallery: ['src/Images/TATA/tata9.jpg','src/Images/TATA/tata8.jpg','src/Images/TATA/tata7.jpg','src/Images/TATA/tata6.jpg','src/Images/TATA/tata5.jpg','src/Images/TATA/tata4.jpg','src/Images/TATA/tata2.jpg','src/Images/TATA/tata1.jpg','src/Images/TATA/tata10.jpg'],
    },
    {
      id: 3,
      name: 'Mercedes-Benz G-Class',
      image: 'src/Images/Mercedes/gweg1.jpg',
      specs: 'Iconic off-road SUV featuring robust construction, luxurious interior, and powerful engine options, offering exceptional capability and opulent comfort for adventurous journeys.',
      achievements: 'Iconic for its rugged capability and luxurious appeal, the G-Wagon has achieved legendary status, blending off-road prowess with unparalleled comfort and style, setting the standard for luxury SUVs.',
      gallery: ['src/Images/Mercedes/gweg2.jpg','src/Images/Mercedes/gweg3.jpg','src/Images/Mercedes/gweg4.jpg','src/Images/Mercedes/gweg5.jpg','src/Images/Mercedes/gweg6.jpg','src/Images/Mercedes/gweg7.jpg','src/Images/Mercedes/gweg8.jpg','src/Images/Mercedes/gweg9.jpg'],
    },
  ];

  const [showGallery, setShowGallery] = useState(false);
  const [selectedCarGallery, setSelectedCarGallery] = useState([]);

  // Function to toggle the display of the gallery
  const handleToggleGallery = (gallery) => {
    setSelectedCarGallery(gallery); // Set the selected car's gallery
    setShowGallery(!showGallery); // Toggle the state to show/hide the gallery
  };
  
  return (
    <div className="container mx-auto px-4 py-8 bg-white mb-8">
      {showGallery ? (
        <div className="top-0 bottom-0 left-0 right-0 bg-gray-400 flex flex-col justify-center items-center">
          <div className="absolute inset-0 backdrop-filter" onClick={() => setShowGallery(false)}></div>
          <div>
            <GalleryWithCarousel gallery={selectedCarGallery} onClose={() => setShowGallery(false)} />
          </div>
        </div>
      ):(
        <>
          <h2 className="text-3xl font-semibold mb-8 text-center">Cars Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map(car => (
              <div key={car.id} className="bg-gray-300 rounded-lg shadow-md">
                <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-4 text-justify">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-700 mb-4">Specs. : {car.specs}</p>
                  <p className="text-gray-700 mb-4">Achievements : {car.achievements}</p>
                  <button hidden={car.gallery.length === 0} onClick={() => handleToggleGallery(car.gallery)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CarsShowcase;

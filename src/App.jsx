import { useState } from 'react';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/1.png';
import image6 from './assets/2.png';
import image7 from './assets/3.png';
import image8 from './assets/4.png';
import image9 from './assets/5.png';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([image1, image2, image3, image4, image5, image6, image7, image8]);

  const nextSlide = () => {
    
    const updatedImages = [...images.slice(1), images[0]];
    
    setCurrentIndex(prevIndex => (prevIndex + 1 >= updatedImages.length ? 0 : prevIndex + 1));
    
    setTimeout(() => {
      setImages(updatedImages);
    }, ); 
  };

  return (
    <div className="flex items-center justify-center h-screen " onClick={nextSlide}>
      <div className="w-full max-w-4xl relative "> 
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className={`overflow-hidden transition-transform duration-500 ease-in-out transform ${index === currentIndex ? '-translate-x-0' : 'translate-x-full'} ml-16`} style={{ width: '200px', height: index >= images.length - 2 ? '50px' : '100px' }}>
              <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        <img src={image9} width={70} height={70} className="absolute right-[-30px] top-[35px]"/>
        <img src={image9} width={70} height={70} className="absolute right-[90px] top-[35px]"/>
      </div>
    </div>
  );
}

export default App;

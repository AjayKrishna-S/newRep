import React, { useEffect, useState } from 'react';
// import './Carousel.css';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';


const Carousel = () => {

    const images = [img1,img2,img3];
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const interval = 3000;
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 
    
        return () => clearInterval(intervalId);
      }, []); 



  return (
    <div className="carousel">
        <img src={images[currentImgIndex]} alt={`Image ${currentImgIndex}`} />
    </div>
  )
}

export default Carousel
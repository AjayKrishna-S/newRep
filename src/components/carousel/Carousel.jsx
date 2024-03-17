import React, { useEffect, useState } from 'react';
import './carousel.css';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';


const Carousel = () => {

    const images = [img1,img2,img3];
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 
    
        return () => clearInterval(intervalId);
      }, []); 

  return (
    <div className="carousel">
        <div className='images'>
          <img src={images[currentImgIndex]} alt={`Image ${currentImgIndex}`} />

          <div className='dots'>
            <span className='dot' 
              style={{backgroundColor: (currentImgIndex === 0) ? "gray" : "lightgray"}}></span>
            <span className='dot' 
              style={{backgroundColor: (currentImgIndex === 1) ? "gray" : "lightgray"}}></span>
            <span className='dot' 
              style={{backgroundColor: (currentImgIndex === 2) ? "gray" : "lightgray"}}></span>

          </div>
        </div>
    </div>
  )
}

export default Carousel
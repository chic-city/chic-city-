import React from 'react'

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url:
      "https://media.gettyimages.com/id/660629502/fr/photo/homme.jpg?s=612x612&w=gi&k=20&c=Y24L-lvWsf_tOZKZxXKngiwOjmu5WpfBUsVOj0MPjd0="
  },
  {
    url:
      "https://i.pinimg.com/originals/cc/d8/ca/ccd8cac00a7d96df3133f576225a431f.jpg"
  },
  {
    url:
      "https://i.pinimg.com/originals/96/10/38/961038f7f8037ece6d48449c4b66675a.jpg"
  }
];
const carousel = () => {
 
    return (
        <div className="Appp">
          
          <SimpleImageSlider
            width={1700}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
            loop={true}
             autoPlay={true}
          />
        </div>
    
  )
}

export default carousel
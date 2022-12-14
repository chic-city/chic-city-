import React from 'react'

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url:
      "https://res.cloudinary.com/dn9qfvg2p/image/upload/q_100/v1671039093/Mode-homme-automne-hiver-1024x683_dbvvwe.jpg"
  },
  {
    url:
      "https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,h_1500,q_100/v1671027251/tenue-classe-pour-homme_qvxxka.jpg"
  },
  {
    url:
      "https://i.pinimg.com/originals/96/10/38/961038f7f8037ece6d48449c4b66675a.jpg"
  },
  {url:"https://res.cloudinary.com/dn9qfvg2p/image/upload/q_100/v1671039200/5-idees-looks-et-conseils-pour-une-tenue-classe-pour-homme_t58yxq.jpg"}
];
const carousel = () => {
 
    return (
        <div className="Appp">
          
          <SimpleImageSlider
            width={1930}
            height={950}
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
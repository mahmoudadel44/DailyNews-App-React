import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const showGallery = ({ gallery }) => {
  if (gallery) {
      return (
          <div className="col-md-10 m-auto">
        <Slider {...settings} className="text-center">
            {gallery.map(item=>{
                return(
                    <div className="all">
                     <Link to={`/galleries/${item.id}`} key={item.id} className="slider-item">
                    <h3 className="artistName">{item.artist}</h3>
                    </Link>
                   <div className="image">
                   <img src={`/images/galleries/${item.images[0].img}`}  
                   style={{width:'100%'}}/>
                   </div>
                   </div>

                )
            })}
            
        </Slider>
     
        </div>
      )
  }
}

const gallery = props => {
  //  console.log('galleries',props)
  return (
    <div>
      <h3 className="otherGalleriesHeader m-3">Awesome Gallery</h3>
      <div className="container-fluid">
        <div className="row m-auto">
            {showGallery(props)}
            </div>
       </div>
     </div>
  );
};

export default gallery;

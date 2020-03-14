import React from "react";
import {Link} from 'react-router-dom'
const allLatest = ({ latest }) => {
    console.log("latest in alllatest",latest)
  if (latest) {
    return latest.map(item => {
      return(
       <div className="item col-md-4" key={item.id} >
    <Link to={`/news/${item.id}`}
    >
        {/* <div className="img_cover" style={{background:`url(/images/articles/${item.img})`,backgroundSize:'cover'}}> */}
        {/* </div> */}
        <img src={`/images/articles/${item.img}`} className="myImage"/>
        <div className="description text-center">
      <span>{item.category}</span>
      <div className="title">{item.title}</div>
        </div>
    </Link>       
           
           </div>
      )    
});
  }
};

const LatsetNews = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        {allLatest(props)}
        </div>
    </div>
  );
};

export default LatsetNews;

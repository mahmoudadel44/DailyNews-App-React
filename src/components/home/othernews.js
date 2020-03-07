import React from 'react'
import {Link} from 'react-router-dom'

const showOtherNews=({other})=>{
if(other){
    return other.map(item=>{
        return(
            <div className="media m-3" style={{width:'100%'}}  key={item.id}>
            <img className="mr-3" src={`/images/articles/${item.img}`} alt="Generic placeholder image" style={{borderRadius:'2px'}}/>
            <div className="media-body">

              <p className="lead">{item.title}</p>
            <Link to={`/news/${item.id}`}>
            <button className=" btn btn-success  right mt-5 mb-5"
            style={{width:'130px',height:'45px',fontFamily:'cursive',fontWeight:'bold',fontSize:'20px'}}>
                {item.category}</button>
            </Link>
            <div className="icons">
        <span style={{color:'#03A9F4'}}><i className="fa fa-thumbs-down fa-2x"></i>
        {item.views}</span>
        <span style={{color:'#03A9F4'}}><i className="fa fa-thumbs-up fa-2x"></i>
        {item.likes[0]}</span>
            </div>
            </div>
          </div>
        )
    })
}
}

const otherNews=(props)=>{
    // console.log("otherNews",props)
return (
    <div className="all mt-5">
        <h3 className="otherNewsHeader ml-3">Other News</h3>
    <div className="container-fluid">
        <div className="row">
{showOtherNews(props)}
        </div>
    </div>
    </div>
)
}

export default otherNews;
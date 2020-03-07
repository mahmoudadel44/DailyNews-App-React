import React from "react";
import { Link } from "react-router-dom";
const showSelectedNews = ({ select }) => {
  if (select) {
    return select.map(item => {
      return (
        <div className="card m-auto">
          <div className="card-body">
            <div className="icons">
              <span style={{ color: "#03A9F4", margin: "140px" }}>
                <i className="fa fa-eye fa-2x m-2"></i>
                {item.views}
              </span>{" "}
              <span style={{ color: "#03A9F4" }}>
                <i className="fa fa-thumbs-up fa-2x m-2"></i>
                {item.likes[0]}
              </span>
              <span style={{ color: "#03A9F4", margin: "140px" }}>
                <i className="fa fa-thumbs-down fa-2x m-2"></i>
                {item.likes[1]}
              </span>
            </div>
            <h3 className="card-title m-3" style={{ color: "gray" }}>
              {item.title}
            </h3>
            <span
              className="card-text m-2"
              style={{
                color: "#FFF",
                padding: "7px 22px",
                backgroundColor: "rgba(33, 136, 56, 0.73)",
                borderRadius: "3px",
                fontFamily: "cursive",
                fontSize: "25px"
              }}
            >
              <span style={{ color: "gray" }}>Article By:</span>
              {item.author}
            </span>
          </div>
          <img
            className="card-img-bottom"
            src={`/images/articles/${item.img}`}
            alt="Card image cap"
          />
          <h2
            className="card-text text-center"
            style={{
              color: "#FFF",
              padding: "7px 22px",
              backgroundColor: "rgba(33, 136, 56, 0.73)",
              borderRadius: "3px",
              fontFamily: "cursive",
              fontSize: "25px"
            }}
          >
            {item.category}
          </h2>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2
              className="card-text text-center"
              style={{
                color: "#FFF",
                padding: "7px 22px",
                backgroundColor: "rgba(33, 136, 56, 0.73)",
                borderRadius: "3px",
                fontFamily: "cursive",
                fontSize: "25px"
              }}
            >
              Go To Home
            </h2>
          </Link>
        </div>
      );
    });
  }
};
const selectednews = props => {
  return (
    <div className="container">
      <div className="row">{showSelectedNews(props)}</div>
    </div>
  );
};

export default selectednews;

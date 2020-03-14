import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedGallery, clearSelectedGallery } from "../actions/index";
import { bindActionCreators } from "redux";
import Slider from "react-slick";
import Counter from './LikesContainer'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class GalleryItem extends Component {
  componentDidMount() {
    this.props.selectedGallery(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.clearSelectedGallery();
  }

  renderSlider = ({ selected }) => {
    if (selected) {
      const gallery = selected[0];
      return (
        <div>
          <h3 className="text-center mb-3">{gallery.artist}</h3>
          <Slider {...settings} className="mb-5">
            {gallery.images.map((item, index) => {
              return (
                <div>
                  <div key={index} className="img_desc">
                    <img
                      src={`/images/galleries/${item.img}`}
                      className="img-thumbnail m-auto"
                    />
                  </div>
                  <div className="description"
                  style={{
                    maxWidth:'55%',
                    margin: 'auto',
                    fontSize: '23px',
                    padding: '7px 22px',
                    color: '#fff',
                    backgroundColor: '#218838de',
                    borderRadius: '3px',
                    fontFamily: 'cursive'
                  }}
                  >
                  <span className=" text-center ml-5" style={{}}>
                    {item.desc}
                  </span>
                </div>
                </div>
              );
            })}
          </Slider>
          <Counter
                 type='HANDLE_LIKES_GALLERIES'
                 section="galleries"
                 articleId={gallery.id}
                  likes={gallery.likes[0]}
                 dislikes={gallery.likes[1]}
                 />
        </div>
      );
    }
  };

  render() {
    const item = this.props.gallery;
    return <div>{this.renderSlider(item)}</div>;
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectedGallery, clearSelectedGallery },
    dispatch
  );
}
function mapStateToProps(state) {
  console.log("galleryData", state);
  return {
    gallery: state.gallery
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);

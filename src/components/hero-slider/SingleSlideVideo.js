import PropTypes from "prop-types";
import React from "react";

const SingleSlideVideo = ({ data, sliderClassName }) => {
  return (
    <div
      className={`single-slider slider-height-1 ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
        <div className="container">
            <div className="row">
                <video 
                    className="animated img-fluid"
                    src={process.env.PUBLIC_URL + data.video} 
                    preload="auto" 
                    controls 
                    autoplay
                    loop="loop">
                </video>

            </div>
        </div>
    </div>
  );
};

SingleSlideVideo.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default SingleSlideVideo;

import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import classnames from "classnames";
import Thumbnail from "./Thumbnail";
import ImageView from "./ImageView";
import "./ImagePreview.scss";

export default class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.thumbnailRef = React.createRef();
    this.isSwiping = false;
    this.state = {
      cIndex: props.cIndex,
      loading: false
    };
  }

  onPrev = () => {
    if (this.state.cIndex === 0) {
      return;
    }
    const prev = this.state.cIndex - 1;
    this.setIndex(prev);
  };

  onNext = () => {
    if (this.state.cIndex === this.props.imgs.length - 1) {
      return;
    }
    const next = this.state.cIndex + 1;
    this.setIndex(next);
  };

  setIndex = index => {
    if (index !== this.state.cIndex && !this.isSwiping) {
      this.isSwiping = true;
      this.slider.current.slickGoTo(index);
      this.setState({
        cIndex: index
      });
    }
  };

  handleAfterChange = currentSlide => {
    const { showThumbnail, imgs } = this.props;
    this.isSwiping = false;
    if (showThumbnail && imgs.length >= 5) {
      this.thumbnailRef.current.scrollLeft = Math.floor(currentSlide / 4) * 200;
    }
  };

  render() {
    const {
      imgs,
      width,
      height,
      showThumbnail,
      showClose,
      onClose
    } = this.props;
    const { cIndex } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: false,
      arrows: false,
      afterChange: currentSlide => {
        this.handleAfterChange(currentSlide);
      }
    };
    return (
      <div
        className="image-previewer-container"
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
      >
        {showClose && (
          <div className="icon-close" onClick={onClose}>
            <i />
          </div>
        )}
        <Slider ref={this.slider} {...settings} style={{ width: "100%" }}>
          {imgs.map((img, index) => {
            return (
              <ImageView img={img} key={img} width={width} height={height} />
            );
          })}
        </Slider>
        <div className="tools">
          {imgs.length > 1 && (
            <div
              onClick={this.onPrev}
              className={classnames({
                left: true,
                leftCursor: cIndex > 0
              })}
            />
          )}
          {imgs.length > 1 && (
            <div
              onClick={this.onNext}
              className={classnames({
                right: true,
                rightCursor: cIndex < imgs.length - 1
              })}
            />
          )}
        </div>
        {showThumbnail && (
          <Thumbnail
            imgs={imgs}
            cIndex={cIndex}
            setIndex={this.setIndex}
            ref={this.thumbnailRef}
          />
        )}
      </div>
    );
  }
}

ImagePreview.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showThumbnail: PropTypes.bool,
  showClose: PropTypes.bool,
  cIndex: PropTypes.number
};

ImagePreview.defaultProps = {
  width: 800,
  height: 500,
  showThumbnail: true,
  showClose: true,
  cIndex: 0
};

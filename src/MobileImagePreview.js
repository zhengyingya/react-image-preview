import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Thumbnail from "./Thumbnail";
import ImageView from "./ImageView";
import "./ImagePreview.scss";

export default class MobileImagePreview extends React.Component {
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

  componentWillMount() {
    // this.set = setInterval(this.check, 40);
  }

  dealWidth = w => {
    if (typeof w === "string" && w.indexOf("%") > 0) {
      return document.documentElement.clientWidth * w;
    }
    return `${w}px`;
  };

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

    if (currentSlide !== this.state.cIndex) {
      this.setState({
        cIndex: currentSlide
      });
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
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: true,
      arrows: false,
      afterChange: currentSlide => {
        this.handleAfterChange(currentSlide);
      }
    };
    return (
      <div
        className="image-previewer-container"
        style={{
          width: "100vw",
          height: showThumbnail ? "88vh" : "100vh"
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
        {showThumbnail && (
          <Thumbnail
            imgs={imgs}
            cIndex={cIndex}
            setIndex={this.setIndex}
            isMobile
            ref={this.thumbnailRef}
          />
        )}
      </div>
    );
  }
}

MobileImagePreview.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showThumbnail: PropTypes.bool,
  showClose: PropTypes.bool,
  cIndex: PropTypes.number
};

MobileImagePreview.defaultProps = {
  width: "100%",
  height: "60%",
  showThumbnail: true,
  showClose: true,
  cIndex: 0
};

import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import classnames from "classnames";
import { dealWH } from "./utils";
import "./ImagePreview.scss";

export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.set = setInterval(this.check, 40);
  }

  check = () => {
    const img = this.imgRef.current;
    if (img.width > 0 || img.height > 0) {
      this.setState({
        imgWidth: img.width,
        imgHeight: img.height
      });
      clearInterval(this.set);
    }
  };

  onImgLoad = () => {
    const img = this.imgRef.current;
    if (img.width > 0 || img.height > 0) {
      this.setState({
        imgWidth: img.width,
        imgHeight: img.height
      });
      clearInterval(this.set);
    }
  };

  calcImg() {
    // 图片预览背景的宽高
    const { imgWidth, imgHeight } = this.state;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    let { width, height } = this.props;
    if (typeof width == "string" && width.indexOf("%") > 0) {
      width = (clientWidth * Number(width.replace("%", ""))) / 100;
    }

    if (typeof height == "string" && height.indexOf("%") > 0) {
      height = (clientHeight * Number(height.replace("%", ""))) / 100;
    }

    width = width > clientWidth ? clientWidth : width;
    height = height > clientHeight ? clientHeight : height;
    if (imgWidth / imgHeight > width / height) {
      return [width, "auto"];
    }
    return ["auto", height];
  }

  render() {
    const { img } = this.props;
    const [imgW, imgH] = this.calcImg();

    return (
      <div className="picture-wrapper">
        <img
          ref={this.imgRef}
          className={classnames({
            picture: true
          })}
          src={img}
          alt={img}
          style={{
            opacity: this.state.loading ? 0 : 1,
            transition: "0.3s opacity",
            width: imgW,
            height: imgH
          }}
          onLoad={this.onImgLoad}
        />
      </div>
    );
  }
}

ImageView.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

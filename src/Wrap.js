import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ImagePreview from "./ImagePreview";
import MobileImagePreview from "./MobileImagePreview";
import { checkMobile } from "./utils";

const Wrap = props => {
  const { visible } = props;
  const isMobile = props.isMobile || checkMobile();

  if (!visible) {
    return null;
  }
  return (
    <Fragment>
      {isMobile ? (
        <MobileImagePreview {...props} />
      ) : (
        <ImagePreview {...props} />
      )}
    </Fragment>
  );
};

Wrap.propTypes = {
  visible: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool
};

export default Wrap;

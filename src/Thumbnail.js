import React, { Fragment } from "react";
import classnames from "classnames";
import "./ImagePreview.scss";

export default React.forwardRef(({ imgs, cIndex, setIndex, isMobile }, ref) => {
  return (
    <Fragment>
      {imgs.length > 1 && (
        <div
          className={
            isMobile
              ? "mobile-image-preview-list-wrap"
              : "image-preview-list-wrap"
          }
        >
          <div className="listMask" />
          <div className="list" ref={ref}>
            {imgs.map((item, index) => (
              <div
                className={classnames({
                  wrapper: true,
                  active: index === cIndex
                })}
                key={item}
              >
                <div
                  className={classnames({
                    thumbnail: true
                  })}
                  style={{
                    backgroundImage: `url(${item})`
                  }}
                  onClick={() => {
                    setIndex(index);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
});

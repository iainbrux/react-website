import React from "react";
import goForward from "../../img/forward.svg";

const FindOutMore = () => {
  return (
    <div className="more-info-btn">
      <div className="more-info">
        <strong>find out more</strong>
        <img src={goForward} alt="go forward marker" className="go-forward" />
      </div>
    </div>
  );
};

export default FindOutMore;
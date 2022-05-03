import React from "react";

import spinner from "../../assets/image/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Loader;

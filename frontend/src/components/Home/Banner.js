import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
          <div class="input-group">
        <div>
          <span id="get-part">A Place to get </span>
  {/* <div id="search-autocomplete" class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div> */}
<input type="text" />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

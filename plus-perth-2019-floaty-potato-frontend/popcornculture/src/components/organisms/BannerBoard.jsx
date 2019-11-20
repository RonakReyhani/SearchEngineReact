import React from 'react';
import SearchBoard from "./molecules/SearchBoard";


const BannerBoard = () => {
  return (
    <>
      <div
        class="BannerImage"
        style={{
          backgroundImage: `url(/static/${banner}.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div class="SearchBoard">
          <SearchBoard />
          <div class="color-divider"></div>
        </div>
      </div>
    </>
  );
};

export default BannerBoard;

import React from 'react';
import MainTemplate from "../templates/MainTemplate";
import BannerBoard from "../organisms/BannerBoard";
import FilterBoard from "../organisms/FilterBoard";
import MovieGrid from "../organisms/MovieGrid";

const MainPage = () =>{
    return(
        <div>
            <MainTemplate/>
            <BannerBoard/>
            <FilterBoard/>
            <MovieGrid/>
        </div>
        

    )
}

export default MainPage;
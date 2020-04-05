import React from 'react';


const SearchRobos = ({searchRobo}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <input type="search" onChange={searchRobo}/>
        </div>
    )
}

export default SearchRobos;
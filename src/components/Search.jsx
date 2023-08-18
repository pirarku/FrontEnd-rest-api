import './Search.css'
import { useState } from 'react';

function Search ({search, toggle, filter, region, regionText}) {
    
    return (
        <div className='search-container'>
            <div className='searchbox'>
               <ion-icon name="search-outline"></ion-icon>
                <input onChange={search} className="searchInput" type="text" placeholder="Search for a country"/>
            </div>

            <div id="filter">
                <div className='select' onClick={toggle}>
                    {
                        regionText === '' || regionText === 'All'
                        ? <p className='filterText'>Filter by Region</p> 
                        : <p className='filterText'>{regionText}</p> 
                    }
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                {
                    filter 
                    ? (<div className="item-container" onClick={region}>
                            <p className="items" data-val='All'>All</p>
                            <p className="items" data-val='Africa'>Africa</p>
                            <p className="items" data-val='Americas'>Americas</p>
                            <p className="items" data-val='Antarctic'>Antarctic</p>
                            <p className="items" data-val='Asia'>Asia</p>
                            <p className="items" data-val='Europe'>Europe</p>
                            <p className="items" data-val='Oceania'>Oceania</p>
                    </div>)
                    : <></>
                }
            </div>
            
            {/* <select name="filter" id="filter">
                <option selected disabled hidden>Filter by Regions</option>
                <option className='option'>Africa</option>
                <option>Americas</option>
                <option>Antartica</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select> */}
        </div>
    )
}

export default Search;
import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className = "pa3">
            <input 
                className = "f4 ba b--green pa3 bg-lightest-blue" 
                type = "search" 
                placeholder = "Search Robots"
                onChange = {searchChange} 
            />
        </div>
    );
}

export default SearchBox;
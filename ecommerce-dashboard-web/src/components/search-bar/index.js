import React from "react";
import { SearchBarContainer } from "./styles";

/**
 * Search bar component
 * @param {string} placeholder - the placeholder of the search bar 
 * @param {Object} onSearchValueChange - callback function for sending data when search bar value changed
 */

const SearchBarComponent = ({
    placeholder,
    onSearchValueChange = () => { }
}) => {

    // debounce function
    const debounce = (func, delay) => {
        let timer;
        
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    // sends search bar value to parent with 1 second delay
    const handleValueChange = debounce((event) => {
        onSearchValueChange(event.target.value);
    }, 1000);

    return (
        <SearchBarContainer>
            <i className="fa fa-search"></i>
            <input 
                className="search-bar"
                type='text' 
                onChange={(event) => handleValueChange(event)}
                placeholder={placeholder} 
            />
        </SearchBarContainer>
    );
};

export default SearchBarComponent;
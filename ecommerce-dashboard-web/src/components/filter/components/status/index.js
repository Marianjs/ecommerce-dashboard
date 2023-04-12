import React from "react";
import { FilterStatusContainer } from "./styles";
import { filterStatusDropdownItems } from "./const-data";
import DropdownComponent from "../../../../containers/main/components/topbar/components/dropdown";

/**
 * filter status component for the filters container
 * @param {func} onItemClick - sends the picked item to parent
 */

const FilterStatusComponent = ({
    onItemClick
}) => {

    // for opening and closing the dropdown menu
    const [dropdownMenuActive, setDropdownMenuActive] = React.useState(false);

    // handles the status dropdown menu clicked items
    const handleItemClick = (value) => {

        // for closing the menu when item is clicked
        setDropdownMenuActive(prevState => !prevState)

        // send the picked value to parent
        onItemClick(value);
    } 

    return (
        <FilterStatusContainer>
            <div 
                className="arrow-down"
                onClick={() => setDropdownMenuActive(prevState => !prevState)}
            >
                <div className="filter-text">Choose Status</div>
                <div className="filter-icon">
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>
            {
                dropdownMenuActive &&
                <div className="dropdown">
                    <div className="dropdown-content">                
                        {filterStatusDropdownItems.map(item => (
                            <DropdownComponent 
                                key={item.id}
                                text={item.text}
                                callback={handleItemClick}
                            />
                        ))}   
                    </div>
                    <div className="catch-arrow"></div>
                </div> 
            }        
        </FilterStatusContainer>
    );  
};

export default FilterStatusComponent;
import React from "react";
import { FilterStatusContainer } from "./styles";
import { filterStatusDropdownItems } from "./const-data";
import DropdownComponent from "../../../../containers/main/components/topbar/components/dropdown";

/**
 * filter status component for the filters container
 * @param {func} onItemClick - sends the picked item to parent
 * @param {func} onResetStatusFilter - notify parent table to reset the delete the status filter
 */

const FilterStatusComponent = ({
    onItemClick,
    onResetStatusFilter = () => {}
}) => {

    // for opening and closing the dropdown menu
    const [dropdownMenuActive, setDropdownMenuActive] = React.useState(false);

    // state container for dropdown status filter title
    const [activeDropdownMenuText, setActiveDropdownMenuText] = React.useState("Choose Status");

    // handles the status dropdown menu clicked items
    const handleItemClick = (value) => {

        // for closing the menu when item is clicked
        setDropdownMenuActive(prevState => !prevState)

        // send the picked value to parent
        onItemClick(value);

        // set the active dropdown item value
        setActiveDropdownMenuText(value);
    } 

    // delete status filter handler
    const handleDeleteStatusFilter = () => {
        // callback to notify parent
        onResetStatusFilter(); 

        // close the dropdown menu
        setDropdownMenuActive(prevState => !prevState)

        // set the active dropdown menu title to default
        setActiveDropdownMenuText("Choose Status");
    };

    return (
        <FilterStatusContainer>
            <div 
                className="arrow-down"
                onClick={() => setDropdownMenuActive(prevState => !prevState)}
            >
                <div className="filter-text">{activeDropdownMenuText}</div>
                <div className="filter-icon">
                    <i className="fa-solid fa-caret-down"></i>
                    <i className="fa fa-window-close" onClick={handleDeleteStatusFilter}></i>
                </div>
            </div>
            {
                dropdownMenuActive &&
                <div className="dropdown">
                    <div className="dropdown-content">                
                        {filterStatusDropdownItems.map((item, index) => (
                            <DropdownComponent 
                                key={index}
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
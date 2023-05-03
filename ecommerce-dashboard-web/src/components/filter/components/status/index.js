import React from "react";
import { FilterStatusContainer } from "./styles";
import { filterStatusDropdownItems } from "./const-data";
import DropdownComponent from "../../../../containers/main/components/topbar/components/dropdown";

/**
 * filter status component for the filters container
 * @param {func} onItemClick - sends the picked item to parent
 * @param {func} onResetStatusFilter - notify parent table to reset the delete the status filter
 * @param {string} defaultDropdownText - the default text to be displayed on the dropdown filter
 * @param {Array} data - the data array that contains the dropdown items
 */

const FilterStatusComponent = ({
    data,
    onItemClick,
    onResetStatusFilter = () => {},
    defaultDropdownText = "Choose Status"
}) => {

    // for opening and closing the dropdown menu
    const [dropdownMenuActive, setDropdownMenuActive] = React.useState(false);

    // state container for dropdown status filter title
    const [activeDropdownMenuText, setActiveDropdownMenuText] = React.useState(defaultDropdownText);

    // handles the status dropdown menu clicked items
    const handleItemClick = (text, id) => {

        // for closing the menu when item is clicked
        setDropdownMenuActive(prevState => !prevState)

        // send the picked value to parent
        onItemClick(text, id);

        // set the active dropdown item value
        setActiveDropdownMenuText(text);
    } 

    // delete status filter handler
    const handleDeleteStatusFilter = () => {
        // callback to notify parent
        onResetStatusFilter(); 

        // close the dropdown menu
        setDropdownMenuActive(prevState => !prevState)

        // set the active dropdown menu title to default
        setActiveDropdownMenuText(defaultDropdownText);
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
                        {data.map((item, index) => (
                            <DropdownComponent 
                                key={index}
                                id={item.id}
                                text={item.text}
                                callback={(text, id) => handleItemClick(text, id)}
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
import React from "react";
import { FilterContainer } from "./styles";
import FilterStatusComponent from "./components/status";
import { filterStatusDropdownItems } from "./components/status/const-data";

/**
 * Reusable filter component
 * It renders various filters for tables or other data collections
 * @param {Array} filters - array that stores the filters to be displayed
 * @param {func} onItemClick - sends the picked item from dropdown menu to parent
 * @param {func} onResetStatusFilter - notify parent table to reset the delete the status filter
 * @param {string} defaultDropdownText - the default text to be displayed on the dropdown filter
 * @param {Array} dropdownFilterData - the data array that contains the dropdown items
 */

const FilterComponent = ({
    filters,
    onItemClick,
    onResetStatusFilter = () => {},
    defaultDropdownText,
    dropdownFilterData
}) => {

    // handle the return content
    const renderContent = () => {
        
        return filters.map((filter, index) => {
            switch (filter.component) {
                case 'status-dropdown':
                    return <FilterStatusComponent 
                        key={index} 
                        data={dropdownFilterData}
                        onItemClick={onItemClick} 
                        onResetStatusFilter={onResetStatusFilter}
                        defaultDropdownText={defaultDropdownText}
                    />
            }
        })
    };

    return (
        <FilterContainer>
            {renderContent()}
        </FilterContainer>
    );
};

export default FilterComponent;
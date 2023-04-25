import React from "react";
import { FilterContainer } from "./styles";
import FilterStatusComponent from "./components/status";

/**
 * Reusable filter component
 * It renders various filters for tables or other data collections
 * @param {Array} filters - array that stores the filters to be displayed
 * @param {func} onItemClick - sends the picked item from dropdown menu to parent
 * @param {func} onResetStatusFilter - notify parent table to reset the delete the status filter
 */

const FilterComponent = ({
    filters,
    onItemClick,
    onResetStatusFilter = () => {}
}) => {

    // handle the return content
    const renderContent = () => {
        
        return filters.map((filter, index) => {
            switch (filter.component) {
                case 'status-dropdown':
                    return <FilterStatusComponent 
                        key={index} 
                        onItemClick={onItemClick} 
                        onResetStatusFilter={onResetStatusFilter}
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
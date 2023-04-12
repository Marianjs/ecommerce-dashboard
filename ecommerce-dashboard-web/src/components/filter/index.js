import React from "react";
import { FilterContainer } from "./styles";
import FilterStatusComponent from "./components/status";

/**
 * Reusable filter component
 * It renders various filters for tables or other data collections
 * @param {Array} filters - array that stores the filters to be displayed
 * @param {func} onItemClick - sends the picked item from dropdown menu to parent
 */

const FilterComponent = ({
    filters,
    onItemClick
}) => {

    // handle the return content
    const renderContent = () => {
        
        return filters.map((filter, index) => {
            switch (filter.component) {
                case 'status-dropdown':
                    return <FilterStatusComponent key={index} onItemClick={onItemClick} />
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
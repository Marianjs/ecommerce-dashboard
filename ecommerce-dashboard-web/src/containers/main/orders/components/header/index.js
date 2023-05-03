import React from "react";
import { OrdersHeaderContainer } from "./styles";
import SearchBarComponent from "../../../../../components/search-bar";
import FilterComponent from "../../../../../components/filter";
import { ordersDetailsFilters } from "../../../../../components/filter/const-data";
import { filterStatusDropdownItems } from "../../../../../components/filter/components/status/const-data";

/**
 * Orders header component 
 * Used to render header orders card component
 * @param {Object} onSearchValueChange - callback function for sending data when search bar value changed
 * @param {func} onItemClick - sends the picked item from dropdown menu to parent
 */

const OrdersHeaderComponent = ({
    onSearchValueChange,
    onItemClick,
    onResetStatusFilter = () => {}
}) => {

    return (
        <OrdersHeaderContainer>
            <div className="header-title">Orders Details</div>
            <SearchBarComponent 
                placeholder="Search by customer name" 
                onSearchValueChange={onSearchValueChange}
            />
            <FilterComponent 
                filters={ordersDetailsFilters} 
                onItemClick={onItemClick} 
                onResetStatusFilter={onResetStatusFilter}
                dropdownFilterData={filterStatusDropdownItems}
            />
        </OrdersHeaderContainer>
    );
};

export default OrdersHeaderComponent;
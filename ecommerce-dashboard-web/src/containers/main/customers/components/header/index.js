import React from "react";
import { CustomersHeaderContainer, OrdersHeaderContainer } from "./styles";
import SearchBarComponent from "../../../../../components/search-bar";

/**
 * Customers header component 
 * Used to render header customers card component
 * @param {Object} onSearchValueChange - callback function for sending data when search bar value changed
 */

const CustomersHeaderComponent = ({
    onSearchValueChange
}) => {

    return (
        <CustomersHeaderContainer>
            <div className="header-title">Customers Details</div>
            <SearchBarComponent 
                placeholder="Search by name" 
                onSearchValueChange={onSearchValueChange}
            />
        </CustomersHeaderContainer>
    );
};

export default CustomersHeaderComponent;
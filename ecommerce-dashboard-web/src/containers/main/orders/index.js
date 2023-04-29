import React from "react";
import { OrdersContainer } from "./styles";
import { getOrdersTable, selectOrdersCount, selectOrdersLoading } from "./selectors";
import { actionGetOrders } from "./actions";
import TableComponent from "../components/table";
import { connect } from "react-redux";

/**
 * Orders details table component
 * @param {string} searchValueData - the search bar value used for filtering the data from table
 */

const OrdersComponent = ({
    searchValueData,
    statusDropdownValue,
    orders,
    ordersCount,
    ordersLoading,
    getOrders
}) => {

    // stores the page index and page size of table pagination
    const [pageOptions, setPageOptions] = React.useState({
        pageIndex: 1,
        pageSize: 10
    });

    // api request when component is rendered, page options or search value changed
    React.useEffect(() => {
        if (pageOptions.pageIndex && pageOptions.pageSize) {
            getOrders({
                queryParams: {
                    pageIndex: pageOptions.pageIndex,
                    pageSize: pageOptions.pageSize,
                    searchText: searchValueData,
                    statusFilter: statusDropdownValue
                }
            });
        }
    }, [
        pageOptions.pageIndex, 
        pageOptions.pageSize, 
        searchValueData, 
        statusDropdownValue
    ])

    // update the pageOptions so a new api request is done when a page table is changed
    const lazyLoadData = React.useCallback((pageIndex, pageSize) => {
        setPageOptions(prevState => ({
            ...prevState,
            pageIndex: pageIndex,
            pageSize: pageSize
        }))
    }, [])

    return (
        <OrdersContainer>
            <TableComponent 
                data={orders.data}
                dataCount={ordersCount}
                columns={orders.columns}
                pageIndex={pageOptions.pageIndex}
                pageSize={pageOptions.pageSize}
                pagination
                lazyLoadData={lazyLoadData}
                isDataLoading={ordersLoading}
                isOrdersTable
            />
        </OrdersContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        orders: getOrdersTable(state),
        ordersCount: selectOrdersCount(state),
        ordersLoading: selectOrdersLoading(state)
    };
};
    
const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: payload => dispatch(actionGetOrders(payload))
    };
};
    
export default connect(
    mapStateToProps,
    mapDispatchToProps)
(OrdersComponent);
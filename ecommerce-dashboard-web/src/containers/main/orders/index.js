import React from "react";
import { OrdersContainer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getOrdersTable, selectOrdersCount, selectOrdersLoading } from "./selectors";
import { actionGetOrders } from "./actions";
import TableComponent from "../components/table";

/**
 * Orders details table component
 * @param {string} searchValueData - the search bar value used for filtering the data from table
 */

const OrdersComponent = ({
    searchValueData,
    statusDropdownValue
}) => {

    // stores the page index and page size of table pagination
    const [pageOptions, setPageOptions] = React.useState({});

    // orders selectors
    const orders = useSelector(getOrdersTable);
    const ordersCount = useSelector(selectOrdersCount);
    const ordersLoading = useSelector(selectOrdersLoading);

    const dispatch = useDispatch();

    // make the api request when component is rendered, page options or search value changed
    React.useEffect(() => {
        if (pageOptions.pageIndex && pageOptions.pageSize) {
            dispatch(actionGetOrders({
                queryParams: {
                    pageIndex: pageOptions.pageIndex,
                    pageSize: pageOptions.pageSize,
                    searchText: searchValueData,
                    statusFilter: statusDropdownValue
                }
            }));
        }
    }, [
        dispatch, 
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
            />
        </OrdersContainer>
    );
};

export default OrdersComponent;
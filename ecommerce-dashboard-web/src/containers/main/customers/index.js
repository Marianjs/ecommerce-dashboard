import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomersTable, selectCustomersCount, selectCustomersLoading } from "./selectors";
import TableComponent from "../components/table";
import { actionEditCustomer, actionGetCustomers } from "./actions";
import { CustomersContainer } from "./styles";
import ModalComponent from "../../../components/modal";
import FormComponent from "../../../components/form";

/**
 * Customers details table component
 * @param {string} searchValueData - the search bar value used for filtering the data from table
 */

const CustomersComponent = ({
    searchValueData
}) => {

    // stores the page index and page size of table pagination
    const [pageOptions, setPageOptions] = React.useState({});

    // stores the updated array of customers data
    const [parsedColumns, setParsedColumns] = React.useState([]);

    // stores current row table that was clicked
    const [currentRow, setCurrentRow] = React.useState(null);

    // triggers the opening of the edit customer modal
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

    // customers selectors
    const customers = useSelector(getCustomersTable);
    const customersCount = useSelector(selectCustomersCount);
    const customersLoading = useSelector(selectCustomersLoading);

    // handles callback table row click from table child component
    const onTableCellClick = React.useCallback(
        (row) => {
            setCurrentRow(row);
        },
        []
    );

    // add edit and delete buttons to the table
    React.useEffect(() => {
        if (customers && Array.isArray(customers.columns)) {
            let customersCopy = [...customers.columns];

            customersCopy.push({
                title: 'Action',
                key: (
                    <div className="table-actions">
                        <i className="fas fa-edit" onClick={onEditClick}></i>
                        <i className="fa fa-trash" onClick={onDeleteClick}></i>
                    </div>
                )
            });

            setParsedColumns(customersCopy);
        }
    }, [customers]);

    // opens edit customer modal
    const onEditClick = () => setIsEditModalOpen(true);

    // executes edit customer api request
    const handleEditCustomer = (data) => {
        dispatch(actionEditCustomer({
            body: { 
                ...data,
                customerId: currentRow.customerId
            }
        }));
    };

    // handles delete click button action
    const onDeleteClick = () => {
        
    };
    
    const dispatch = useDispatch();

    // api request when component is rendered, page options or search value changed
    React.useEffect(() => {
        if (pageOptions.pageIndex && pageOptions.pageSize) {
            dispatch(actionGetCustomers({
                queryParams: {
                    pageIndex: pageOptions.pageIndex,
                    pageSize: pageOptions.pageSize,
                    searchText: searchValueData
                }
            }));
        }
    }, [
        dispatch, 
        pageOptions.pageIndex, 
        pageOptions.pageSize, 
        searchValueData
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
        <>
            {
                isEditModalOpen && <ModalComponent 
                    title='Edit Customer' 
                    subtitle='Edit customer details'
                    body={
                        <FormComponent 
                            fields={[
                                { type: "text", name: "firstName", placeholder: "First Name", value: currentRow.firstName },
                                { type: "text", name: "lastName", placeholder: "Last Name", value: currentRow.lastName },
                                { type: "email", name: "email", placeholder: "Email", value: currentRow.email },
                                { type: "text", name: "phone", placeholder: "Phone", value: currentRow.phone },
                                { type: "text", name: "address", placeholder: "Address", value: currentRow.address }
                            ]}
                            onSubmit={handleEditCustomer}
                        />
                    }
                    closeModal={() => setIsEditModalOpen(false)} 
                />
            }
            <CustomersContainer>
                <TableComponent 
                    data={customers.data}
                    dataCount={customersCount}
                    columns={parsedColumns}
                    pageIndex={pageOptions.pageIndex}
                    pageSize={pageOptions.pageSize}
                    pagination
                    lazyLoadData={lazyLoadData}
                    isDataLoading={customersLoading}
                    onTableCellClick={onTableCellClick}
                />
            </CustomersContainer>
        </>
    );
};

export default CustomersComponent;
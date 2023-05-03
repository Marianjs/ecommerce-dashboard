import React from "react";
import { connect } from "react-redux";
import { 
    getProductsData, 
    selectProductsCount, 
    selectProductsLoading
} from "./selectors";
import { 
    actionGetProducts
} from "./actions";
import { ProductsContainer } from "./styles";
import FilterComponent from "../../../components/filter";
import { productsFilters } from "../../../components/filter/const-data";
import ProductsGridComponent from "./components/products-grid";
import { filterCategoryDropdownItems } from "./const-data";

/**
 * Customers details table component
 * @param {string} searchValueData - the search bar value used for filtering the data from table
 */

const ProductsComponent = ({
    products,
    productsCount,
    productsLoading,
    getProducts,
}) => {

    // stores the page index and page size of table pagination
    const [pageOptions, setPageOptions] = React.useState({
        pageIndex: 1,
        pageSize: 8
    });

    // status dropdown menu picked item value
    const [statusDropdownValue, setStatusDropdownValue] = React.useState(undefined);

    // api request when component is rendered, page options or search value changed
    React.useEffect(() => {
        getProducts({
            queryParams: {
                pageIndex: pageOptions.pageIndex,
                pageSize: pageOptions.pageSize,
                categoryId: statusDropdownValue
            }
        });
    }, [
        pageOptions,
        statusDropdownValue
    ]);

    // update the pageOptions so a new api request is done when a page table is changed
    const lazyLoadData = React.useCallback((pageIndex, pageSize) => {
        setPageOptions(prevState => ({
            ...prevState,
            pageIndex: pageIndex,
            pageSize: pageSize
        }))
    }, []);

    // callback function for sending data when an item from status dropdown menu was picked
    const onItemClick = React.useCallback(
        (text, id) => {
            setStatusDropdownValue(id);
    }, []);

    // delete status filter
    const onResetStatusFilter = () => setStatusDropdownValue(undefined);

    const onEditProduct = () => {

    };

    const onDeleteProduct = () => {
        
    };
    console.log(filterCategoryDropdownItems)
    return (
        <ProductsContainer>
            <div className="filters-container">
                <FilterComponent 
                    filters={productsFilters} 
                    onItemClick={onItemClick} 
                    onResetStatusFilter={onResetStatusFilter}
                    defaultDropdownText="All Categories"
                    dropdownFilterData={filterCategoryDropdownItems}
                />
            </div>
            <div className="products-grid">
                <ProductsGridComponent 
                    data={products?.data}
                    dataCount={productsCount}
                    pageIndex={pageOptions.pageIndex}
                    pageSize={pageOptions.pageSize}
                    lazyLoadData={lazyLoadData}
                    onDeleteProduct={onDeleteProduct}
                    onEditProduct={onEditProduct}
                    isLoading={productsLoading}
                />
            </div>
        </ProductsContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        products: getProductsData(state),
        productsCount: selectProductsCount(state),
        productsLoading: selectProductsLoading(state)
    };
};
    
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: payload => dispatch(actionGetProducts(payload))
    };
};
    
export default connect(
    mapStateToProps,
    mapDispatchToProps)
(ProductsComponent);
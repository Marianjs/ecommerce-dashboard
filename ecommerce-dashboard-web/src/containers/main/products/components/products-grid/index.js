import React, { useState, useEffect } from "react";
import { ProductsGridContainer } from "./styles";
import CardComponent from "../../../components/card";
import ProductCardDataComponent from "./components/product-card-data";
import SpinningLoader from "../../../../../components/spinning-loader";

/**
 * Products grid component
 * Used to display the product cards in a grid container
 * @param {Array} data - data to be displayed on one page at a time
 * @param {number} dataCount - the total data count
 * @param {number} pageIndex - the default page index to be displayed
 * @param {number} pageSize - the default page size to be displayed
 * @param {func} lazyLoadData - callback function that updates the page index and page size
 * @param {func} onEditProduct - callback function that notifies the parent about the edit action
 * @param {func} onDeleteProduct - callback function that notifies the parent about the delete action
 * @param {boolean} isLoading - boolean used for loading indicator
 */

const ProductsGridComponent = ({
    data,
    dataCount,
    pageIndex = 1,
    pageSize = 7,
    lazyLoadData,
    onEditProduct,
    onDeleteProduct,
    isLoading
}) => {

       // the selected page number, 1 by default
  const [currentPage, setCurrentPage] = useState(pageIndex);

  // the number of entries to be displayed per page, 10 by default
  const [itemsPerPage, setItemsPerPage] = useState(pageSize);

  // the number of total pages based on data count and items per page
  const totalPages = Math.ceil(dataCount / itemsPerPage);
  const [pageNumbers, setPageNumbers] = useState([]);

  // Generate an array of page numbers
  useEffect(() => {
    const updatedPageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      updatedPageNumbers.push(i);
    }
    setPageNumbers(updatedPageNumbers);
  }, [totalPages]);

  // Calculate the number of pages to display before and after the current page
  const ellipsisCount = 2;
  const pageRange = Math.floor((ellipsisCount * 2 + 1) / 2);
  const startPage = Math.max(1, currentPage - pageRange);
  const endPage = Math.min(totalPages, currentPage + pageRange);

  // Generate the page number links to display
  const pageLinks = [];

  // Display first 2 page numbers and ellipsis when current page is more than 2 pages away from start
  if (currentPage > pageRange + 2) {
    pageLinks.push(
      <div key={1} onClick={() => setCurrentPage(1)}>
        1
      </div>,
      <div key={2} onClick={() => setCurrentPage(2)}>
        2
      </div>
    );
    pageLinks.push(<span>...</span>);
  }

  // Display page numbers in range
  for (let i = startPage; i <= endPage; i++) {
    pageLinks.push(
      <div
        key={i}
        onClick={() => setCurrentPage(i)}
        className={currentPage === i ? "active" : "inactive"}
      >
        {i}
      </div>
    );
  }

  // Display last 2 page numbers and ellipsis when current page is more than 2 pages away from end
  if (currentPage < totalPages - pageRange - 1) {
    pageLinks.push(<span>...</span>);
    pageLinks.push(
      <div
        key={totalPages - 1}
        onClick={() => setCurrentPage(totalPages - 1)}
      >
        {totalPages - 1}
      </div>,
      <div key={totalPages} onClick={() => setCurrentPage(totalPages)}>
        {totalPages}
      </div>
    );
  }

  // Update the page numbers and reset currentPage if itemsPerPage changes
  useEffect(() => {
    const updatedTotalPages = Math.ceil(dataCount / itemsPerPage);
    const updatedPageNumbers = [];

    for (let i = 1; i <= updatedTotalPages; i++) {
      updatedPageNumbers.push(i);
    }

    setPageNumbers(updatedPageNumbers);

    if (currentPage > updatedTotalPages) {
      setCurrentPage(1);
    }

    lazyLoadData(currentPage, itemsPerPage);
  }, [itemsPerPage, dataCount, currentPage]);

    return (
        <ProductsGridContainer>
          {
            isLoading ? <div className="spinning-loader"><SpinningLoader width='65px' height='65px' color='#008cf0' /></div>
            : <>
                <div className="pagination">
                  <div className="page-numbers">{pageLinks}</div>
                </div>
                <div className="products-container">
                  {
                      data.map((product, index) => (
                          <CardComponent key={index}>
                              <ProductCardDataComponent
                                  category={product?.category}
                                  image={product?.image}
                                  productName={product?.name}
                                  price={product?.price}
                                  onDeleteProduct={onDeleteProduct}
                                  onEditProduct={onEditProduct}
                              />
                          </CardComponent>
                      ))
                  }
                </div>
              </>
          }
        </ProductsGridContainer>
    );
};

export default ProductsGridComponent;
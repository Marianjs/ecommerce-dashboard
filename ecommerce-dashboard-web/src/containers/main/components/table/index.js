import React, { useState, useEffect } from "react";
import { TableContainer } from './styles';
import SpinningLoader from "../../../../components/spinning-loader";
import NoDataComponent from "../no-data";

/**
 * Reusable table component with pagination
 * @param {data} - data to be displayed on one page at a time
 * @param {dataCount} - the total data count
 * @param {columns} - the columns of the table
 * @param {pageIndex} - the default page index to be displayed
 * @param {pageSize} - the default page size to be displayed
 * @param {pagination} - decides if pagination is applied
 * @param {lazyLoadData} - callback function that updates the page index and page size
 * @param {isDataLoading} - boolean that displays a spinning loader when api request is in pending
 */

const TableComponent = ({ 
  data, 
  dataCount,
  columns, 
  pageIndex = 1,
  pageSize = 10,
  pagination,
  lazyLoadData,
  isDataLoading
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

  // Handler function to update itemsPerPage state and reset currentPage
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

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

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the data array to display only the items on the current page
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  return dataCount === 0 ?
  <NoDataComponent />
  : isDataLoading ?
  <SpinningLoader 
    width='45px'
    height='45px'
    color='#008cf0'
  /> : (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && (
        <div className="pagination">
          <div className="items-per-page">
            <span style={{ marginRight: "0.4rem" }}>Show</span>
            <select
              className="pagination-dropdown"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <span style={{ marginLeft: "0.4rem" }}>entries</span>
          </div>
          <div className="page-numbers">{pageLinks}</div>
        </div>
      )}
    </TableContainer>
  );
};

export default TableComponent;

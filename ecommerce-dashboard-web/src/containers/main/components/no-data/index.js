import React from "react";
import noDataImg from '../../../../service/assets/no-data.png';
import { NoDataContainer } from "./styles";

/**
 * No data component
 * It renders when there is no data to display
 */

const NoDataComponent = () => {
    return (
        <NoDataContainer>
            <img className="no-data" src={noDataImg} />
            <h2>No data found</h2>
        </NoDataContainer>
    );
};

export default NoDataComponent;
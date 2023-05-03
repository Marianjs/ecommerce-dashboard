import React from "react";
import { ProductCardDataContainer } from "./styles";
import TextComponent from "../../../../../../../components/text";

/**
 * Product card data component
 * Used as a reusable component for the product cards
 * @param {string} category - the category name of the product
 * @param {string} image - the representative image of the product
 * @param {string} price - the price of the product
 * @param {string} productName - the name of the product
 * @param {func} onEditProduct - callback function that notifies the parent about the edit action
 * @param {func} onDeleteProduct - callback function that notifies the parent about the delete action
 */

const ProductCardDataComponent = ({
    category,
    image,
    price,
    productName,
    onEditProduct,
    onDeleteProduct
}) => {

    return (
        <ProductCardDataContainer>
            <div className="image-container">
                <img src={`data:image/jpeg;base64,${image}`} alt="product-image" />
            </div>
            <div className="details">
                <div className="category-price">
                    <div className="category">
                        <TextComponent text={category} color="#73767B" />
                    </div>
                    <TextComponent text={`$${price}`} color="#73767B" />
                </div>
                <div className="name">
                    <TextComponent text={productName} color="#3C3F43" />
                </div>
            </div>
            <div className="actions">
                <div className="edit">
                   <i className="fas fa-edit" onClick={() => onEditProduct()}></i>
                   Edit
                </div>
                <div className="delete">
                   <i className="fa fa-trash" onClick={()=> onDeleteProduct()}></i>
                   Delete
                </div>
            </div>
        </ProductCardDataContainer>
    );
};

export default ProductCardDataComponent;
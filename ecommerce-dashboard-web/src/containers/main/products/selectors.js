/**
 * Customers selectors
 */

import { createSelector } from "@reduxjs/toolkit";
import { productsCategoriesEnum } from "./const-data";

export const selectProducts = state => state.products.products;
export const selectProductsCount = state => state.products.productsCount;
export const selectProductsLoading = state => state.products.productsLoading;

export const getProductsData = createSelector(
    selectProducts,
    products => {
        let data = [];
        const copyProducts = [...products];

        if (copyProducts)
            data = copyProducts.map(product => ({
                productId: product.id,
                image: product?.image,
                name: product.name,
                price: product.price,
                category: productsCategoriesEnum[product.categoryId]
            }));

        return { data };
    },
);

/**
 * Orders selectors
 */

import { createSelector } from "@reduxjs/toolkit";

export const selectOrders = state => state.orders.orders;
export const selectOrdersCount = state => state.orders.ordersCount;
export const selectOrdersLoading = state => state.orders.ordersLoading;

export const getOrdersTable = createSelector(
    selectOrders,
    orders => {
        const columns = [
            {
                title: "Customer",
                key: 'customerName'
            },
            {
                title: "Date",
                key: 'date'
            },
            {
                title: "Status",
                key: 'status'
            },
            {
                title: "Price",
                key: 'price'
            }
        ];

        let data = [];
        const copyOrders = [...orders];

        if (copyOrders)
            data = copyOrders.map(order => ({
                orderId: order.orderId,
                customerName: order.customerName,
                date: new Date(order.date).toLocaleDateString('en-GB').replace(/\//g, '.'),
                status: order.status,
                price: order.totalCost
            }));

        return { columns, data };
    },
);

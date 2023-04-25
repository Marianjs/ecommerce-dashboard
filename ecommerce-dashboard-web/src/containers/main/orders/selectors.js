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
                title: "Delivery Address",
                key: 'deliveryAddress'
            },
            {
                title: "Date of Order",
                key: 'dateOfOrder'
            },
            {
                title: "Date of Delivery",
                key: 'dateOfDelivery'
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
                deliveryAddress: order.address && order.address.length < 18 ? order.address : order.address.substr(0, 18) + "...",
                dateOfOrder: new Date(order.dateOfOrder).toLocaleDateString('en-GB').replace(/\//g, '.'),
                dateOfDelivery: new Date(order.dateOfDelivery).toLocaleDateString('en-GB').replace(/\//g, '.'),
                status: order.status,
                price: "$" + order.totalCost
            }));

        return { columns, data };
    },
);

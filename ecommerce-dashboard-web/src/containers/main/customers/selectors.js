/**
 * Orders selectors
 */

import { createSelector } from "@reduxjs/toolkit";

export const selectCustomers = state => state.customers.customers;
export const selectCustomersCount = state => state.customers.customersCount;
export const selectCustomersLoading = state => state.customers.customersLoading;

export const getCustomersTable = createSelector(
    selectCustomers,
    customers => {
        const columns = [
            {
                title: "First Name",
                key: 'firstName'
            },
            {
                title: "Last Name",
                key: 'lastName'
            },
            {
                title: "Email",
                key: 'email'
            },
            {
                title: "Phone",
                key: 'phone'
            },
            {
                title: "Address",
                key: 'address'
            }
        ];

        let data = [];
        const copyCustomers = [...customers];

        if (copyCustomers)
            data = copyCustomers.map(customer => ({
                customerId: customer.id,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                phone: customer.phone,
                address: customer.address && customer.address.length < 18 ? customer.address : customer.address.substr(0, 18) + "...",
            }));

        return { columns, data };
    },
);

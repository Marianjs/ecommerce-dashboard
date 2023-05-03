/**
 * Constant data used in the products page
 */

export const productsCategoriesEnum = Object.freeze({
   1: 'Phone',
   2: 'Tablet',
   3: 'TV',
   4: 'Laptop',
   5: 'Video camera',
   6: 'Headphone',
   7: 'Joystick' 
});

export const filterCategoryDropdownItems = [
    {
        id: 1,
        text: 'Phone',
        callback: (_, id) => id
    },
    {
        id: 2,
        text: 'Tablet',
        callback: (_, id) => id
    },
    {
        id: 3,
        text: 'TV',
        callback: (_, id) => id
    },
    {
        id: 4,
        text: 'Laptop',
        callback: (_, id) => id
    },
    {
        id: 5,
        text: 'Video camera',
        callback: (_, id) => id
    },
    {
        id: 6,
        text: 'Headphone',
        callback: (_, id) => id
    },
    {
        id: 7,
        text: 'Joystick',
        callback: (_, id) => id
    }
];
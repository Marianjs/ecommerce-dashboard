import React from "react";
import { MainPageContainer } from "./styles";
import SideBarComponent from "./components/sidebar";
import TopBarComponent from "./components/topbar";
import CardComponent from "./components/card";
import OrdersComponent from "./orders";
import OrdersHeaderComponent from "./orders/components/header";

/**
 * The main page of application (dashboard)
 * Here we enter after logging in
 */

const MainPage = () => {

    // state that will decide which components will be rendered in the page
    const [sidebarItem, setSidebarItem] = React.useState(1);

    // search bar value
    const [searchValue, setSearchValue] = React.useState(undefined);

    // status dropdown menu picked item value
    const [statusDropdownValue, setStatusDropdownValue] = React.useState(undefined);

    // callback that sets the sidebar item id received from the child component
    const onSidebarItemClick = React.useCallback(
        (sidebarItemId) => {
            setSidebarItem(sidebarItemId);
    }, []);

    // callback function for sending data when search bar value changed
    const onSearchValueChange = React.useCallback(
        (searchValueData) => {
            setSearchValue(searchValueData);
    }, []);

    // callback function for sending data when an item from status dropdown menu was picked
    const onItemClick = React.useCallback(
        (statusItemValue) => {
            setStatusDropdownValue(statusItemValue);
    }, []);

    // function that returns the necessary render content
    const renderContent = () => {
        switch (sidebarItem) {
            case 1:
                return <div className="info-cards">
                            <CardComponent />
                            <CardComponent />
                        </div>
            case 2:
                return (
                    <CardComponent
                        header={<OrdersHeaderComponent onSearchValueChange={onSearchValueChange} onItemClick={onItemClick} />}
                    >
                        <div className="orders-container">
                            <OrdersComponent 
                                searchValueData={searchValue}
                                statusDropdownValue={statusDropdownValue}
                            />
                        </div>
                    </CardComponent>
                )

            default: <></>
        }
    };

    return (
        <MainPageContainer>
            <div className="sidebar-component">
                <SideBarComponent onSidebarItemClick={onSidebarItemClick} />
            </div>
            <div className="inner-content">
                <div className="header">
                    <TopBarComponent />
                </div>
                <div className="main">
                    {renderContent()}
                </div>
            </div>
        </MainPageContainer>
    )
}

export default MainPage;
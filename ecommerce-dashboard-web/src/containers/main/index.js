import React from "react";
import { MainPageContainer } from "./styles";
import SideBarComponent from "./components/sidebar";
import TopBarComponent from "./components/topbar";
import CardComponent from "./components/card";
import OrdersComponent from "./orders";
import OrdersHeaderComponent from "./orders/components/header";
import CardDataComponent from "./components/info-card";
import { useDispatch, useSelector } from "react-redux";
import { selectRevenueInfoCard, selectRevenueInfoCardLoading, selectTotalOrdersInfoCard, selectTotalOrdersInfoCardLoading } from "./selectors";
import { actionGetRevenueInfoCard, actionGetTotalOrdersInfoCard } from "./actions";

/**
 * The main page of application (dashboard)
 * Here we enter after logging in
 */

const MainPage = () => {

    const dispatch = useDispatch();

    // api request when component is rendered
    React.useEffect(() => {
        dispatch(actionGetRevenueInfoCard());
        dispatch(actionGetTotalOrdersInfoCard());
    }, [])

    // state that will decide which components will be rendered in the page
    const [sidebarItem, setSidebarItem] = React.useState(1);

    // search bar value
    const [searchValue, setSearchValue] = React.useState(undefined);

    // status dropdown menu picked item value
    const [statusDropdownValue, setStatusDropdownValue] = React.useState(undefined);

    // info cards selectors
    const revenueInfoCard = useSelector(selectRevenueInfoCard);
    const revenueInfoCardLoading = useSelector(selectRevenueInfoCardLoading);
    const totalOrdersInfoCard = useSelector(selectTotalOrdersInfoCard);
    const totalOrdersInfoCardLoading = useSelector(selectTotalOrdersInfoCardLoading);

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

    // function that returns the necessary content
    const renderContent = () => {
        switch (sidebarItem) {
            case 1:
                return <div className="info-cards">
                            <CardComponent>
                                <CardDataComponent 
                                    title="Revenue"
                                    data={revenueInfoCard}
                                    icon="fa fa-eur"
                                    isLoading={revenueInfoCardLoading}
                                    color='#07eb6d'
                                    backgroundIconColor='#EDFFED'
                                    valueName='value'
                                />
                            </CardComponent>
                            <CardComponent>
                                <CardDataComponent 
                                    title="Orders"
                                    data={totalOrdersInfoCard}
                                    icon="fa fa-reorder"
                                    isLoading={totalOrdersInfoCardLoading}
                                    color='#E4B70B'
                                    backgroundIconColor='#FFF9E2'
                                    valueName='totalOrders'
                                />
                            </CardComponent>
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
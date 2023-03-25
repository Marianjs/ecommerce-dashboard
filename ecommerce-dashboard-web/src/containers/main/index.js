import React from "react";
import { MainPageContainer } from "./styles";
import SideBarComponent from "./components/sidebar";
import TopBarComponent from "./components/topbar";
import CardComponent from "./components/card";

/**
 * The main page of application (dashboard)
 * Here we enter after logging in
 */

const MainPage = () => {
    return (
        <MainPageContainer>
            <div className="sidebar-component">
                <SideBarComponent />
            </div>
            <div className="inner-content">
                <div className="header">
                    <TopBarComponent />
                </div>
                <div className="main">
                    <div className="info-cards">
                        <CardComponent />
                        <CardComponent />
                    </div>
                </div>
            </div>
        </MainPageContainer>
    )
}

export default MainPage;
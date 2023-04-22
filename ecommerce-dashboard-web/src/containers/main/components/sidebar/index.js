import React from "react";
import { SideBarContainer, SideBarItem } from "./styles";
import { sideBarItems } from "./const-data";

/**
 * Main page side bar menu
 * onSidebarItemClick - function that will send the sidebar item id to parent component
 */

const SideBarComponent = ({
    onSidebarItemClick
}) => {

    // used when a sidebar item is clicked
    const [isItemActive, setIsItemActive] = React.useState(1);

    return (
        <SideBarContainer>
            <div className="logo">
                <i className="fa-brands fa-shopify"></i>
                <span className="title">E-SHOP</span>
            </div>
            <div className="items">
                {sideBarItems.map((sideBarItem, index) => (
                    <SideBarItem 
                        color={sideBarItem.color}
                        activeBackgroundColor={sideBarItem.activeBackgroundColor}
                        style={{ backgroundColor: isItemActive === sideBarItem.id ? sideBarItem.activeBackgroundColor : '' }}
                        onClick={() => { setIsItemActive(sideBarItem.id); onSidebarItemClick(sideBarItem.id) }}
                        key={index}
                    >
                        <i className={sideBarItem.icon}></i>
                        <span className="name">{sideBarItem.name}</span>
                    </SideBarItem>
                ))}
            </div>
        </SideBarContainer>
    );
};

export default SideBarComponent;
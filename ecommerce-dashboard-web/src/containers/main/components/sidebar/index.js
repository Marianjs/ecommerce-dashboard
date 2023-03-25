import React from "react";
import { SideBarContainer, SideBarItem } from "./styles";
import { sideBarItems } from "./const-data";

const SideBarComponent = () => {

    // used when a sidebar item is clicked
    const [isItemActive, setIsItemActive] = React.useState(0);

    return (
        <SideBarContainer>
            <div className="logo">
                <i className="fa-brands fa-shopify"></i>
                <span className="title">E-SHOP</span>
            </div>
            <div className="items">
                {sideBarItems.map(sideBarItem => (
                    <SideBarItem 
                        color={sideBarItem.color}
                        activeBackgroundColor={sideBarItem.activeBackgroundColor}
                        style={{ backgroundColor: isItemActive === sideBarItem.id ? sideBarItem.activeBackgroundColor : '' }}
                        onClick={() => setIsItemActive(sideBarItem.id)}
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
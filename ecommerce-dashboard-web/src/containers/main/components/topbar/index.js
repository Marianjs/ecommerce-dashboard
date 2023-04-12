import React from "react";
import ProfileComponent from "./components/profile";
import { TopBarContainer } from "./styles";

const TopBarComponent = () => {

    return (
        <TopBarContainer>
            <div className="profile-component">
                <ProfileComponent />
            </div>
        </TopBarContainer>
    );
};

export default TopBarComponent;
import React from "react";
import { ProfileContainer } from "./styles";
import Avatar from '../../../../../../service/assets/default-profile-avatar.jpg';
import { useLocation } from "react-router-dom";
import { profileDropdownItems } from "./const-data";
import DropdownComponent from "../dropdown";

const ProfileComponent = () => {

    // used to get the route parameters
    const location = useLocation();

    // for opening and closing the dropdown menu
    const [dropdownMenuActive, setDropdownMenuActive] = React.useState(false);

    return (
        <ProfileContainer>
            <div className="text-part">
                <div className="name">
                    { location.state.userName }
                </div>
                <div className="role">

                </div>
            </div>
            <div className="avatar-container">
                <img className="avatar" src={Avatar} />
            </div>
            <div 
                className="arrow-down"
                onClick={() => setDropdownMenuActive(prevState => !prevState)}
            >
                <i className="fa-solid fa-caret-down"></i>
            </div>
            {
                dropdownMenuActive &&
                <div className="dropdown">
                    <div className="dropdown-content">                
                        {profileDropdownItems.map(item => (
                            <DropdownComponent 
                                key={item.id}
                                text={item.text}
                                icon={item.icon}
                                callback={item.callback}
                                profileRequest
                            />
                        ))}   
                    </div>
                    <div className="catch-arrow"></div>
                </div>
            }        
        </ProfileContainer>
    );
};

export default ProfileComponent;
import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.div`
    height: 78px;
    width: 100%;
    background: white;
    position: fixed;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NavItemsContainer = styled.div`
    width: 100%;
    padding: 0px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    // height: 100%;

    & > p {
        font-weight: bold;
    }
`;

const ProfileLogoContainer = styled.div`
    & > p {
        border-radius: 40px;
        background: grey;
        width: 40px;
        height: 40px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        color: white;
    }
`;

function MenuBarComponent() {
    return (
        <NavigationContainer>
            <NavItemsContainer>
                <LogoContainer>
                    <img
                        src="/images/PYTLogo.svg"
                        alt="logo"
                        width="30"
                        height="30"
                    />
                    <p>pickyourtrail</p>
                </LogoContainer>

                <ProfileLogoContainer>
                    <p>A</p>
                </ProfileLogoContainer>
            </NavItemsContainer>
        </NavigationContainer>
    );
}

export default MenuBarComponent;

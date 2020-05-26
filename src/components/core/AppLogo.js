import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/logo.png';

const LogoContainer = styled.div``;

const AppLogo = ({ goHome }) => {
    return (
        <LogoContainer >
            <a href="/#">
                <img src={Logo} alt="Logo" />
            </a>
        </LogoContainer>
    );
};

AppLogo.propTypes = {
    goHome: PropTypes.func,
};

AppLogo.defaultProps = {
    goHome: () => { },
};

export default AppLogo;

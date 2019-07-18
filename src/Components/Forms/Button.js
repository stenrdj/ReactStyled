import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyle = styled.div `
						display:inline-block;
						background-color:#E91D3D;
						border: 1px solid #E91D3D;
						border-radius: 33px;
						padding: ${props => props.Style === 'Big' ? '20px 70px':'10px 20px'};
						margin: auto 10px;
						color:#fff;
						text-transform:uppercase;
						font-size:15px;
						cursor:pointer;
						&:hover{
							background-color:rgba(233, 29, 61, 0.05);
							font-weight:bold;
							color:#E91D3D;
						}
					`;

const Button = (props) => {
    return (
        <ButtonStyle Style={props.Style} onClick={props.onClick}>{props.children}</ButtonStyle>
    )
}
Button.propTypes = {
        Style: PropTypes.string,
    };
export default Button;
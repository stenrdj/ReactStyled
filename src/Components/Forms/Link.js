import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkStyle = styled.a`
						display:inline-block;
						padding:10px 20px;
						margin: auto 10px;
						color:#E91D3D;
						text-decoration: underline;
						text-transform:${props => props.TextCase === "Upper"? "uppercase" : (props.TextCase === "Normal" ? "initial" : "capitalize" ) };
						font-size:15px;
						&:hover{
							cursor:pointer;
							font-weight:bold;
						}
					`;

const Link = (props) => {

  return (
    <LinkStyle href={props.To} TextCase={props.TextCase}>{props.children}</LinkStyle>
  )
}

Link.propTypes = {
        To: PropTypes.string,
        TextCase:PropTypes.oneOf(['Upper','Normal']),
    };

export default Link;
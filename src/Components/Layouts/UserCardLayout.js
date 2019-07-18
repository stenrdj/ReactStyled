import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UserCardContainer = styled.div`
						 display:inline-block;
						 position:relative;
						 max-width: ${props => props.Size === "medium" ? "434px" : "560px"};
						 width:100%;
						 background-color:#fff;
						 border-radius:5px;
						 padding:31px;
						 box-shadow:0px 3px 10px rgba(165, 175, 186, 0.16);
					`;

export default class UserCardLayout extends Component {
	 

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<UserCardContainer Size={this.props.Size}>
				{this.props.children}
			</UserCardContainer>
		);
	}
}
UserCardLayout.propTypes = {
        Size: PropTypes.oneOf(['medium']),
    };
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label `
						font-size:17px;
						color:rgba(51, 51, 51, 0.58);
						position: absolute;
						left: 1.6em;
						top: 30px;
						color: #999;
						background-color: #fff;
						z-index: 10;
						transition: transform 150ms ease-out, font-size 150ms ease-out;

 					`;

const InputWrapper = styled.div `
						box-shadow:0px 1px 5px rgba(165, 175, 186, 0.42);
						border-radius:5px;
						padding:14px 17px;
						text-align:left;
						position:relative;
						margin:20px 0px;
						 &:focus-within{
						 	label {
								transform: translateY(-15px);
							 	 }
						 }
							
					`;

const InputComponent = styled.input `
						border:0px;
						font-size:18px;
						color:#000000;
						display:block;
						width:100%;
						padding:20px 10px 10px 10px;
						outline:0px;
						opacity:0;
						&:focus{
							opacity:1;
							 
						}
					`;

class Input extends Component {

    static propTypes = {
        Label: PropTypes.string,
        PlaceHolder: PropTypes.string,
        As: PropTypes.oneOf(['email', 'password','text']),
    };
   constructor(props) {
            super(props);
            this.inputRef = React.createRef();
    }

    render() {
        return (
        	 
        	<InputWrapper>
		      <Label>{this.props.Label}</Label>
		      <InputComponent ref={this.inputRef} type={this.props.As} placeholder={this.props.PlaceHolder} onChange={this.props.onChange} onMouseEnter={() => {
		          this.inputRef.current.focus()
		        }}/>
		    </InputWrapper>
            
        );
    }
}

export default Input;

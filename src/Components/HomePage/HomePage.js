import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from '../LoginForm/LoginForm';
import UserLoggedIn from '../LoginForm/UserLoggedIn';

const Container = styled.div`
 						 margin:20% auto 20% auto;
				`;

class HomePage extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
        	'isLogged':false,
        };
    }

    render() {
        return (
        	 <Container>
	           {!this.state.isLogged &&   <LoginForm showUserData={(e)=>this.setState({ "isLogged" : true })}/>}
	           {this.state.isLogged &&   <UserLoggedIn/> }
             </Container>
        );
    }
}

export default HomePage;

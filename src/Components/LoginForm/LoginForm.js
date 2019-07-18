import React,{PureComponent} from 'react';
import styled from 'styled-components';
import UserCardLayout from '../Layouts/UserCardLayout';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Link from '../Forms/Link';

const CardTitle = styled.h2`
						 font-size:24px;
						 text-align:center;
						 font-weight:normal;
						 margin: 0px 0px 1.5em 0px;
					`;

const LineWrapper = styled.div`
							display:block;
							margin:1em 0px;
							text-transform:capitale;
					`;
					
export default class LoginForm extends PureComponent {
	 

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<UserCardLayout>
					<CardTitle>Connecter-vous à votre compte</CardTitle>
					<Input Label="Email" As="email" PlaceHolder="exemple@gmail.com"/>
					<Input Label="Password" As="password" PlaceHolder="•••••••••"/>

					<LineWrapper>
	            		<Button Style={"Big"} onClick={this.props.showUserData}>
	            			S’inscrire
	            		</Button>
	            	</LineWrapper>
	            	<LineWrapper>
						<Link TextCase={"Normal"}>
		            			Mot de passe oublier ?
		            	</Link>
		           	</LineWrapper>
	            	
				</UserCardLayout>
		);
	}
}

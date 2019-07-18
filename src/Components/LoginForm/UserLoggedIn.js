import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserCardLayout from '../Layouts/UserCardLayout';
import Button from '../Forms/Button';
import Link from '../Forms/Link';

const UserPicture = styled.img`
						 position:absolute;
						 top:calc(-150px / 2);
						 left:calc(50% - (150px / 2) );
						 height:150px;
						 width:150px;
						 border-radius:50%;
						 background-color:#e6e;
 					`;
const UserNameAndAge = styled.h2`
						 margin-top:2.8em;
						 font-size:22px;
						 text-align:center;
						 font-weight:bold;
 					`;
const UserLocation = styled.h4`
						 font-size:18px;
						 text-align:center;
						 font-weight:normal;
					`;
const UserIntro = styled.p`
						 color:#484848;
						 font-size:17px;
						 text-align:center;
						 &:after{
						 	content:" ";
						 		display:block;
						 		width:60px;
						 		height:1px;
						 		background-color:#D3D3D3;
						 		margin:2em auto;

						 }
					`;
 
const LineWrapper = styled.div`
							display:block;
							margin:1em 0px;
					`;
					
export default class UserLoggedIn extends React.Component {
	 

	constructor(props) {
		super(props);
		this.state = {
			'user' : {
				'name' : '',
				'surname': '',
				'age':0,
				'photo':'',

			}, 
		};
	}

	componentDidMount() {
	    axios.get(`https://uinames.com/api/?ext&region=Morocco`)
	      .then(res => {
	        const user = res.data;
	        this.setState({ user });
	      });
	}

	render() {
		return (
 
				<UserCardLayout Size={"medium"}>
					<UserPicture src={`${this.state.user.photo}`} alt={`${this.state.user.name} ${this.state.user.surname}`}/>
					<UserNameAndAge>
						{`${this.state.user.name} ${this.state.user.surname} , ${this.state.user.age} `}
					</UserNameAndAge>
					<UserLocation>
						Casablanca, MA
					</UserLocation>
					<UserIntro>
						Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim.
					</UserIntro>
					<LineWrapper>
	            		<Button Style={"Big"}>
	            			Voir Profile
	            		</Button>
	            	</LineWrapper>
	            	<LineWrapper>
						<Link >
		            			Supprimer le profile
		            	</Link>
		           	</LineWrapper>
	            	
				</UserCardLayout>
 
		);
	}
}

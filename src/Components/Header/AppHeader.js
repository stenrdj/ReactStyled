import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from '../Forms/Button';
import Link from '../Forms/Link';
import Logo from './Logo';

const Container = styled.header`
					    display: block;
					    padding:10px 0px;
					    box-shadow: 0px 3px 10px rgba(165, 175, 186, 0.16);
					    background-color:#fff;
				`;
const Wrapper = styled.div`
					    display: inline-block;
					    max-width: 90%;
					    width:100%;
					    text-align: left;
					    margin: 0px auto;
 				`;
const CtrContainer = styled.div`
					display:inline-block;
					float:right;
					vertical-align:middle;
				`;
class Header extends PureComponent {
  
    render() {
        return (
            <Container>
	            <Wrapper>
	            	<Logo/>
	            	<CtrContainer>
	            		<Link TextCase={"Upper"}>
	            			S’identifier
	            		</Link>
	            		<Button>
	            			S’inscrire
	            		</Button>

	            	</CtrContainer>
	            </Wrapper>
            </Container>
        );
    }
}

export default Header;

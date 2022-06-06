import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { MailOutline, Phone, Room } from '@mui/icons-material';
import { mobile } from '../pages/responsive';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`
`

const Desc = styled.p`
margin: 20px 0px;
`

const SocMedContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const ListItem = styled.li`
width: 50%;
`;

const Right = styled.div`
flex: 1;
${mobile({ backgroundColor: "#eeeded" })}
`;

const List = styled.ul`
margin: 0px;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const Payment = styled.img`
width: 50%;
`;

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>My Logo</Logo>
            <Desc>
                <SocMedContainer>
                    <SocialIcon>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon />
                    </SocialIcon>
                </SocMedContainer>
            </Desc>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}></Room>Room 1, 2nd floor, New Building, Manila, Phil.
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}></Phone>+63 999 123 4567
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}></MailOutline>contact_me@email.com
            </ContactItem>
            <Payment src="https:i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import ImagePayment from "../../assets/images/utils/payment.png";

const Container = styled.div`
  display: flex;
  border-top: 1px solid #dad8d8;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 30px 0;
  width: 80%;
`;

const SocialContainer = styled.h1`
  display: flex;
  margin-left: 100px;
`;

const SocialIcon = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Logo</Logo>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          blanditiis saepe id quod, voluptatum obcaecati voluptate
          necessitatibus amet inventore quos in consectetur.
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Funkos</ListItem>
          <ListItem>Complementos</ListItem>
          <ListItem>Ropa</ListItem>
          <ListItem>Hogar</ListItem>
          <ListItem>Decoración</ListItem>
          <ListItem>Merchandising</ListItem>
          <ListItem>Mi cuenta</ListItem>
          <ListItem>Favoritos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Avd. Buenos Aires, 15002, A
          Coruña, Galicia, España
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +34 699 542 995
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@contact.com
        </ContactItem>
        <Payment src={ImagePayment} />
      </Right>
    </Container>
  );
}

export default Footer;

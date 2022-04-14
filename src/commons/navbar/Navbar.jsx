import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import "./navbar.css";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 60px;
  padding: 5px;
  width: 75%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: 900;
  text-align: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const Link = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 48px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SearchContainer>
            <SearchInput type="text" />
            <SearchOutlined style={{ height: "18px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Logo</Logo>
        </Center>
        <Right>
          <Link>Registrarse</Link>
          <Link>Iniciar Sesión</Link>
          <ShoppingCartOutlined style={{ height: "28px" }} />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

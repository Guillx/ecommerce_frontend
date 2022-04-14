import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCart,
} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2929291a;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
`;

const Image = styled.img`
  height: 75%;
  width: fit-content;
  z-index: 2;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #292929;
    color: white;
    transform: scale(1.1);
  }
`;

function PopularProduct({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <ProductPrice>{item.price} €</ProductPrice>
      <Info>
        <IconsContainer>
          <Icon>
            <ShoppingCart />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </IconsContainer>
      </Info>
    </Container>
  );
}

export default PopularProduct;

import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 49vh;
  position: relative;

  &:hover ${Image} {
    opacity: 0.7;
    filter: blur(2px);
  }

  @media only screen and (max-width: 1600px) {
    height: 38vh;
  }

  @media only screen and (max-width: 1200px) {
    height: 30vh;
  }

  @media only screen and (max-width: 980px) {
    height: 65vh;
    margin: 20px;
  }
`;

const Info = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  background-color: #e7e7e7;
  padding: 10px 50px;
  border: 4px solid #292929;
  border-radius: 16px;
  font-size: 34px;
  font-weight: 900;
  color: #292929;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 8px;
  text-transform: uppercase;
  outline: none;
  border: 2px solid #292929;
  cursor: pointer;
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />

        <Info>
          <Title>{item.title}</Title>
          <Button>Ver Más</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;

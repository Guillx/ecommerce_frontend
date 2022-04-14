import styled from "styled-components";
import SectionTitle from "../../../../commons/section-title/SectionTitle";
import { popularProducts } from "./data/data";
import PopularProduct from "./PopularProduct";

const Main = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function PopularProducts() {
  return (
    <Main>
      <SectionTitle sectionTitle="Populares" />
      <Container>
        {popularProducts.map((item) => (
          <PopularProduct item={item} key={item.id} />
        ))}
      </Container>
    </Main>
  );
}

export default PopularProducts;

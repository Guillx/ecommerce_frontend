import styled from "styled-components";
import { products } from "./data/data";
import Product from "./Product";

const Main = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products({ category, filters, sort }) {
  console.log(category, filters, sort);
  return (
    <Main>
      <Container>
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </Main>
  );
}

export default Products;

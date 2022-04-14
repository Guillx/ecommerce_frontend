import styled from "styled-components";
import SectionTitle from "../../../../commons/section-title/SectionTitle";
import CategoryItem from "./CategoryItem";
import { categories } from "./data/data";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  justify-content: space-between;

  @media only screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Categories() {
  return (
    <>
      <SectionTitle sectionTitle="Categorías" />
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
}

export default Categories;

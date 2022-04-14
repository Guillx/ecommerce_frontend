import styled from "styled-components";
import Navbar from "../../commons/navbar/Navbar";
import Newsletter from "../../commons/newsletter/Newsletter";
import TopAnnouncement from "../../commons/top-announcement/TopAnnouncement";
import Footer from "../../commons/footer/Footer";
import Products from "./components/products/Products";
import SectionTitle from "../../commons/section-title/SectionTitle";
// import Products from "../home/components/popular-products/PopularProducts";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  outline: none;
  padding: 10px;
  width: 300px;
  margin-right: 20px;
`;

const Option = styled.option``;

function ProductsList() {
  return (
    <Container>
      <Navbar />
      <TopAnnouncement />
      <SectionTitle sectionTitle="Funkos" />
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Blanco</Option>
            <Option>Negro</Option>
            <Option>Rojo</Option>
            <Option>Azul</Option>
            <Option>Amarillo</Option>
            <Option>Verde</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Talla
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar Productos</FilterText>
          <Select>
            <Option disabled selected>
              Ordenar
            </Option>
            <Option>Más caros primero</Option>
            <Option>Más baratos primero</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductsList;

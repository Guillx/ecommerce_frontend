import styled from "styled-components";
import Navbar from "../../commons/navbar/Navbar";
import Newsletter from "../../commons/newsletter/Newsletter";
import TopAnnouncement from "../../commons/top-announcement/TopAnnouncement";
import Footer from "../../commons/footer/Footer";
import Products from "./components/products/Products";
import SectionTitle from "../../commons/section-title/SectionTitle";
import { useLocation } from "react-router-dom";
import { useState } from "react";
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
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("novedades");
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <TopAnnouncement />
      <SectionTitle sectionTitle="Funkos" />
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>Blanco</Option>
            <Option>Negro</Option>
            <Option>Rojo</Option>
            <Option>Azul</Option>
            <Option>Amarillo</Option>
            <Option>Verde</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option disabled>Talla</Option>
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
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="novedades">Novedades primero</Option>
            <Option value="caros">Más caros primero</Option>
            <Option value="baratos">Más baratos primero</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductsList;

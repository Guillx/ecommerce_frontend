import styled from "styled-components";
import Footer from "../../commons/footer/Footer";
import Navbar from "../../commons/navbar/Navbar";
import Newsletter from "../../commons/newsletter/Newsletter";
import TopAnnouncement from "../../commons/top-announcement/TopAnnouncement";
import ProductImage from "../../assets/images/products/ropa/camiseta1.webp";
import { Add, Remove, ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  height: calc(100vh - 160px - 26px);
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  margin-bottom: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 20px 0;
  font-weight: 300;
  line-height: 34px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 42px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`;

function ProductPage() {
  return (
    <Container>
      <Navbar />
      <TopAnnouncement />
      <Wrapper>
        <ImageContainer>
          <Image src={ProductImage} />
        </ImageContainer>
        <InfoContainer>
          <Title>Funko Pop NBA</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            exercitationem minus nulla aperiam beatae eveniet expedita, corrupti
            perferendis dignissimos similique quae ipsum blanditiis iusto omnis
            rerum harum autem at ab architecto libero!
          </Description>
          <Price>21,95 €</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="red" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>
              <ShoppingCartOutlined />
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductPage;

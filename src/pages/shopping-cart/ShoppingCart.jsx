import styled from "styled-components";
import Footer from "../../commons/footer/Footer";
import Navbar from "../../commons/navbar/Navbar";
import SectionTitle from "../../commons/section-title/SectionTitle";
import TopAnnouncement from "../../commons/top-announcement/TopAnnouncement";
import ImageTest from "../../assets/images/products/decoracion/deco10.jpg";
import ImageTest2 from "../../assets/images/products/decoracion/deco7.jpg";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px 80px;
  margin-bottom: 100px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 60px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  color: ${(props) => props.type === "filled" && "white"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  margin-right: 100px;
  border-right: 1px solid #dad8d8;
  padding-right: 80px;
`;

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #dad8d8;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 1px;
  background-color: #dad8d8;
`;

const Summary = styled.div`
  flex: 1;
  border-radius: 10px;
  padding: 20px;
  margin-left: 50px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 120px;
  cursor: pointer;
`;

function ShoppingCart() {
  return (
    <Container>
      <Navbar />
      <TopAnnouncement />
      <Wrapper>
        <SectionTitle sectionTitle="Tu carrito" />
        <Top>
          <TopButton>Continuar comprando</TopButton>
          <TopTexts>
            <TopText>Elementos en el carrito (2)</TopText>
            <TopText>Lista de deseos (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Pasar por caja</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={ImageTest} />
                <Details>
                  <ProductName>
                    <b>Product: </b>Product name
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>565321123568
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Talla: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>24 €</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src={ImageTest2} />
                <Details>
                  <ProductName>
                    <b>Product: </b>Product name
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>565321123568
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Talla: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>24 €</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>RESUMEN</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>80 €</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Gastos de envío</SummaryItemText>
              <SummaryItemPrice>4,99 €</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Descuento gastos de envío</SummaryItemText>
              <SummaryItemPrice>-4,99 €</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>80 €</SummaryItemPrice>
            </SummaryItem>

            <SummaryButton>Pagar</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default ShoppingCart;

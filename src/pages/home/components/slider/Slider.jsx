import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "./data/data";

/* STYLED COMPONENTS */
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px - 26px);
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "18px"};
  right: ${(props) => props.direction === "right" && "18px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 60px - 26px);
  background-color: ${(props) => props.background};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 80%;
  transition: 1s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  position: relative;
`;

const Title = styled.h1`
  font-size: 64px;
  line-height: 90px;
  font-weight: 900;
  text-transform: uppercase;
  color: ${(props) => props.color};
  z-index: 2;
  text-shadow: 10px 8px 12px #da140a;
  transition: 1s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Subtitle = styled.h3`
  margin-bottom: 50px;
  margin-top: 18px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  font-weight: 300;
  color: ${(props) => props.color};
  z-index: 2;
  cursor: default;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #da140a;
    font-weight: 600;
  }
`;

const Description = styled.p`
  margin-bottom: 50px;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 28px;
  width: 90%;
  color: ${(props) => props.color};
  cursor: default;
  z-index: 2;
`;

const BuyContainer = styled.div`
  display: flex;
  height: 70px;
  max-width: 90%;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #f3f3f3;
  border-radius: 8px;
  z-index: 2;
  cursor: default;
`;

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const PrevPrice = styled.h1`
  padding-left: 35px;
  font-size: 26px;
  font-weight: 300;
  color: #da140a;
  text-decoration: line-through;

  &:hover {
    text-decoration: none;
  }
`;

const CurrPrice = styled.h1`
  padding-left: 35px;
  font-size: 34px;
  color: ${(props) => props.color};
`;

const Button = styled.button`
  text-align: center;
  height: 100%;
  width: 35%;
  font-size: 18px;
  background-color: #f3f3f3;
  cursor: pointer;
  outline: none;
  border: none;
  border-left: 2px solid #f3f3f3;
  color: #292929;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.5s ease;

  &:hover  {
    background-color: transparent;
    color: #da140a;
    font-weight: 800;
    width: 50%;
    font-size: 20px;
  }
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: "45px" }} />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide background={item.background} key={item.id}>
            <ImageContainer>
              <Image src={item.image} />
            </ImageContainer>
            <InfoContainer>
              <Title color={item.color}>{item.title}</Title>
              <Subtitle color={item.color}>{item.subtitle} </Subtitle>
              <Description color={item.color}>{item.description}</Description>
              <BuyContainer>
                <PriceContainer>
                  <CurrPrice color={item.color}>{item.currPrice} €</CurrPrice>
                  <PrevPrice>{item.prevPrice}</PrevPrice>
                </PriceContainer>
                <Button color={item.color}>{item.buttonLabel}</Button>
              </BuyContainer>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ fontSize: "45px" }} />
      </Arrow>
    </Container>
  );
}

export default Slider;

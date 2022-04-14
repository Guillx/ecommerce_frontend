import { Send } from "@material-ui/icons";
import styled from "styled-components";
import SectionTitle from "../section-title/SectionTitle";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 50px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  outline: none;
  background-color: #292929;
  color: white;
  cursor: pointer;
`;

function Newsletter() {
  return (
    <Container>
      <SectionTitle sectionTitle="Boletín informativo" />
      <Description>
        Recibe las últimas novedades sobre nuevas colecciones, próximos
        lanzamientos, premios, sorteos, etc.
      </Description>
      <InputContainer>
        <Input placeholder="Escribe tu email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;

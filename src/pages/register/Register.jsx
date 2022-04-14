import styled from "styled-components";
import ImgBg from "../../assets/images/global/forms-bg.jpeg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${ImgBg});
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 50px;
  background-color: #292929c8;
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
  color: #f3f3f3;
  text-align: center;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  font-size: 16px;
  margin: 30px 10px 0 0;
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 8px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 30px 0;
  font-weight: 400;
  line-height: 22px;
  color: #f3f3f3;
`;

const Button = styled.button`
  width: 40%;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 0px 10px #f3f3f3;
  padding: 15px 20px;
  background-color: #292929;
  border-radius: 8px;
  color: #f3f3f3;

  &:hover {
    background-color: #292929cf;
  }
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Crear cuenta</Title>
        <Form>
          <Input placeholder="Nombre" type="text" />
          <Input placeholder="Apellidos" type="text" />
          <Input placeholder="Nombre de usuario" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Contraseña" type="password" />
          <Input placeholder="Confirmar contraseña" type="password" />
          <Agreement>
            Al crear una cuenta, confirmas que has leido los términos y
            condiciones legales y das tu consentimiento a esta entidad para
            tratar tus datos de acuerdo a nuestra <b>POLÍTICA DE PRIVACIDAD</b>.
          </Agreement>
          <Button>Registrarme</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;

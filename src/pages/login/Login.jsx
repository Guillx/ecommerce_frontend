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
  width: 20%;
  height: 48vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  background-color: #292929c8;
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 900;
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

const Button = styled.button`
  width: 40%;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 0px 10px #f3f3f3;
  padding: 15px 20px;
  background-color: #292929;
  border-radius: 8px;
  color: #f3f3f3;
  margin: 40px 0;

  &:hover {
    background-color: #292929cf;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: #f3f3f3;
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Iniciar Sesión</Title>
        <Form>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Contraseña" type="password" />
          <Button>Entrar</Button>
          <Link>¿Has olvidado la contraseña?</Link>
          <Link>Crear una cuenta</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;

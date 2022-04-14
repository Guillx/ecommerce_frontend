import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 900;
`;

function SectionTitle({ sectionTitle }) {
  return (
    <Container>
      <Title>{sectionTitle}</Title>
    </Container>
  );
}

export default SectionTitle;

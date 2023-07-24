import styled from "styled-components";
import { GiBookshelf } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <LogoHold>
            <Logo>
              <GiBookshelf size={30} />
            </Logo>
            <LogoText style={{ color: "white", fontWeight: "bolder" }}>
              Summarit
            </LogoText>
          </LogoHold>

          <DivHold>
            <DivH>Authors</DivH>
            <DivT>William Shakespare</DivT>
            <DivT>Wole Soyinka</DivT>
            <DivT>Chinua Achebe</DivT>
            <DivT>Mille Richard</DivT>
          </DivHold>

          <DivHold>
            <DivH>Categories</DivH>
            <DivT>Tragedy</DivT>
            <DivT>Romance</DivT>
            <DivT>Comedy</DivT>
            <DivT>Fact</DivT>
          </DivHold>

          <DivHold>
            <DivH style={{ fontSize: "17px" }}>Address</DivH>
            <DivT style={{ fontSize: "12px" }}>
              Ago-Hausa, Apapa Lagos, Nigeria
            </DivT>
            <DivT style={{ fontSize: "14px" }}>kossyuzoigwe@gmail.com</DivT>
          </DivHold>
        </Main>
      </Container>
    </div>
  );
};

export default Footer;
const DivT = styled.div`
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;
`;

const DivH = styled.div`
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
`;

const DivHold = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin-left: 60px;
`;

const LogoText = styled.div`
  font-family: Nova Oval;
  margin-left: 6px;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  border-radius: 50%;
  color: green;
  background-color: white;
`;

const LogoHold = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 150px;
  cursor: pointer;
`;

const Main = styled.div`
  width: 93%;
  height: auto;
  display: flex;
  background-color: black;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

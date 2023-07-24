import React, { useState } from "react";
import styled from "styled-components";
import { GiBookshelf } from "react-icons/gi";
import ButtonProps from "../ReUse/ButtonProps";

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  return (
    <div>
      {scroll ? (
        <Container bg="#F9F8F6">
          <Main>
            <LogoHold>
              <Logo>
                <GiBookshelf size={30} />
              </Logo>
              <LogoText style={{color: "black", fontWeight: "bolder"}}>Summarit</LogoText>
            </LogoHold>
            <CTA>
              <ButtonProps
                text="SignIn"
                bg="green"
                col="white"
                link="/auth/signin"
                hbg="black"
                hcol="white"
                
              />
              <ButtonProps
                text="SignUp"
                link="/auth/signup"
                bg="green"
                hbg="black"
                hcol="white"
                col="white"
              />
            </CTA>
          </Main>
        </Container>
      ) : (
        <Container bg="transperent">
          <Main>
            <LogoHold>
              <Logo>
                <GiBookshelf size={30} />
              </Logo>
              <LogoText style={{color: "white"}}>Summarit</LogoText>
            </LogoHold>
            <CTA>
              <ButtonProps
                text="SignIn"
                bg="white"
                col="green"
                link="/auth/signin"
                hbg="darkgrey"
                hcol="black"
              />
              <ButtonProps
                text="SignUp"
                link="/auth/signup"
                bg="white"
                hbg="darkgrey"
                col="green"
                hcol="black"
              />
            </CTA>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default FirstHeader;

const CTA = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-between;
`;

const LogoText = styled.div`
  font-family: Nova Oval;
  color: green;
  margin-left: 6px;
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

`;

const Main = styled.div`
  width: 94%;
  height: 60px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div<{ bg: string }>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  align-items: center;
  position: fixed;
  transition: all 500ms;
  z-index: 10;
`;

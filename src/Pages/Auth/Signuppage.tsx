import styled from "styled-components";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import ButtonProps from "../../Components/ReUse/ButtonProps";

const Signuppage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <HiUserGroup color="white" size={80} />
          </Top>
          <Up>
            <Left to="/auth/signup">Register</Left>
            <Left to="/auth/signin">Login</Left>
          </Up>
          <Mid>
            <Input placeholder="Enter Username" type="text" />
            <Input placeholder="Enter Name" type="text" />
            <Input placeholder="Enter Email" type="text" />
            <Input placeholder="Enter Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
          </Mid>
          <Check>
            <input type="checkbox" />
            By checking this box, you accept the terms and condition
          </Check>
          <Hold>
            <ButtonProps text="Signup" bg="green" col="white" hbg="grey" />
          </Hold>
          <All>
            Already have an account? <Nav to="/auth/signin">Signin</Nav>
          </All>
        </Main>
      </Container>
    </div>
  );
};

export default Signuppage;
const All = styled.div`
font-size: 14px;
margin-top: 15px;
`;

const Nav = styled(Link)`
text-decoration: none;
`;

const Check = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Hold = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  width: 80%;
  height: 35px;
  background-color: #e6e6e6;
  border-radius: 20px;
  border: none;
  margin-top: 15px;
  outline: none;
  padding-left: 10px;

  ::placeholder {
    text-align: center;
  }
`;

const Mid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Left = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const Up = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Top = styled.div`
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000); /*IE 5.5-7*/
  width: 120px;
  height: 100px;
  border-radius: 15px 15px 100px 100px;
  border: 1px solid black;
  margin-top: -40px;
  border: none;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  height: 450px;
  border-radius: 10px;
  background: white;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000); /*IE 5.5-7*/
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f8f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

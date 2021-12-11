import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  border: 1px solid white;
  background: black;
  width: 100%;
  height: 65px;
`;
const Logo = styled.div`
  position: absolute;
  left: 30px;
  top: 10px;

  @media screen and (max-width: 792px) {
    display: none;
    visibility: hidden;
  }
`;
const Div = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  font-size: 18px;

  @media screen and (max-width: 792px) {
    font-size: 12px;
  }
`;
const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Logo>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/08/13/b6/ec/veda-indian-cuisine.jpg"
            width="50"
            alt="img"
            style={{ borderRadius: "50%" }}
          />
        </Logo>
        <Div
          style={{
            right: "300px",
            background: "#01BCD4",
            padding: "10px",
            top: "13px",
            borderRadius: "5px",
            fontSize: "12px"
          }}
        >
          TRY VEDAS
        </Div>
        <Div style={{ right: "200px" }}>Learn</Div>
        <Div style={{ right: "100px" }}>Resources</Div>
        <Div>About</Div>
      </Wrapper>
    </>
  );
};

export default Navbar;

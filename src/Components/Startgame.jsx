import React from "react";
import styled from "styled-components";
import { Button } from "../button/button";
const Startgame = ({toggle}) => {
  return (
    <>
      <Container className="Main_con">
        <div>
          <img src="/Images/dices 1.png" alt="img" />
        </div>

        <div className="Dice_game">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
};

export default Startgame;



const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0px auto;
  align-items: center;

  .Dice_game {
    h1 {
      font-size: 96px;
    }
  }
`;

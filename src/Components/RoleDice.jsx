import React from 'react';
import styled from 'styled-components';

const RoleDice = ({currentDice,roleDice }) => {



  

  return (
    <DiceContainer>
      <div className='Dice' onClick={roleDice}>
      <img src={`Images/Dice/dice_${currentDice}.png`} alt='dice'/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer =styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 48px;
   cursor: pointer;

   p{
    font-size: 24px;
    font-weight: 400px;
    gap: 20px;
   }
`;
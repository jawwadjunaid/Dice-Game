import React from 'react';
import styled from 'styled-components';
const Rules = () => {
  return (
    <RulesContainer>
        <h1> How To Play Dice Game</h1>
        <div className='pop'> 
      <p>Select any Number</p>
      <p>Click on dice image</p>
      <p>After Click on dice if selected number is equal to dice number you will get some point as dice
        if you get wrong guess then 2 point will be deducted </p></div>
     
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
background-color: #FBF1F1;
max-width: 800px;
margin: 0 auto;
margin-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
.pop{
    display: flex;
    flex-direction: column;
    align-items:first baseline;
}
`;
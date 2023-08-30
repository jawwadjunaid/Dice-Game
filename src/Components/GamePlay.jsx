import React from "react";
import TotalScore from "./TotalScore";
import NumScore from "./NumScore";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../button/button";
import Rules from "./Rules"
const GamePlay = () => {
     
     const [score, setScore] = useState(0);
   
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [ruleSet, setruleSet] = useState(false);
 
  const generateRandomNum=(min,max)=>{
    //console.log(Math.floor(Math.random()*(max-min) + min))
    return Math.floor(Math.random()*(max-min) + min);
  
  
  }
  

  const resetScore=()=>{
    setScore(0);
  }

  const roleDice=()=>{
    if(!selectedNumber){
      setError("You have not selected any number..!!");
      return;
    }
   
    const randomNum= generateRandomNum(1,7);
    setCurrentDice((prev)=>randomNum);
    
    if(selectedNumber === randomNum){
      setScore((prev)=>prev + randomNum);
     }
      else{
        setScore((prev)=> prev - 2);
      }
      
      setselectedNumber({undefined})
    };
     
   


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumScore
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
    <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button onClick={()=> setruleSet((prev)=> !prev)}>{ 
        ruleSet ? "hide" : "Show"
        } Rules</Button>
      
    </div>
    {ruleSet && <Rules />}
    </MainContainer>
    
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;

    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   
  }
`;

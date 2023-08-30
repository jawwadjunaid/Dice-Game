import React from 'react';

import styled from 'styled-components';
const NumScore = ({setError,error,selectedNumber,setselectedNumber}) => {
    const arrNum=[1,2,3,4,5,6];
    
const errorEventHander=(value)=>{
  setselectedNumber(value)
  setError("");
}

  return (
    
    
    <NumSelectorContainer>
    <p className='error'>{error}</p>
       <div className='flex'>
       {arrNum.map((value, i)=>(
            <Box 
            isSelected={value === selectedNumber}
            key={i} 
            onClick={()=>errorEventHander(value)}>{value}</Box>
        ))}
        
       </div>
       <p>Select Number</p>
  
    </NumSelectorContainer>
    
  );
}

export default NumScore;

const NumSelectorContainer= styled.div`
display: flex;
flex-direction: column;
align-items: end;

.error{
  color: red;
}

.flex{
    display: flex;
    gap:24px;

}
.p{
    font-size: 24px;
    font-weight: 700px;
}
`;


const Box = styled.div`
    height:72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size:24px;
    font-weight: 700px;
    background-color: ${(props)=> (props.isSelected ? "black" : "white")};
    color: ${(props)=> (!props.isSelected ? "black" : "white")}
`;
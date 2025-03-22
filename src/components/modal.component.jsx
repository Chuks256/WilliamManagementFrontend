
import styled from "styled-components"
import { useState } from "react";

const ModalParentContainer=styled.div`
position:absolute;
top:0;
left:0;
background:rgba(0, 0, 0, 0.43);
width:100%;
height:100%;
z-index:1;
display:none;
backdrop-filter:blur(3px);
justify-content:center;
`;

const ModalBoxContainer = styled.div`
padding:50px;
background:ivory;
height:300px;
width:340px;
border-radius:10px;
margin:150px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:1em;
transition:linear,500ms;
`;

const ModalTxtParentContainer = styled.div`
text-align:center;
`;

const ModalExitButton = styled.button`
margin-top:120px;
padding:10px;
width:250px;
border-radius:20px;
cursor:pointer;
background:var( --theme-primary-theme-color);
font-weight:bold;
`;


let ModalComponent=(props)=>{
    let HandleCloseBtn=()=>{
       let modal_id=document.querySelector("#modal_box");
       modal_id.style.display="none"
    }
return(
    <>
    {
            <ModalParentContainer id="modal_box">
            <ModalBoxContainer>
                <ModalTxtParentContainer>{props.msg}</ModalTxtParentContainer>
                <ModalExitButton onClick={HandleCloseBtn}>Close</ModalExitButton>
            </ModalBoxContainer>
        </ModalParentContainer>
       
    }
    </>
)
}

export default ModalComponent 
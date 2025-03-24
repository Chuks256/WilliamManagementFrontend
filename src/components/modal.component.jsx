
import styled from "styled-components"
import { useState } from "react";

const ModalParentContainer=styled.div`
position:absolute;
top:0;
left:0;
background:rgba(0, 0, 0, 0.43);
width:100%;
height:100%;
display:none;
backdrop-filter:blur(3px);
justify-content:center;
`;

const ModalBoxContainer = styled.div`
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
@media(max-width:768px){
display:none;    
}
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

const BottomSheetParentContainer = styled.div`
position:absolute;
background:ivory;
height:550px;
width:100%;
bottom:0;
border-radius:20px 20px 0px 0px;
display:none;

@media(max-width:768px){    
display:block;
}
`;

const BottomParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:35px;
`;

const BottomSheetLogoParentContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:1em;
`;

const BottomSheetLogoContainer = styled.div`
font-size:30px;
background:var(--theme-primary-theme-color);
padding:15px;
border-radius:100px;
text-align:center;
justify-content:center;
align-items:center;
`;
const BottomSheetTitle = styled.h3`
font-size:20px;
`;
const ParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:0.6em;
`;

const BottomSheetContentContainer = styled.div``;

const CloseBottomSheetBtn=styled.button`
padding:17px;
font-size:15px;
font-weight:bold;
border-radius:10px;
width:320px;
margin-top:260px;
color:var(--theme-sub-color);
background:var(--theme-primary-theme-color);
`;

let ModalComponent=(props)=>{
    let HandleCloseBtn=()=>{
       let modal_id=document.querySelector("#modal_box");
       modal_id.style.display="none"
    }
return(
    <>
    
            <ModalParentContainer id="modal_box">
            <ModalBoxContainer>
                <ModalTxtParentContainer>{props.msg}</ModalTxtParentContainer>
                <ModalExitButton onClick={HandleCloseBtn}>Close</ModalExitButton>
            </ModalBoxContainer>

            {/* BOTTOM SHEET CONTAINER  */}
            <BottomSheetParentContainer>
                <BottomParentContainer>
                
                <ParentContainer>
                <BottomSheetLogoParentContainer>
                        <BottomSheetLogoContainer>🚩</BottomSheetLogoContainer>
                        <BottomSheetTitle>Incorrect Credential</BottomSheetTitle>
                    </BottomSheetLogoParentContainer>
                    <BottomSheetContentContainer>The data you provided is incorrect</BottomSheetContentContainer>
                </ParentContainer>
                <CloseBottomSheetBtn onClick={HandleCloseBtn}>Close</CloseBottomSheetBtn>
                </BottomParentContainer>
            </BottomSheetParentContainer>

        </ModalParentContainer>

    
    </>
)
}

export default ModalComponent 
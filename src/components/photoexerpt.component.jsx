
import styled from "styled-components";
import hustle from "../assets/hustle.jpg"
import lagos from "../assets/lagos.jpg"
import bustle from "../assets/bustle.jpg"

const PhotoexerptContainer = styled.div`
display:flex;
justify-content:center;
margin-top:50px;
flex-direction:column;
align-items:center;
gap:2em;
justify-content:center;
`;

const PhotoExerptHeader = styled.h2`
font-size:40px;
color:var(--theme-sub-color);
`;
const PhotoLayoutContainer = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr; /* Big image takes twice the space */
  grid-template-rows: auto; /* Only one row needed, but can be adjusted */
  gap: 10px;
  max-width: 800px; /* Optional: Limit grid width */
  margin: 0 auto; /* Optional: Center grid */
`;

const PhotoOne=styled.div`
width:300px;
background-position:center;
background-color:grey;
height:450px;
background-image:url(${bustle});
border-radius:15px;
  grid-column: 1; /* Place in the first column */
  grid-row: 1 / 3;
  background-repeat:no-repeat;
  background-size:cover;
`;

const PhotoTwo=styled.div`
background-possition:center;
background-image:url(${hustle});
background-color:grey;
width:250px;
height:192px;
border-radius:15px;
background-size:cover;
background-repeat:no-repeat;
`;

const PhotoThree=styled.div`
background-position:center;
background-image:url(${lagos});
background-color:grey;
width:250px;
height:250px;
border-radius:15px;
background-repeat:no-repeat;
background-size:cover;
`;


const Photoexerpt=()=>{
    return(
        <>
        <PhotoexerptContainer>
            <PhotoExerptHeader>Photo Exerpt of the Community</PhotoExerptHeader>
            <PhotoLayoutContainer>
                <PhotoOne></PhotoOne> 
                <PhotoTwo></PhotoTwo>
                <PhotoThree></PhotoThree>
            </PhotoLayoutContainer>
        </PhotoexerptContainer>
        </>
    )
}

export default Photoexerpt;


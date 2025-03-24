import styled from "styled-components";
import lagos from "../assets/lagos.jpg"
import inverse_logo from "../assets/inverse_logo.png"
import { useState } from "react";
import ModalComponent from "../components/modal.component";

const SignupParentContainer = styled.div`
display:flex;
justify-content:space-between;
`;

const SignupSidebarParentContainer =styled.div`
padding:30px;
background:grey;
width:50vw;
height:679px;
position:absolute;
right:0;
background-image:url(${lagos});
background-position:center;
background-size:cover;
`;

const SignupSubContainer=styled.div`
padding-top:33px;
margin-left:130px;
`;

const FormParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:1em;
`;

const SignupHeaderContainer =styled.div`
display:flex;
align-items:left;
flex-direction:column;
gap:20px;
`;

const SignupHeaderTxt=styled.h3`
color:var( --theme-sub-color);
font-size:16px;
`;

const SignupLogoContainer =styled.div`
display:flex;
align-items:center;
gap:10px;
`;

const SignupLogo = styled.img``;
const SignupLogoTxt = styled.h3`
color:var( --theme-sub-color);
`;

const SignupFormSubContainer = styled.div`
display:flex;
flex-direction:column;
gap:1em;
`;

const InputElemParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;

const InputPropsElem= styled.span`
color:var(--theme-sub-color);
font-weight:bold;
font-size:16px;
`;

const FirstNameInput=styled.input`
text-align:center;
padding:15px;
border-radius: 5px;
border-style:solid;
border-color:transparent;
width:320px;
font-size:14px;
outline:none;
background:var(--input-element-color);
`;

const LastNameInput=styled.input`
text-align:center;
padding:15px;
border-radius: 5px;
border-style:solid;
border-color:transparent;
width:320px;
font-size:14px;
outline:none;
background:var(--input-element-color);
`;

const ProfessionInput=styled.input`
text-align:center;
padding:15px;
border-radius: 5px;
border-style:solid;
border-color:transparent;
width:320px;
font-size:14px;
outline:none;
background:var(--input-element-color);
`;

const EmailInput = styled.input`
text-align:center;
padding:15px;
border-radius: 5px;
border-style:solid;
border-color:transparent;
width:320px;
font-size:14px;
outline:none;
background:var(--input-element-color);
`;

const PhoneInput = styled.input`
text-align:center;
padding:15px;
border-radius: 5px;
border-style:solid;
border-color:transparent;
width:320px;
font-size:14px;
outline:none;
background:var(--input-element-color);
`;

const LandLordNameInput = styled.input`
text-align:center;
padding:15px;
border-radius: 5px;
border-style:solid;
border-color:transparent;
width:320px;
font-size:14px;
outline:none;
background:var(--input-element-color);
`;

const DateoFBirthInput = styled.input`
text-align:center;
padding:15px;
border-radius: 5px;
border-style:solid;
border-color:transparent;
width:320px;
font-size:14px;
outline:none;
background:var(--input-element-color);
`;

const HomeAddressInput = styled.input`
text-align:center;
padding:15px;
border-radius: 5px;
border-style:solid;
border-color:transparent;
width:320px;
font-size:14px;
outline:none;
background:var(--input-element-color);
`;

const NextBtn=styled.button`
background:var(--theme-sub-color);
padding:15px;
width:320px;
font-size:14px;
font-weight:bold;
color:var(--theme-background);
border-radius:5px;
cursor:pointer;
transform:scale(100%);
transition:linear,300ms;

&:focus{
transform:scale(90%);
}
`;

const NextBtnContainer = styled.div`
display:flex;
flex-direction:column;
gap:0.7em;
`;

const SignupDataBtn = styled.button`
background:var(--theme-sub-color);
padding:15px;
width:320px;
font-size:14px;
font-weight:bold;
color:var(--theme-background);
border-radius:5px;
cursor:pointer;
transform:scale(100%);
transition:linear,300ms;

&:focus{
transform:scale(90%);
}
`;

const BackBtn = styled.button`
background:var(--theme-primary-theme-color);
color:var(--theme-sub-color);
padding:15px;
width:320px;
font-size:14px;
font-weight:bold;
border-radius:5px;
cursor:pointer;
transform:scale(100%);
transition:linear,300ms;

&:focus{
transform:scale(90%);
}
`;

const BtnContainer = styled.div`
margin-top:20px;
`;


const NextSectionContainer = styled.div`
display:flex;
flex-direction:column;
gap:1.2em;
`;


let Signuppage=()=>{
    const [proceedToNextPage,setProceedToNextPage]=useState(false);

    // function for handling next page 
    const handleNavBtnActivity=()=>{
        if(proceedToNextPage===false){
            setProceedToNextPage(true);
        }
        else
        if(proceedToNextPage===true){
            setProceedToNextPage(false);
        }
    }



    return(
        <>
        <SignupParentContainer>
            <SignupSubContainer>
            <FormParentContainer>

                <SignupHeaderContainer>
                <SignupLogoContainer>
                <SignupLogo alt="signup logo icon" src={inverse_logo} />
                <SignupLogoTxt>Deflow</SignupLogoTxt>
               </SignupLogoContainer>
               <SignupHeaderTxt>Get started and become part of something greater ⚡</SignupHeaderTxt>
                </SignupHeaderContainer>

                {proceedToNextPage===false?(
                    <>
                    {/* signup form container begining  */}
                <SignupFormSubContainer>
                {/* first name section  */}
                <InputElemParentContainer>
                <InputPropsElem>First Name *</InputPropsElem>
                <FirstNameInput  placeholder="your first name" />
                </InputElemParentContainer>

                {/* last name section */}
                <InputElemParentContainer>
                <InputPropsElem>Last Name *</InputPropsElem>
                <LastNameInput  placeholder="your Last name" />
                </InputElemParentContainer>

                {/* email section */}
                <InputElemParentContainer>
                <InputPropsElem>Email *</InputPropsElem>
                <EmailInput  placeholder="xxx@gmail.com" type="email" />
                </InputElemParentContainer>

                
                {/* phone section */}
                <InputElemParentContainer>
                <InputPropsElem>Phone *</InputPropsElem>
                <PhoneInput  placeholder="234 000 000" type="number" />
                </InputElemParentContainer>

                {/* button container begining */}
                <BtnContainer>
                    <NextBtn onClick={handleNavBtnActivity}>Next</NextBtn>                
                </BtnContainer>
                {/* button container ending  */}
            
            </SignupFormSubContainer>
            {/* signup form container ending  */}
                </>
                ):(
                    <>                    
                {/* next section begining  */}
            <NextSectionContainer>
                {/* Date of birth section */}
                <InputElemParentContainer>
           <InputPropsElem>DOB</InputPropsElem>
           <DateoFBirthInput  placeholder="Your Date of bith" />
           </InputElemParentContainer>

                {/* Home address section */}
                <InputElemParentContainer>
           <InputPropsElem>Home address *</InputPropsElem>
           <HomeAddressInput  placeholder="Your home address" />
           </InputElemParentContainer>
           
                {/* Landlord address */}
                <InputElemParentContainer>
           <InputPropsElem>Landlord Name *</InputPropsElem>
           <LandLordNameInput  placeholder="your Landlord Name" />
           </InputElemParentContainer>

           {/* profession  */}
           <InputElemParentContainer>
           <InputPropsElem>Profession *</InputPropsElem>
           <ProfessionInput  placeholder="Your profession" />
           </InputElemParentContainer>


           {/* next button container  begining  */}
           <NextBtnContainer>
               <SignupDataBtn >Signup</SignupDataBtn>
               <BackBtn onClick={handleNavBtnActivity}>Back</BackBtn>           
           </NextBtnContainer>
           {/* next button container ending  */}

       </NextSectionContainer>
       {/* next section ending  */}         
                     </>
                )}

               </FormParentContainer>
            </SignupSubContainer>

            <SignupSidebarParentContainer></SignupSidebarParentContainer>
        </SignupParentContainer>
        <ModalComponent />
        </>
    )
}

export default Signuppage;
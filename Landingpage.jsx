
import styled from "styled-components"
import landing_theme from "./src/assets/landing_theme.png";
import Navbarcomponent from "./src/components/navbar.component";
import { PiMouseScroll } from "react-icons/pi";
import bustle from "./src/assets/bustle.jpg";
import hustle from "./src/assets/hustle.jpg"
import Photoexerpt from "./src/components/photoexerpt.component"
import FooterComponent from "./src/components/footer.component";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import ModalComponent from "./src/components/modal.component";

const ParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:2em;
`;

const HeaderContainer = styled.div`
background-image:url('${landing_theme}');
height:100vh;
width:100vw;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
align-items:center;
flex-direction:column;
`;

const HeaderParentContainer = styled.div`
margin-top:150px;
display:flex;
flex-direction:column;
gap:2.5em;
justify-content:center;
align-items:center;
`;

const HeaderTxtContainer = styled.div`
width:700px;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
gap:1em;
`;

const HeaderMainTxt = styled.h1`
color:var(--theme-primary-theme-color);
font-size:53px;
`;

const HeaderSubTxt =styled.div`
font-size:20px;
color:ivory;
display:flex;
width:350px;
`;

const CtaParentContainer =styled.div`
display:flex;
gap:3em;
`;

const CtaSignupBtn = styled.button`
padding:15px;
border-radius:8px;
background:var(--theme-sub-color);
color:var(--theme-primary-theme-color);
font-weight:bold;
cursor:pointer;
`;

const CtaLearnMoreBtn = styled.button`
border-radius:8px;
padding:11px;
font-weight:bold;
color:var(--theme-primary-theme-color);
background:transparent;
cursor:pointer;
`;

const ScrollContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:2em;
margin-top:100px;
`;

const ScrollIconContainer = styled.div`
`;

const ScrollTxt=styled.p`
color:ivory;
font-weight:bold;
font-size:16px;
`;

const InfoParentContainer = styled.div`
display:flex;
justify-content:center;
margin-top:60px;
align-items:center;
flex-direction:column;
`;

const InfoIntroMainTxt = styled.h1`
font-size: 50px;
color:var(--theme-sub-color);
width:650px;
text-align:center;
`;

const InfoSubContainer = styled.div`
display:flex;
flex-direction:column;
margin-top:80px;
gap:6em;
`;

const InfoOneContainer = styled.div`
display:flex;
gap:4em;
`;

const InfoTxtContainer = styled.div`
width:400px;
text-align:right;
display:flex;
flex-direction:column;
gap:1em;
align-items:center;
justify-content:center;
`;

const InfoTxtHeader=styled.h2``;

const InfoTxtDetails = styled.p`
font-size:15px;
width:400px;
`;

const InfoTwoContainer = styled.div`
display:flex;
flex-direction:row-reverse;
gap:6em;
`;

const ImgOne = styled.div`
background-image:url(${bustle});
width:350px;
height:350px;
border-radius:10px;
background-position:center;
background-size:cover;
`;

const ImgTwo = styled.div`
background-image:url(${hustle});
width:350px;
height:350px;
border-radius:10px;
background-position:center;
background-size:cover;
`;



let Landingpage=()=>{
    let defineNavigationObj = useNavigate();
    const [modalMsg,setModalMsg]=useState("");
    const api={
        live_api:"https://williamscommunitymanagementapi.onrender.com/api/isServerActive", // live api 
        dev_api:"http://localhost:3304/api/isServerActive" // api for development 
    }
    window.onload=async()=>{
        let modal_box=document.querySelector("#modal_box");
          let apiHelperMethod = await fetch(api.dev_api);
     let apiFeedback= await apiHelperMethod.json();
     if(! apiFeedback.msg){
        modal_box.style.display='flex';
        setModalMsg('Server is currently down 🚧 ')
     }
    }
   

    let handleBtnClick=()=>{
        defineNavigationObj("/Signup")
    }

    return (
        <>
        <ParentContainer>
            {/* define header container beginning  */}
            <HeaderContainer>
                
                <Navbarcomponent />
                <HeaderParentContainer>
                    <HeaderTxtContainer>
                        <HeaderMainTxt>Building a Connected and Secured Community</HeaderMainTxt>
                        <HeaderSubTxt>Get started and join a connected and secured community</HeaderSubTxt>
                    </HeaderTxtContainer>
                    {/* cta section begingin */}
                    <CtaParentContainer>
                        <CtaSignupBtn onClick={handleBtnClick}>Get Started</CtaSignupBtn>
                        <CtaLearnMoreBtn>Learn More</CtaLearnMoreBtn>
                    </CtaParentContainer>
                    {/* cta ending  */}
                </HeaderParentContainer>
                
                {/* scroll container beginging */}
                <ScrollContainer>
                    <ScrollIconContainer>
                    <PiMouseScroll size={35} style={{
                    color:"ivory"
                }} />
                    </ScrollIconContainer>
               
                   <ScrollTxt>Scroll Down</ScrollTxt>
                </ScrollContainer>
                {/* scroll container ending  */}
              
            </HeaderContainer>
            {/* define header container ending  */}
           
             {/* -------------------------------------------- */}
            {/* info parent section begining */}
            <InfoParentContainer>
            <InfoIntroMainTxt> Building a Connected And Secured Community </InfoIntroMainTxt> 
            <InfoSubContainer>
                
                {/* info one container  */}
                <InfoOneContainer>
                    <ImgOne></ImgOne>
                    <InfoTxtContainer >
                        <InfoTxtHeader >Become part of a secured and connected community</InfoTxtHeader>
                        <InfoTxtDetails>lormen ipsum iptsum lorm iptum lormen ipsum iptsum lorm iptum sremlormen ipsum iptsum lorm i</InfoTxtDetails>
                    </InfoTxtContainer>
                </InfoOneContainer>

                {/* info two container  */}
                <InfoTwoContainer>
                <ImgTwo></ImgTwo>
                    <InfoTxtContainer style={{textAlign:'left'}}>
                        <InfoTxtHeader>Become part of a secured and connected community</InfoTxtHeader>
                        <InfoTxtDetails>lormen ipsum iptsum lorm iptum lormen ipsum iptsum lorm iptum sremlormen ipsum iptsum lorm i</InfoTxtDetails>
                    </InfoTxtContainer>
                </InfoTwoContainer>
              </InfoSubContainer>
            </InfoParentContainer>
            {/* info  parent section ending  */}
            {/* --------------------------------------------- */}
            {/* photo exerpt section beginging */}
            <Photoexerpt />
            {/* photo exerpt section ending */}

            {/* --------------------------------------------------------------------- */}
            {/* footer section begining  */}

            {/* footer section ending  */}
        </ParentContainer>
        <FooterComponent />
        <ModalComponent msg={modalMsg} />
        </>
    )
}

export default Landingpage 
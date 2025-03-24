
import styled from "styled-components";
import logo from "../assets/logo.png"

const FooterParentContainer = styled.div`
position:absolute;
left:0;
margin-top:50px;
width:100vw;
height:300px;
background:var(--theme-sub-color);
`;

const FooterContentContainer = styled.div`
margin-top:50px;
margin-left:10em;


@media(max-width:768px){
    margin-left:2em;  
    margin-top:50px;
    }
`;

const FooterLogoContainer = styled.div`
display:flex;
align-items:center;
gap:0.5em;
`;

const FooterLogoTxt = styled.h2`
font-size:16px;
color:var( --theme-primary-theme-color);
`;

const FooterLogo = styled.img`
width:30px;
`;

const FooterParentLogoContainer = styled.div`
display:flex;
flex-direction:column;
gap:1em;
`;

const FooterLogoDetails = styled.p`
color:var(--theme-primary-theme-color);
font-size:14px;


@media(max-width:768px){
    font-size:13px;
    width:250px;  
    }
`;


const FooterComponent =()=>{
    return (
        <>
        <FooterParentContainer>
            <FooterContentContainer>
                <FooterParentLogoContainer>
                <FooterLogoContainer>
                    <FooterLogo src={logo} />
                    <FooterLogoTxt>Deflow</FooterLogoTxt>
                </FooterLogoContainer>
                <FooterLogoDetails>Building a Secured and Connected Community</FooterLogoDetails>
                </FooterParentLogoContainer>
               
            </FooterContentContainer>
        </FooterParentContainer>
        </>
    )

}

export default FooterComponent;
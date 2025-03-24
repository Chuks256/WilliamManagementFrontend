
import styled from "styled-components";
import logo from "../assets/logo.png"
import { useNavigate,Link } from "react-router-dom";


const NavbarLogo=styled.img`
width:27px;
`;

const NavbarParentContainer = styled.div`
align-items:center;
padding-top:30px;
position:fixed;
`;


const NavbarModalContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:5em;
padding:15px;
background:var(--theme-sub-color);
border-radius:100px;
width:40vw;

@media(max-width:768px){
padding:13px;
width:80vw;
}
`;

const NavLogoTxt=styled.h3`
color:ivory;
font-size:18px;
`;

const NavbarLogoContainer = styled.div`
display:flex;
align-items:center;
gap:0.6em;
`;

const NavbarItemsContainer = styled.ul`
display:flex;
align-items:center;
gap:2em;
margin-left:16px;
justify-content:center;
color:var(--theme-primary-theme-color);

@media(max-width:768px){
display:none;
}


`;

const NavbarItems = styled.li`
`;

const SigninButton = styled.button`
padding:9px;
border-radius:8px;
width:80px;
font-weight:bold;
background:var(--theme-primary-theme-color);
cursor:pointer;
color:var(--theme-sub-color);
`;

const NavbarLink=styled.a`
font-size:15px;
`

let Navbarcomponent =()=>{
    let navigateObj = useNavigate();

    //  function to handle navbar signin btn click action 
    let handleNavBtnClickAction = ()=>{
        navigateObj("/Signin");
    }

    return (
        <>
        <NavbarParentContainer>
            <NavbarModalContainer>
                    <NavbarLogoContainer>
                    <NavbarLogo src={logo} alt="logo" />
                    <NavLogoTxt>Deflow</NavLogoTxt>
                    <NavbarItemsContainer>
                            <NavbarItems><NavbarLink href="/">Home</NavbarLink></NavbarItems>
                            <NavbarItems><NavbarLink href="#About">About</NavbarLink></NavbarItems>
                            <NavbarItems><NavbarLink href="#News">News</NavbarLink></NavbarItems>
                        </NavbarItemsContainer>
                    </NavbarLogoContainer>
                        <SigninButton onClick={handleNavBtnClickAction}>Sign in</SigninButton>
            </NavbarModalContainer>
        </NavbarParentContainer>        
        </>
    )

}

export default Navbarcomponent; 
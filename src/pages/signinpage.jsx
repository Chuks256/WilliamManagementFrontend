
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import City from "../assets/City.png";
import inverse_logo from "../assets/inverse_logo.png";
import { useEffect,useState } from "react";
import ModalComponent from "../components/modal.component";

const ParentContainer = styled.div`
display:flex;
justify-content:space-between;

@media(max-width:768px){
justify-content:center;
}

`;

const FormParentContainer = styled.div`
margin-left:100px;
margin-top:50px;

@media(max-width:768px){
margin-left:0px; 
}
`;

const FormOfficialLogo = styled.img`
width:30px;
`;
const FormLogoContainer = styled.div`
display:flex;
align-items:center;
gap:0.5em;
`;

const FormLogoTxt = styled.h2`
font-size:18px;
`;

const FormHeaderParentContainer = styled.div `
display:flex;
flex-direction:column;
align-items:left;
gap:2em;
`;

const FormGreetingsTxt = styled.h3`
font-size:20px;
color:var(--theme-sub-color);
`;


const SideImgContainer = styled.div``;
const OverlayTxt = styled.h2``;
const SideImgCover = styled.div`
padding:30px;
background:grey;
width:50vw;
height:679px;
background-image:url(${City});


@media(max-width:768px){
    display:none;
    }
`;

const FormSubContainer = styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
gap:2em;
`;

const FormNameContainer =styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;

const FormIdContainer = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;

const NameInputTxt = styled.span`
color:var(--theme-sub-color);
font-weight:bold;
`;

const IdInputTxt = styled.span `
color:var(--theme-sub-color);
font-weight:bold;
`;

const NameInputBox = styled.input`
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

const IdNumberInputBox = styled.input`
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


const AuthenticationParentContainer =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:1em;

@media(max-width:768px){
gap:2em;    
}
`;


const AuthInfo=styled.p`
color:var(--theme-sub-color);
font-size:16px;
`;

const SignupBtn = styled.button`
background:var(--theme-primary-theme-color);
padding:15px;
width:320px;
font-size:14px;
font-weight:bold;
color:var(--theme-sub-color);
border-radius:5px;
cursor:pointer;
transform:scale(100%);
transition:linear,300ms;

&:focus{
transform:scale(90%);
}

`;

const SignupBtnOptionContainer = styled.div`
display:flex;
flex-direction:column;
gap:10px;
text-align:center;

`;

const SigninBtn = styled.button`
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

const AuthOpt = styled.b`
color:var(--theme-sub-color);
display:none;
`;

let Signinpage=()=>{
    let NavigationObj = useNavigate();
    const [getName,setName]=useState("");
    const [getIdNo,setIdNo]=useState("");
    const [error,setError]=useState({nameElem:'transparent',idElem:"transparent"});
    const [modalMsg,setModalMsg]=useState("");
    const [btnState,setbtnState]=useState("Sign in 🔥");

    // function to handle input name 
    let HandleNameInput=(e)=>{
        setName(e.target.value)
    }

    let HandleIdInput=(e)=>{
        setIdNo(e.target.value);
    }

    // function to handle signin 
    let HandleSigninAction=async()=>{
        let modal_box_component = document.querySelector("#modal_box");
        const api={
            live_api:"https://williamscommunitymanagementapi.onrender.com/api/sign_in_user", // live api 
            dev_api:"http://localhost:3304/api/sign_in_user" // api for development 
        }

        if(getName.length===0){
            setError({
                nameElem:'red',
                idElem:'transparent'
            })
        }
        else
        if(getIdNo.length===0){
            setError({
                nameElem:'transparent',
                idElem:'red'
            })
        }
        if(getName.length===0 && getIdNo.length===0){
            setError({
                nameElem:'red',
                idElem:'red'
            })
        }
        else{
            // remove error state from both elements 
            setError({
                nameElem:'transparent',
                idElem:'transparent'
            })

            // change signin btn state to loading 
            await setbtnState("Please wait... ⌛")

            // define api helper method 
            let payload=JSON.stringify({last_name:getName,id_no:getIdNo})
            let networkParams ={
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:payload
            }

            let apiHelperMethod = await fetch(api.live_api,networkParams);
            let apiFeedback = await apiHelperMethod.json();
            if(apiFeedback.errMsg=="Wrong Credentials provided"){
            modal_box_component.style.display="flex"
            setModalMsg(`Wrong Credentials Provided 🚩`)
            setError({
                nameElem:'red',
                idElem:'red'
            })
            // reset btn state 
            await setbtnState("Sign in 🔥");
            }
            else{
                if(apiFeedback.session_id.length>0){
                    setError({
                        nameElem:'transparent',
                        idElem:'transparent'
                    })      
                    modal_box_component.style.display="flex"
                    setModalMsg(`Signin Successful ✅`);
                    setTimeout(async()=>{
                        await NavigationObj("/user/dashboard")   
                    },5000)
                }
            }
        }

    }

    // handle signup button navigation 
    let HandleSignupNavigation =()=>{
        NavigationObj("/")
    }

    return(
        <>
        <ParentContainer>
            {/* ----------------------form container section----------------------------- */}
            <FormParentContainer>

                <FormHeaderParentContainer>
                <FormLogoContainer>
                    <FormOfficialLogo src={inverse_logo} />
                    <FormLogoTxt>Deflow</FormLogoTxt>
                </FormLogoContainer>
                <FormGreetingsTxt>👋 Welcome Back Cheif </FormGreetingsTxt>
                </FormHeaderParentContainer>
                
                <FormSubContainer>
                    <FormNameContainer>
                        <NameInputTxt>Last Name</NameInputTxt>
                        <NameInputBox style={{borderColor:error.nameElem}} onChange={HandleNameInput} placeholder='our registered last name' />
                     </FormNameContainer>
                    
                    <FormIdContainer>
                        <IdInputTxt>Id No</IdInputTxt>
                        <IdNumberInputBox style={{borderColor:error.idElem}} onChange={HandleIdInput} placeholder='Your Id No' />
                    </FormIdContainer>

                    <AuthenticationParentContainer>
                        <SigninBtn onClick={HandleSigninAction}>{btnState}</SigninBtn>
                        <AuthOpt>Or</AuthOpt>
                        <SignupBtnOptionContainer>
                            <SignupBtn onClick={HandleSignupNavigation}>Back ⚡</SignupBtn>
                        </SignupBtnOptionContainer>
                    </AuthenticationParentContainer>
                </FormSubContainer>
            </FormParentContainer>
            
            {/* --------------------------side container ---------------------------- */}
            <SideImgContainer>
                
                <SideImgCover></SideImgCover>
            </SideImgContainer>
        </ParentContainer>
        <ModalComponent msg={modalMsg} />
        </>
    )
}

export default Signinpage;
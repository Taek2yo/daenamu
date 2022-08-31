import React from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const history = useHistory();
    return <StContainer>
                <Stbutton onClick={() => { history.push("/");}}> 🏠 </Stbutton>
                <h3>캠프 대나무숲</h3>
           </StContainer>
}

export default Header;

const Stbutton = styled.button`

    padding: 0 20px;
    margin: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;

`

const StContainer = styled.div`
    
    align-items: center;
    border: 0px solid #38A3A5;
    display: flex;
    height: 45px;
    justify-content: space-between;
    background-color:#22577A;
    padding: 10px;
`
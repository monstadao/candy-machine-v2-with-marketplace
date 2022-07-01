import React from 'react'
import styled from 'styled-components'
import {MdDoubleArrow} from 'react-icons/md'
const Home = () => {
  return (
    <>
    <Container>
      <Section>
        <img src="monstaa.png" />
      </Section>
    </Container>
    <FooterContainer>
      <FooterCopy>© 2022, Monsta Scientist.</FooterCopy>
      <FooterSect>
        <FooterButt>
          <>
            <FooterH3>Need more detail?<br/>BACK TO HOME</FooterH3>
          </>
          <FooterButt2>
            <A href="https://monstascientist.io">
              <MdDoubleArrow color="#CA8A04"></MdDoubleArrow>
            </A>
          </FooterButt2>
        </FooterButt>
      </FooterSect>
    </FooterContainer>
    </>
  )
}

export default Home

const Container = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
width: 100%; 
height: 50vh;
`;

const Section = styled.div`
  position: fixed; 
  justify-content: center; 
  align-items: center; 

  img{
    height: 600px;
    margin-top: 350px;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (max-width: 650px){
      img{
        height:200px;
        margin-top: 100px;
      }
    }
`;

const FooterContainer = styled.div`
  box-sizing: border-box; 
display: flex; 
position: fixed; 
bottom: 0; 
background-color: transparent; 
justify-content: space-around; 
width: 100%; 
height: 8rem; 
`;

const FooterCopy = styled.div`
box-sizing: border-box; 
padding-right: 0; 
padding-top: 2rem; 
padding-left: 6rem; 
font-family: sans-serif;
color: #CA8A04; 
font-size: 14px;
line-height: 1rem; 


@media (min-width: 768px) { 
  padding-right: 500px;
 }
`;

const FooterSect = styled.div`
box-sizing: border-box; 
display: none; 


@media (min-width: 768px) { 
  display: flex; 
 }
`;

const FooterButt = styled.div`
  display: flex; 
  background-color: #FDE68A;

padding-top: 1.25rem; 
padding-right: 1.5rem; 
padding-left: 1.5rem; 
justify-content: space-between; 
height: 5rem; 
border-radius: 0.75rem; 
width: 400px;

`;

const FooterH3 = styled.h3`
padding-left: 1.25rem; 
color: #CA8A04; 
font-size: 0.75rem;
line-height: 1rem; 
font-weight: 700; 
text-transform: uppercase; 
`;


const FooterButt2 = styled.div`
box-sizing: border-box; 
display: flex; 
background-color: #ffffff; 
font-size: 1.5rem;
line-height: 2rem; 
font-weight: 700; 
text-align: center; 
text-transform: uppercase; 
justify-content: center; 
width: 9rem; 
height: 3rem; 
border-radius: 0.375rem; 
cursor: pointer; 
padding-right: 25px;
padding-left: 25px;






:hover {
 font-size: 1.875rem;
line-height: 2.25rem; 
 }
`

const A = styled.a`
padding-top: 0.75rem;
padding-bottom: 0.75rem; 
padding-left: 3.5rem;
padding-right: 3.5rem; 
`;
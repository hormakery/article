import styled from "styled-components";

export const LayoutMaxwidthWrapper =styled.main`
display: flex;
max-width: 1000px;
justify-content: center;
border-radius: .9rem;

@media(max-width: 650px){
    flex-direction: column;
}
`

export const Left=styled.div`
flex: 0.4;



.drawer-img{
    height: 100%;
   width: 100%;
   object-fit: cover;
   display: block; 
   border-top-left-radius: .4rem;
   border-bottom-left-radius: .4rem;

   @media(max-width: 650px){
    border-top-right-radius: .4rem;
    border-top-left-radius: .4rem;
   }
}


`

export const Right=styled.div`
flex: 0.6;
display: flex;
padding: 3rem;
// border: 2px solid green;
background-color: #fff;
flex-direction: column;
border-top-right-radius: .4rem;
border-bottom-right-radius: .4rem;

@media(max-width: 650px){
    padding: 2rem;
    border-bottom-right-radius: .4rem;
    border-bottom-left-radius: .4rem;
}


`

export const Title=styled.h1`
color: #868996;
font-size: 1.9rem;
margin-bottom: 1rem;

@media(max-width: 650px){
    font-size: 1.5rem;
}
`

export const Excerpt =styled.p`
font-size: 1rem;
color: #62656c;
max-width: 450px;
margin-bottom: 1.5rem;

`

export const ProfileWrapper=styled.div`
display: flex;
color: #62656c;
align-items: center;
// position: relative;
justify-content: space-between;

@media(max-width: 650px){
    position: relative;
    // visibility: none;
}
`

export const Profile=styled.div`
display: flex;
`

export const Image=styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
`

export const StatusWrapper=styled.div`
display: flex;
font-size: .9rem;
flex-direction: column;

span{
    margin-left: 1rem;
    :first-child{
        font-weight: 600;
        
    }

    :last-child{
        color: #868996;
    }
}
`

export const ArrowWrapper=styled.div`
width: 30px;
height:30px;
display: flex;
cursor: pointer;
text-align: center;
align-items: center;
border-radius: 50%;
justify-content: center;
background-color: #f3f4f5;
`

export const ArrowIcon=styled.img`
width: 15px;
height: 15px;
background-position: center;

`

export const ShareOption=styled.div`
right: 20px;
display: flex;
// bottom: 15rem;
align-items: center;
border-radius: .4rem;
padding: 1rem 2rem;
position: absolute;
background-color: #48556a;
transform: translate(-30%, 20%);

@media(max-width: 650px){
    display: block;
    position: relative;
    transform: translate(10%, 10%);
}
`

export const Icon=styled.span`
margin-left: 1rem;
cursor: pointer;

:first-child{
    color: #868996;
    letter-spacing: 1.2;
    text-transform: uppercase;
}
`


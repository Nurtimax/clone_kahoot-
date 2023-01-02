import styled from "styled-components";
import { ICartItemImage } from "../types";

export const HeaderStyled = styled.div`
  & .logo {
    color: "#e21a3b";
    flex-grow: 1;
    & a:hover {
      color: yellow;
    }
  }
`;

export const NavImageStyled = styled.div`
  & {
    background-image: url("https://source.unsplash.com/random"),
      linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 3rem 0;
    height: 70vh;
    width: 100%;
    background-blend-mode: overlay;
    color: white;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

// // 'https://source.unsplash.com/random'

export const CardItemStyled = styled.div`
  & .cardItem_category {
    color: gray;
    padding: 0.5rem 0;
  }
  & .cardImage {
    background-image: url(${({ imageForCard }: ICartItemImage) =>imageForCard});
    padding: 5rem;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  & {
    padding: 1.5rem 0;
  }
  & .title,
  .description {
    padding: 0.23rem;
    width: 100%;
  }
`;

export const SettingTestStyled = styled.div`
  & .setting_cards {
    height: 100vh;
    overflow: auto;
  }
`;

export const ImageSkeletStyled = styled.div`
  & {
    width: 150px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e1e1e3;
    border-radius: 2px;
  }
  & span {
    width: 30px;
    height: 30px;
  }
`;



export const InputEmailStyled=styled.div`
display: grid;
grid-row-gap: 20px;
`
export const ButtonStyled=styled.div`
display:flex;
justify-content:center;
`
export const ContainerStyled=styled.div`
background-color:#F8F8FF ;
box-shadow: rgba(0,0,0,0.4) 0  5px 4px;
width: 400px;
margin: 0 auto;
padding:40px;
margin-top:20px;
`
export const SpanStyled=styled.span`
padding-left: 20px;

`
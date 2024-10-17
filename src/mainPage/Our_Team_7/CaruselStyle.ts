import styled from "styled-components";

export const Main_carusel = styled.div`
background-color:  #0B0B0B;
height: 920px;
padding-top: 120px;

.iconYellow_text_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.icon_yellow_style {
  width: 65px;
  height: 15px;
}
.Our_style {
  color: var(--White, #FFF);
  text-align: center;
  font-family: "Syne", sans-serif;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; 
}
.image {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  p {
    color: var(--White, #FFF);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "Syne", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; 
    text-transform: capitalize;
   
  }
}


@media only screen and (max-width: 930px) {
  display: none;
}


`
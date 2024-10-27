import styled from "styled-components";

export const Wrapper_team = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0B0B0B;
  padding-top: 120px;
  padding-bottom: 80px;

.main_wrapper {
  width: 900px;
  display: grid;
  justify-content: space-between;
  grid-template-areas: 'a a a';
}

@media only screen and (max-width: 900px) {


.main_wrapper {
  width: 900px;
  display: grid;
  justify-content: center;
  grid-template-areas: 'a a';
  column-gap: 30px;
 }
}
@media only screen and (max-width: 430px) {

.main_wrapper {
  width: 900px;
  display: grid;
  justify-content: center;
  grid-template-areas: 'a';
  column-gap: 30px;
 }
}

`

export const Container_wrapper = styled.div`


.image_wrapper {

}
.image_style {
  width: 290px;
  height: 380px;
  border-radius: 30px;
  background: var(--700, #171717);
  border: 1px solid black;
  border: none;
  opacity: 0.8;
}
.text_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 100px;
  margin-top: -80px;
}
.head_text {
  color: var(--White, #FFF);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  text-transform: capitalize;
}
.tab_text {
  color: var(--White, #FFF);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
}

.SnsWrapper {
  display: flex;
  gap: 10px;
}
.round {
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid pink;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.round:hover {
  transform: scale(1.050);
  border: 1px solid yellow;
}
.round:active {
  transform: scale(1.1);
}
.youtube_style {
  color: yellow;
}
.telegram_style {
  color: yellow;
}
.instagram {
  color: yellow;  
}
`
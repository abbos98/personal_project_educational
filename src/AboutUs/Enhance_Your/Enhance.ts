import styled from "styled-components";

export const Wrapper_Enhance =styled.div`
background-color:  #0B0B0B;
width: 100%;
display: flex;
justify-content: center;
padding-top: 120px;

.main_main {
  width: 900px;
}
.main_text_wrapper {
  padding-bottom: 50px;
}
.main_text_style {
  color: var(--White, #FFF);
  text-align: center;
  font-family: "Syne", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; 
}
.boxes_wrapper {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.box_style {
  width: 900px;
  height: 140px;
  border-radius: 20px;
  border: 2px solid var(--700, #171717);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
}
.box_style:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
    border: 1px solid yellow;
}
.first_line {

}
.grow_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 14px;
  width: 245px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
}
.social_style {
  color: var(--800, #7A7A7A);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
}
.second_line {

}
.digital_mar {
  width: 300px;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.8;
}
.third_line {
 
}
.box_image_style {
  width: 170px;
  height: 110px;
  border-radius: 20px;
  background: #D9D9D9;
}
.fourth_line {
  background-color: transparent;
  color: black;
  width: 95px;
  height: 35px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.fourth_line:hover {
    background-color: yellow;
button {
    color: black;
}
.arrow_style {
    color: black;
}
}
.fourth_line:active {
  transform: scale(1.1);
}
.button_style {
  background: transparent;
  color: #FFF;
  font-family: "Inter", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px; 
  text-transform: uppercase;
  border: none;
}
.arrow_style {
    width: 15px;
    height: 15px;
    color: white;
}

`
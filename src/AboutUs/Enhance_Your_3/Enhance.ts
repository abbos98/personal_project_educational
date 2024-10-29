import styled from "styled-components";

export const Wrapper_Enhance =styled.div`
background-color:  #0B0B0B;
width: 100%;
display: flex;
justify-content: center;
padding-top: 120px;

.main_main {
  max-width: 900px;
  width: 100%;

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
  max-width: 900px;
  width: 100%;
}
.boxes_wrapper {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.box_style {
  max-width: 900px;
  width: 100%;
  height: 140px;
  border-radius: 20px;
  border: 2px solid var(--700, #171717);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  cursor: pointer;
}
.box_style:hover {
  transform: scale(1.050);
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
  line-height: 25px; 
  max-width: 250px;
  width: 100%;
}
.social_style {
  color: var(--800, #7A7A7A);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
  max-width: 100px;
  width: 100%;
}
.second_line {

}
.digital_mar {
  max-width: 300px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
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
  cursor: pointer;
  width: 60px;
}
.arrow_style {
  max-width: 15px;
  width: 100%;
  height: 15px;
  color: white;
}


@media only screen and (max-width: 930px) {


.boxes_wrapper {
  padding: 0px 15px;
}




}
@media only screen and (max-width: 630px) {

.grow_style {
  font-size: 10px;
}

.grow_style {
  max-width: 90px;
  width: 100%;
  line-height: 20px;
}
.social_style {
  font-size: 13px;
  padding-top: 3px;
}
.digital_mar {
  width: 170px;
  line-height: 15px;
  font-size: 12px;
}
.box_image_style {
  max-width: 130px;
  width: 100%;
}


}
@media only screen and (max-width: 430px) {
  

.main_text_style {
  line-height: 40px;
  font-size: 28px;
}
.grow_style {
  font-size: 15px;
  line-height: 15px;
}
.social_style {
  width: 100px;
  margin-top: 10px;
}
.digital_mar {
  width: 125px;
  line-height: 15px;
}
.third_line {
  display: none;
}
}

`